import React, { useState, useRef } from 'react';
import { Language, translations } from '../translations';
import { motion } from 'motion/react';
import { Users, Info } from 'lucide-react';

interface TableMapsProps {
  language: Language;
}

interface TableObj {
  id: string;
  startX: number;
  startY: number;
  seats: number;
}

const TableGraphic = ({ seats }: { seats: number }) => {
  // Dynamic sizing based on seats
  const size = 40 + Math.min(seats * 6, 80);
  const radius = size / 2 + 8; // Offset for chairs

  return (
    <div style={{ width: size, height: size }} className="relative flex items-center justify-center bg-white border-[3px] border-sky-400 rounded-full shadow-md">
      <span className="font-bold text-sky-700 select-none pointer-events-none text-sm md:text-base">{seats}</span>
      
      {/* Render chairs (dots) */}
      {Array.from({ length: seats }).map((_, i) => {
        const angle = (i / seats) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        return (
          <div 
            key={i} 
            className="absolute w-3 h-3 md:w-4 md:h-4 bg-amber-100 border-2 border-amber-400 rounded-full shadow-sm pointer-events-none transition-all duration-300"
            style={{
               transform: `translate(${x}px, ${y}px)`
            }}
          />
        )
      })}
    </div>
  );
};

export function TableMaps({ language }: TableMapsProps) {
  const t = translations[language].tableMaps;
  const canvasRef = useRef<HTMLDivElement>(null);
  const [tables, setTables] = useState<TableObj[]>([]);
  
  const windowText = language === 'cs' ? 'OKNA' : 'WINDOWS';
  const entranceText = language === 'cs' ? 'VSTUP' : 'ENTRANCE';
  
  const dragText = language === 'cs' ? 'Přetáhněte stoly z inventáře níže...' : 'Drag tables from the inventory below...';
  const inventoryText = language === 'cs' ? 'Inventář (Přetáhněte stoly na plochu)' : 'Inventory (Drag tables to floor plan)';
  const tipText = language === 'cs' ? 'Tip: Přetáhněte jeden stůl na druhý pro jejich spojení!' : 'Tip: Drag one table onto another to merge them!';

  const handleInventoryDrop = (e: any, info: any, defaultSeats: number) => {
    let clientX, clientY;
    if (e.changedTouches && e.changedTouches.length > 0) {
        clientX = e.changedTouches[0].clientX;
        clientY = e.changedTouches[0].clientY;
    } else {
        clientX = e.clientX;
        clientY = e.clientY;
    }
    
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    
    // Check if dropped inside canvas
    if (clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom) {
        const startX = clientX - rect.left - 30; // Center offset
        const startY = clientY - rect.top - 30;
        
        setTables(prev => [...prev, {
            id: Math.random().toString(),
            startX,
            startY,
            seats: defaultSeats
        }]);
    }
  };

  const handleCanvasTableDrop = (e: any, info: any, draggedId: string) => {
    const draggedEl = document.getElementById(`table-${draggedId}`);
    if (!draggedEl) return;
    const draggedRect = draggedEl.getBoundingClientRect();
    
    let merged = false;
    
    setTables(prev => {
        const newTables = [...prev];
        const draggedTableIdx = newTables.findIndex(tbl => tbl.id === draggedId);
        if (draggedTableIdx === -1) return prev;
        
        for (let i = 0; i < newTables.length; i++) {
            if (newTables[i].id === draggedId) continue;
            
            const otherEl = document.getElementById(`table-${newTables[i].id}`);
            if (!otherEl) continue;
            
            const otherRect = otherEl.getBoundingClientRect();
            
            // Overlap detection
            const isOverlapping = !(
                draggedRect.right < otherRect.left || 
                draggedRect.left > otherRect.right || 
                draggedRect.bottom < otherRect.top || 
                draggedRect.top > otherRect.bottom
            );
            
            if (isOverlapping) {
                // Merge into the other table (cap at 24 seats)
                newTables[i] = {
                    ...newTables[i],
                    seats: Math.min(newTables[i].seats + newTables[draggedTableIdx].seats, 24)
                };
                merged = true;
                break; 
            }
        }
        
        if (merged) {
            // Remove the dragged table since it merged
            newTables.splice(draggedTableIdx, 1);
            return newTables;
        }
        
        return prev;
    });
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Interactive Canvas */}
          <div 
            ref={canvasRef} 
            className="w-full aspect-[4/3] md:aspect-[16/9] bg-slate-50 rounded-3xl border-2 border-dashed border-slate-300 relative shadow-inner overflow-hidden flex items-center justify-center"
          >
            {/* Empty State Text */}
            {tables.length === 0 && (
                <div className="text-center opacity-60 pointer-events-none select-none px-4">
                  <Users size={56} className="mx-auto mb-4 text-slate-400" />
                  <p className="text-xl font-medium text-slate-500 max-w-sm mx-auto">{dragText}</p>
                </div>
            )}

            {/* Room Markers (Windows/Entrance) */}
            <div className="absolute top-0 left-[20%] right-[20%] h-8 bg-sky-100/60 border-b border-sky-200 rounded-b-2xl flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-bold text-sky-700 tracking-widest">{windowText}</span>
            </div>
            <div className="absolute bottom-0 left-[40%] right-[40%] h-8 border-t-4 border-dashed border-slate-300 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase">{entranceText}</span>
            </div>

            {/* Rendered Tables */}
            {tables.map(tbl => (
               <motion.div
                 key={tbl.id}
                 id={`table-${tbl.id}`}
                 drag
                 dragConstraints={canvasRef}
                 dragMomentum={false}
                 onDragEnd={(e, info) => handleCanvasTableDrop(e, info, tbl.id)}
                 style={{ position: 'absolute', left: tbl.startX, top: tbl.startY }}
                 className="z-10 cursor-grab active:cursor-grabbing touch-none"
                 whileHover={{ scale: 1.05 }}
                 whileDrag={{ scale: 1.1, zIndex: 50 }}
               >
                  <TableGraphic seats={tbl.seats} />
               </motion.div>
            ))}
          </div>

          {/* Helper Tip */}
          <div className="flex items-center justify-center gap-2 mt-4 text-sky-600 font-medium text-sm">
            <Info size={16} />
            {tipText}
          </div>

          {/* Inventory */}
          <div className="mt-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8 justify-center max-w-fit mx-auto relative z-50">
             <span className="font-semibold text-slate-700 tracking-tight">{inventoryText}</span>
             
             <div className="flex gap-10 items-center justify-center">
                {[2, 4, 6].map(seats => (
                    <motion.div
                       key={`inv-${seats}`}
                       drag
                       dragSnapToOrigin
                       dragMomentum={false}
                       onDragEnd={(e, info) => handleInventoryDrop(e, info, seats)}
                       className="cursor-grab active:cursor-grabbing relative z-50 touch-none"
                       whileHover={{ scale: 1.1 }}
                       whileDrag={{ scale: 1.1 }}
                    >
                        <TableGraphic seats={seats} />
                    </motion.div>
                ))}
             </div>
          </div>
        </motion.div>

      </div>
      
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-sky-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2"></div>
    </section>
  );
}
