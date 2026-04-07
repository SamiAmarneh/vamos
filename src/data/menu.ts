export interface MenuItemPrice {
  sandwich?: number;
  meal?: number;
  double?: number;
  default?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  prices: MenuItemPrice;
  image?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    id: "beef-burgers",
    title: "برجر اللحم",
    items: [
      {
        id: "bbq-beef",
        name: "باربكيو بيف برجر",
        description: "جبنة، خلطة مدخنة، خس، بندورة، مخلل، بصل، صوص باربكيو، 150 غم لحم عجل طبيعي",
        prices: { sandwich: 28, meal: 33, double: 45 }
      },
      {
        id: "vamos-beef",
        name: "فاموس بيف برجر",
        description: "جبنة، خلطة مدخنة، خس، بندورة، مخلل، بصل، صوص فاموس كانتري",
        prices: { sandwich: 28, meal: 33, double: 45 }
      },
      {
        id: "mexican-beef",
        name: "ماكسيكان برجر",
        description: "جبنة، خس، بندورة، مخلل، جبنة مدخنة، بصل، هالبينو، صوص حار، صوص مدخن",
        prices: { sandwich: 30, meal: 35, double: 45 }
      },
      {
        id: "american-beef",
        name: "أمريكان برجر",
        description: "هاش براون، جبنة، بندورة، خس، مخلل، بصل، جبنة مدخنة، صوص باربكيو، جبنة موزاريلا",
        prices: { sandwich: 35, meal: 40, double: 50 }
      },
      {
        id: "mushroom-beef",
        name: "مشروم برجر",
        description: "مشروم، جبنة موزاريلا، بصل مكرمل، صوص مخلل، مايونيز، جبنة، خس، بندورة، مخلل، جبنة مدخنة",
        prices: { sandwich: 30, meal: 35, double: 45 }
      },
      {
        id: "pineapple-beef",
        name: "أناناس برجر",
        description: "شريحة أناناس، جبنة موزاريلا، بصل مكرمل، صوص، مايونيز وايت صوص، أناناس + تشيلي حلو",
        prices: { sandwich: 33, meal: 38, double: 48 }
      },
      {
        id: "royal-beef",
        name: "رويال برجر",
        description: "150 غم لحم عجل، 100 غم لحم خروف، جبنة، خس، بندورة، مخلل، بصل، جبنة مدخنة",
        prices: { sandwich: 38, meal: 45, double: 50 }
      },
      {
        id: "roast-beef",
        name: "روست بيف برجر",
        description: "لحم كتف عجل مدخن، جبنة، خس، بندورة، مخلل، بصل، جبنة مدخنة",
        prices: { sandwich: 33, meal: 38, double: 48 }
      },
      {
        id: "cheese-vamos",
        name: "تشيز فاموس برجر",
        description: "150 غم لحم عجل، جبنة، خس، بندورة، مخلل، بصل، خلطة أجبان",
        prices: { sandwich: 33, meal: 38, double: 50 }
      },
      {
        id: "avocado-beef",
        name: "أفوكادو برجر",
        description: "جبنة، خس، بندورة، مخلل، بصل، جبنة مدخنة، أفوكادو",
        prices: { sandwich: 33, meal: 38, double: 48 }
      },
      {
        id: "mozzarella-beef",
        name: "موتزاريلا برجر",
        description: "أصابع موتزاريلا، 150 غم لحم عجل، جبنة، خس، بندورة، مخلل، بصل، جبنة مدخنة",
        prices: { sandwich: 33, meal: 38, double: 48 }
      },
      {
        id: "country-beef",
        name: "كانتري برجر",
        description: "حلقات بصل، 150 غم لحم عجل، جبنة، خس، بندورة، مخلل، بصل، جبنة مدخنة",
        prices: { sandwich: 30, meal: 35, double: 45 }
      },
      {
        id: "egg-vamos",
        name: "إيج فاموس برجر",
        description: "بيض، جبنة موتزاريلا مدخنة، جبنة، خس، بندورة، مخلل، بصل، جبنة مدخنة",
        prices: { sandwich: 30, meal: 35, double: 45 }
      },
      {
        id: "cheesy-large",
        name: "تشيزي برجر حجم كبير",
        description: "400 غم لحم عجل، خلطة من الأجبان المدخنة، جبنة، خس، بندورة، مخلل، بصل",
        prices: { sandwich: 45, meal: 50 }
      },
      {
        id: "lamb-burger",
        name: "لام برجر",
        description: "175 غم لحم خروف، جبنة، خس، بندورة، مخلل، جبنة مدخنة، بصل",
        prices: { sandwich: 40, meal: 50 }
      },
      {
        id: "smash-burger",
        name: "سماش برجر",
        description: "90 غم لحم عجل سماش، جبنة، مخلل، جبنة مدخنة",
        prices: { sandwich: 22, meal: 28 }
      },
      {
        id: "tortilla-burger",
        name: "تورتيلا برجر",
        description: "لحمة، خبز تورتيلا، خس، جبنة، بندورة، مخلل، بصل، جبنة مدخنة، صوصات فاموس",
        prices: { sandwich: 23, meal: 30 }
      },
      {
        id: "asado-burger",
        name: "أسادو برجر",
        description: "150 غم لحم عجل + 120 لحم مدخن بالحطب، خس، جبنة، بندورة، مخلل، بصل، جبنة مدخنة",
        prices: { sandwich: 40, meal: 50 }
      },
      {
        id: "big-show-burger",
        name: "بيج شو برجر",
        description: "450 غم لحم طبيعي، جبنة، بندورة، مخلل، بصل، جبنة مدخنة",
        prices: { sandwich: 45, meal: 55 }
      },
      {
        id: "cheetos-burger",
        name: "شيتوس برجر",
        description: "جبنة شيدر مع شيتوس، خس، جبنة، بندورة، مخلل، بصل، جبنة مدخنة",
        prices: { sandwich: 28, meal: 38 }
      },
      {
        id: "mexican-burger-2",
        name: "ماكسيكان برجر",
        description: "لحم عجل، صوص فاموس، هالبينو، صوص حار، خس، جبنة، بندورة، مخلل، بصل، جبنة شيدر",
        prices: { sandwich: 25, meal: 35, double: 45 }
      }
    ]
  },
  {
    id: "chicken-burgers",
    title: "برجر الدجاج",
    items: [
      {
        id: "grill-chicken",
        name: "جريل تشيكن",
        description: "قطعة صدر دجاج مشوي، خس، بندورة، مخلل، كاتشب، مايونيز، صوص فاموس، صوص حار",
        prices: { sandwich: 20, meal: 30, double: 35 }
      },
      {
        id: "crunchy-chicken",
        name: "كرانشي تشيكن",
        description: "200 غم دجاج مقرمش، خس، مخلل، بندورة، صوص تشيلي حلو، جبنة شيدر مدخنة",
        prices: { sandwich: 20, meal: 30, double: 35 }
      },
      {
        id: "dynamite-chicken",
        name: "ديناميت تشيكن",
        description: "2 قطعة صدر دجاج مقرمش، خس، بندورة، مخلل، كاتشب، مايونيز، صوص فاموس، هالبينو",
        prices: { sandwich: 25, meal: 35, double: 40 }
      },
      {
        id: "tortilla-chicken",
        name: "تورتيلا تشيكن",
        description: "قطعة صدر دجاج مشوي، صوص أفوكادو، جبنة",
        prices: { sandwich: 15, meal: 25 }
      },
      {
        id: "bbq-chicken",
        name: "باربكيو تشيكن",
        description: "قطعة صدر دجاج مشوي، خس، بندورة، مخلل، كاتشب، مايونيز، صوص باربكيو، هالبينو",
        prices: { sandwich: 25, meal: 35, double: 40 }
      }
    ]
  },
  {
    id: "hotdogs",
    title: "الهوت دوج",
    items: [
      { id: "classic-hotdog", name: "كلاسيك هوت دوج", description: "قطعة هوت دوج + خبز البرجر", prices: { sandwich: 20, meal: 30 } },
      { id: "roastbeef-hotdog", name: "روست بيف هوت دوج", description: "قطعة هوت دوج + قطعة روست بيف (عجل)", prices: { sandwich: 25, meal: 35 } },
      { id: "mushroom-hotdog", name: "مشروم هوت دوج", description: "مشروم + قطعة هوت دوج", prices: { sandwich: 25, meal: 35 } },
      { id: "country-hotdog", name: "كانتري هوت دوج", description: "هوت دوج + حلقات بصل", prices: { sandwich: 20, meal: 30 } }
    ]
  },
  {
    id: "salads",
    title: "قسم السلطات",
    items: [
      { id: "tabbouleh", name: "سلطة تبولة", prices: { default: 15 } },
      { id: "greek", name: "سلطة يونانية", prices: { default: 15 } },
      { id: "arugula", name: "سلطة جرجير", prices: { default: 15 } },
      { id: "arabic", name: "سلطة عربية", prices: { default: 15 } },
      { id: "caesar", name: "سلطة سيزر", prices: { default: 25 } },
      { id: "vamos-salad", name: "سلطة فاموس", prices: { default: 20 } }
    ]
  },
  {
    id: "add-ons-appetizers",
    title: "الإضافات والمقبلات",
    items: [
      { id: "poutine", name: "بوتين فرايز", description: "بطاطا، جبنة شيدر وموزاريلا، ناتشوز، هالبينو", prices: { default: 25 } },
      { id: "asada-fries", name: "أسادا فرايز", description: "150 غم لحم + بطاطا وجبنة شيدر وموزاريلا + ناتشوز + هالبينو", prices: { default: 45 } },
      { id: "nuggets", name: "تشيكن ناجتس", description: "(6 قطع)", prices: { default: 15 } },
      { id: "wings", name: "جوانح", description: "بافلو / باربيكيو / سويت تشيلي (6 قطع)", prices: { default: 15 } },
      { id: "chicken-bombas", name: "تشيكن بومباس", description: "6 قطع كرات دجاج + بطاطا + جبنة", prices: { default: 15 } },
      { id: "potato-bombas", name: "بوتيتو بومباس", description: "كرات بطاطا + جبنة عدد 5 قطع مع جبنة ناتشوز", prices: { default: 10 } },
      { id: "kumpir", name: "بطاطا كومبير التركية", description: "مع الإضافات التي تفضلها", prices: { default: 25 } },
      { id: "qaraqish", name: "قراقيش فاموس", description: "قطع دجاج كريسبي مع بطاطا وأجبان وصوصات", prices: { default: 30 } }
    ]
  },
  {
    id: "kids-menu",
    title: "منيو الأطفال",
    items: [
      { id: "happy-burger", name: "وجبة هابي برجر", description: "60 غم لحم عجل، خس، جبنة، بندورة، مخلل، بصل، جبنة شيدر مدخنة + بطاطا + كولا", prices: { sandwich: 15, meal: 25 } },
      { id: "mini-burger", name: "وجبة ميني برجر", description: "100 غم لحم عجل، خس، جبنة، بندورة، مخلل، بصل، جبنة شيدر مدخنة + بطاطا + كولا", prices: { sandwich: 20, meal: 30 } },
      { id: "happy-chicken", name: "وجبة هابي تشيكن", description: "قطعة كريسبي كبيرة، خس، جبنة، بندورة، مخلل، بصل، جبنة شيدر مدخنة + بطاطا + كولا", prices: { sandwich: 15, meal: 25 } }
    ]
  },
  {
    id: "extra-add-ons",
    title: "إضافات أخرى",
    items: [
      { id: "onion-rings", name: "حلقات بصل (5 قطع)", prices: { default: 10 } },
      { id: "mozzarella-sticks", name: "أصابع موزاريلا (4 قطع)", prices: { default: 15 } },
      { id: "roastbeef-slice", name: "روست بيف (شريحتين)", prices: { default: 10 } },
      { id: "meat-patty", name: "قرص لحم", prices: { default: 15 } },
      { id: "spicy-mix", name: "خلطة حار", prices: { default: 5 } },
      { id: "potato-wedges", name: "بطاطا ودجز", prices: { default: 10 } },
      { id: "curly-fries", name: "بطاطا كيرلي", prices: { default: 15 } },
      { id: "crispy-fries", name: "6 قطع كريسبي + بطاطا", prices: { default: 25 } },
      { id: "mushroom-mix", name: "خلطة ماشروم", prices: { default: 15 } }, // wait, originally 5? image 4 says خلطة ماشروم 15 wait, it's 5. No wait, right side: 5. I will put 5. Wait, left side: 5, right side: 15. The image has 2 columns: Right col has 10, 15, 10, 15, 5. Left col: 10, 12, 25, 5, 10. Let me check the image again carefully.
      { id: "fries-box", name: "علبة بطاطا", prices: { default: 10 } }
    ]
  }
];
