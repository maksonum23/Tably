export type Language = 'en' | 'cs';

export const translations = {
  en: {
    nav: {
      features: 'Features',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'Empower Your Restaurant with Smart Automation',
      subtitle: 'Next-generation table reservations, custom floor plans, and AI-powered online menus.',
      cta: 'Get Started',
      secondaryCta: 'Learn More',
    },
    features: {
      title: 'Everything You Need to Run Your Restaurant',
      subtitle: 'Intuitive software designed to streamline operations and enhance the dining experience.',
      reservation: {
        title: 'Smart Table Reservations',
        description: 'Manage bookings effortlessly with our intelligent, conflict-free reservation system.',
      },
      maps: {
        title: 'Custom Table Maps',
        description: 'Tailor-made digital floor plans reflecting your restaurant\'s unique layout and seating capacity.',
      },
      aiMenu: {
        title: 'AI-Powered Menus',
        description: 'Easily update your online menu and generate tempting "Special of the Day" entries using intuitive AI tools.',
      },
    },
    tableMaps: {
      title: 'Beautiful, Intuitive Table Maps',
      subtitle: 'Minimalist blue & white layouts customized for your unique space.',
      cafe: 'Cozy Cafe Layout',
      restaurant: 'Fine Dining Layout',
    },
    menuDemo: {
      title: 'Change Your Menu in Seconds',
      subtitle: 'Edit offerings, add seasonal items, and generate tempting descriptions using AI directly from your phone.',
      badge: 'Special of the Day',
      itemTitle: 'Grilled Salmon',
      itemDesc: 'Fresh herb-crusted salmon served with asparagus and lemon butter sauce.',
      btnEdit: 'Generate with AI',
    },
    customWeb: {
      title: '100% Custom Website Design',
      subtitle: 'We don\'t use cookie-cutter templates like our competitors. Every website is designed and developed from scratch to perfectly capture your restaurant\'s unique vibe.',
    },
    reviews: {
      title: 'Earn 5-Star Reviews on Google Maps',
      subtitle: 'Our smart feedback system filters customer experiences. Happy guests are guided to leave public reviews, while unsatisfied ones are sent to a private feedback form.',
      good: 'It was great!',
      bad: 'Could be better',
    },
    roi: {
      title: 'An Investment That Pays for Itself',
      subtitle: 'Tably isn\'t just software – it\'s a revenue-generating engine. We solve the most expensive problems in the restaurant business so the system pays for itself in the first week.',
      stats: [
        {
          value: '0%',
          title: 'Commission Fees',
          desc: 'Stop paying 30% to booking portals and delivery apps. Get direct, commission-free reservations through your custom website.'
        },
        {
          value: '-80%',
          title: 'No-Shows',
          desc: 'Automated SMS reminders and optional card deposits ensure your tables stay full and your staff isn\'t waiting for empty chairs.'
        },
        {
          value: '+30%',
          title: 'Repeat Guests',
          desc: 'Our smart CRM automatically builds a guest database and sends targeted offers (like birthday discounts) to bring them back.'
        }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        { q: 'How does the AI menu work?', a: 'Our AI tools help you quickly generate descriptions, translate items, and instantly add "Specials of the day" without technical skills.' },
        { q: 'Is the table map customized for my restaurant?', a: 'Yes! We design the digital floor plan exactly according to your actual layout, ensuring perfect synchronization with your real-world seating.' },
        { q: 'Can I change the floor plan later?', a: 'Absolutely. You can easily adjust table positions, add temporary seating, or merge tables for larger groups.' }
      ]
    },
    contact: {
      title: 'Ready to Transform Your Restaurant?',
      subtitle: 'Join innovative restaurants automating their operations with Tably.',
      cta: 'Contact Us Today',
    },
    modal: {
      title: 'Get in Touch',
      email: 'Email Us',
      phone: 'Call Us',
      close: 'Close',
    },
    footer: {
      rights: '© 2024 Tably. All rights reserved.',
    }
  },
  cs: {
    nav: {
      features: 'Funkce',
      about: 'O nás',
      contact: 'Kontakt',
    },
    hero: {
      title: 'Posuňte svou restauraci dál s chytrou automatizací',
      subtitle: 'Nová éra rezervací. Inteligentní plány stolů a online menu s umělou inteligencí, které roste s vaším podnikem.',
      cta: 'Začít',
      secondaryCta: 'Zjistit více',
    },
    features: {
      title: 'Vše, co potřebujete pro chod restaurace',
      subtitle: 'Intuitivní software navržený k zefektivnění provozu a vylepšení zážitku hostů.',
      reservation: {
        title: 'Chytré rezervace stolů',
        description: 'Spravujte rezervace bez námahy s naším inteligentním systémem bez konfliktů.',
      },
      maps: {
        title: 'Vlastní mapy stolů',
        description: 'Digitální plány na míru, které odrážejí jedinečné uspořádání a kapacitu vaší restaurace.',
      },
      aiMenu: {
        title: 'Menu s umělou inteligencí',
        description: 'Snadno aktualizujte online menu a vytvářejte lákavé "Speciality dne" pomocí AI nástrojů.',
      },
    },
    tableMaps: {
      title: 'Krásné a intuitivní mapy stolů',
      subtitle: 'Minimalistické modro-bílé rozložení přizpůsobené vašemu prostoru.',
      cafe: 'Uspořádání kavárny',
      restaurant: 'Uspořádání restaurace',
    },
    menuDemo: {
      title: 'Měňte své menu během vteřin',
      subtitle: 'Upravujte nabídku, přidávejte sezónní položky a generujte lákavé popisy pomocí umělé inteligence přímo z vašeho telefonu.',
      badge: 'Specialita dne',
      itemTitle: 'Grilovaný losos',
      itemDesc: 'Čerstvý losos s bylinkovou krustou, podávaný s chřestem a citronovou omáčkou.',
      btnEdit: 'Generovat pomocí AI',
    },
    customWeb: {
      title: '100% Individuální webové stránky',
      subtitle: 'Neděláme šablonovitá řešení jako konkurence. Každý web navrhujeme a vyvíjíme od nuly přímo pro váš podnik, abychom dokonale zachytili vaši jedinečnou atmosféru.',
    },
    reviews: {
      title: 'Získejte 5 hvězdiček na Google Mapách',
      subtitle: 'Náš chytrý systém zpětné vazby filtruje zkušenosti zákazníků. Spokojené hosty směřuje na veřejné recenze, nespokojené do soukromého formuláře přímo pro vás.',
      good: 'Bylo to skvělé!',
      bad: 'Mělo to mouchy',
    },
    roi: {
      title: 'Investice, která se sama zaplatí',
      subtitle: 'Tably není jen software – je to nástroj, který vaší restauraci generuje prokazatelný zisk. Řešíme nejdražší problémy v gastru, takže se systém zaplatí už v prvním týdnu.',
      stats: [
        {
          value: '0%',
          title: 'Provize portálům',
          desc: 'Přestaňte platit 30 % rezervačním a rozvozovým aplikacím. Získávejte přímé rezervace bez provize přes svůj vlastní web.'
        },
        {
          value: '-80%',
          title: 'Nedostavení se (No-Shows)',
          desc: 'Automatické SMS připomínky a volitelné rezervační zálohy zajistí, že vaše stoly nezůstanou prázdné a personál nečeká zbytečně.'
        },
        {
          value: '+30%',
          title: 'Vracejících se hostů',
          desc: 'Náš chytrý CRM systém automaticky sbírá data o hostech a posílá jim cílené nabídky (např. k narozeninám), aby se vrátili.'
        }
      ]
    },
    faq: {
      title: 'Často kladené dotazy',
      items: [
        { q: 'Jak funguje AI menu?', a: 'Naše AI nástroje vám pomohou rychle generovat popisy, překládat položky a okamžitě přidávat "Speciality dne" bez technických znalostí.' },
        { q: 'Je mapa stolů přizpůsobena mé restauraci?', a: 'Ano! Digitální plán navrhneme přesně podle vašeho skutečného uspořádání pro dokonalou orientaci.' },
        { q: 'Mohu plán uspořádání později změnit?', a: 'Rozhodně. Můžete snadno upravovat pozice stolů, přidávat dočasná místa nebo spojovat stoly pro větší skupiny.' }
      ]
    },
    contact: {
      title: 'Jste připraveni transformovat svou restauraci?',
      subtitle: 'Připojte se k inovativním restauracím, které automatizují svůj provoz pomocí Tably.',
      cta: 'Kontaktujte nás',
    },
    modal: {
      title: 'Kontaktujte nás',
      email: 'E-mail',
      phone: 'Telefon',
      close: 'Zavřít',
    },
    footer: {
      rights: '© 2024 Tably. Všechna práva vyhrazena.',
    }
  }
};
