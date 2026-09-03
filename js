/* طنط ناهد — Central Restaurant Content
   IMPORTANT: Prices below are PROPOSED launch prices based on observed 2026
   Egyptian menu benchmarks, not final accounting/food-cost quotes.
   Recalculate after supplier quotes, recipe yields, portion weights, rent,
   labor, delivery commissions and target gross margin are known.
*/
const RESTAURANT = {
  brand: {
    nameArabic: "طنط ناهد",
    nameEnglish: "Tanta Nahed",
    taglineArabic: "طعم البيت المصري… على أصوله",
    shortDescription: "أكل مصري دافي، وصفات بيتية، ولمة تحسّك إنك في بيتك.",
    longDescription: "طنط ناهد فكرة مطعم مصري بطابع بيتي: أطباق نعرفها ونحبها، تتقدم ببساطة وكرم، من غير تكلف ومن غير ما نفقد روح الأكل المصري.",
    story: "القصة الشخصية لطنط ناهد هتتضاف قبل الافتتاح بعد اعتماد النسخة النهائية من الحكاية.",
    brandKeywords: ["أكل مصري", "أكل بيتي", "محشي", "ملوخية", "كشري", "فتة", "مطبخ مصري"]
  },

  contact: {
    phoneDisplay: "01030986697",
    phone: "01030986697",
    whatsappNumber: "201030986697",
    whatsappDefaultMessage: "أهلاً طنط ناهد، كنت عايز أستفسر عن المنيو والأسعار.",
    email: "البريد الإلكتروني هيتضاف قبل الافتتاح",
    address: "العنوان هيتضاف قبل الافتتاح",
    mapsUrl: "",
    instagram: "",
    facebook: "",
    tiktok: "",
    googleBusiness: ""
  },

  hours: {
    Saturday: "مواعيد العمل هتتضاف قبل الافتتاح",
    Sunday: "مواعيد العمل هتتضاف قبل الافتتاح",
    Monday: "مواعيد العمل هتتضاف قبل الافتتاح",
    Tuesday: "مواعيد العمل هتتضاف قبل الافتتاح",
    Wednesday: "مواعيد العمل هتتضاف قبل الافتتاح",
    Thursday: "مواعيد العمل هتتضاف قبل الافتتاح",
    Friday: "مواعيد العمل هتتضاف قبل الافتتاح"
  },

  businessStatus: "pre-launch",

  reservation: {
    whatsappNumber: "201030986697",
    cta: "احجز ترابيزتك",
    defaultMessage: "أهلاً طنط ناهد، عايز أحجز ترابيزة.\n\nالاسم:\nعدد الأشخاص:\nالتاريخ:\nالساعة:",
    instructions: "الحجز يتم عن طريق واتساب، والتأكيد النهائي حسب التوافر."
  },

  pricing: {
    researchDate: "2026-09-03",
    note: "الأسعار المقترحة تقديرية لأغراض التخطيط وليست قائمة أسعار نهائية. الأسعار قابلة للتغيير حسب أسعار السوق.",
    status: "proposed-not-final"
  },

  menu: [
    // CORE LAUNCH — breakfast
    {id:"ful", nameArabic:"فول بلدي", nameEnglish:"Ful Medames", category:"breakfast", descriptionArabic:"فول متسبك بالليمون والكمون، يقدم مع عيش بلدي.", price:45, marketPriceRange:"30–60", portion:"طبق فردي", image:"images/menu/ful.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:"سعر مقترح؛ راجع وزن الفول والعيش."},
    {id:"ful-egg", nameArabic:"فول بالبيض", nameEnglish:"Ful with Egg", category:"breakfast", descriptionArabic:"فول بلدي مع بيضة، وجبة فطار مصرية مشبعة.", price:70, marketPriceRange:"50–90", portion:"طبق فردي", image:"images/menu/ful-egg.svg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"taameya", nameArabic:"طعمية بلدي", nameEnglish:"Egyptian Taameya", category:"breakfast", descriptionArabic:"طعمية من الفول والأعشاب، مقرمشة من بره وطرية من جوه.", price:45, marketPriceRange:"40–70 للساندوتش/وجبة بسيطة", portion:"6 قطع", image:"images/menu/taameya.svg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"eggs", nameArabic:"بيض بالطريقة اللي تحبها", nameEnglish:"Eggs Your Way", category:"breakfast", descriptionArabic:"بيض عيون أو مخفوق، مع عيش بلدي.", price:60, marketPriceRange:"40–80", portion:"2 بيضة", image:"images/menu/eggs.svg", vegetarian:true, spicy:false, featured:false, popular:false, available:true, notes:""},
    {id:"cheese", nameArabic:"جبنة مصرية + عيش بلدي", nameEnglish:"Egyptian Cheese Plate", category:"breakfast", descriptionArabic:"جبنة بيضاء أو رومي مع عيش بلدي ومخلل.", price:65, marketPriceRange:"40–90", portion:"طبق فردي", image:"images/menu/cheese.svg", vegetarian:true, spicy:false, featured:false, popular:false, available:true, notes:""},
    {id:"potato", nameArabic:"بطاطس محمرة بلدي", nameEnglish:"Egyptian Fried Potatoes", category:"breakfast", descriptionArabic:"بطاطس محمرة بتتبيلة بسيطة زي بتاعة البيت.", price:55, marketPriceRange:"40–80", portion:"طبق جانبي", image:"images/menu/potato.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},

    // CORE — salads & starters
    {id:"baladi-salad", nameArabic:"سلطة بلدي", nameEnglish:"Baladi Salad", category:"starters", descriptionArabic:"طماطم وخيار وفلفل وبصل ولمسة ليمون.", price:55, marketPriceRange:"40–100", portion:"طبق", image:"images/menu/baladi-salad.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"tahina", nameArabic:"طحينة", nameEnglish:"Tahini", category:"starters", descriptionArabic:"طحينة ناعمة بالليمون والثوم، مثالية مع المشويات.", price:55, marketPriceRange:"35–90", portion:"طبق", image:"images/menu/tahina.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"baba-ghanoush", nameArabic:"بابا غنوج", nameEnglish:"Baba Ghanoush", category:"starters", descriptionArabic:"باذنجان مشوي ومتبل بطابع مصري.", price:60, marketPriceRange:"45–100", portion:"طبق", image:"images/menu/baba-ghanoush.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"pickles", nameArabic:"مخلل بلدي", nameEnglish:"Egyptian Pickles", category:"starters", descriptionArabic:"تشكيلة مخللات تقدم جنب الأكل.", price:35, marketPriceRange:"20–50", portion:"طبق صغير", image:"images/menu/pickles.svg", vegetarian:true, spicy:false, featured:false, popular:false, available:true, notes:""},

    // CORE — home-style
    {id:"molokhia", nameArabic:"ملوخية", nameEnglish:"Molokhia", category:"home-style", descriptionArabic:"ملوخية مصرية بالتقلية، تتقدم مع الرز أو العيش.", price:95, marketPriceRange:"80–200 للملوخية/مع البروتين حسب المطعم", portion:"طبق", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/EgyptianMolokheya.jpg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:"سعر الملوخية وحدها؛ البروتين منفصل."},
    {id:"molokhia-chicken", nameArabic:"ملوخية بالفراخ", nameEnglish:"Molokhia with Chicken", category:"home-style", descriptionArabic:"ملوخية بالتقلية مع ربع فراخ ورز.", price:230, marketPriceRange:"180–394", portion:"وجبة فردية", image:"images/menu/molokhia-chicken.svg", vegetarian:false, spicy:false, featured:true, popular:true, available:true, notes:"راجع وزن البروتين."},
    {id:"fatta-meat", nameArabic:"فتة باللحمة", nameEnglish:"Fatteh with Meat", category:"home-style", descriptionArabic:"عيش محمص ورز وصلصة خل وثوم مع قطع لحمة.", price:260, marketPriceRange:"180–515+", portion:"وجبة فردية", image:"images/menu/fatta-meat.svg", vegetarian:false, spicy:false, featured:true, popular:true, available:true, notes:"السعر حساس جداً لسعر اللحمة."},
    {id:"fatta-chicken", nameArabic:"فتة بالفراخ", nameEnglish:"Chicken Fatteh", category:"home-style", descriptionArabic:"فتة مصرية بالخل والثوم مع قطع فراخ.", price:190, marketPriceRange:"175–394", portion:"وجبة فردية", image:"images/menu/fatta-chicken.svg", vegetarian:false, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"potato-chicken-tagine", nameArabic:"طاجن بطاطس بالفراخ", nameEnglish:"Chicken & Potato Tagine", category:"tagines", descriptionArabic:"بطاطس وفراخ في صلصة طماطم وتتبيلة بيتية، مخبوزة في الفرن.", price:220, marketPriceRange:"285–468", portion:"طاجن فردي", image:"images/menu/potato-chicken.svg", vegetarian:false, spicy:false, featured:true, popular:true, available:true, notes:"سعر مقترح أقل من بعض المطاعم المتوسطة/الأعلى."},
    {id:"bamya-meat", nameArabic:"بامية باللحمة", nameEnglish:"Okra with Meat", category:"tagines", descriptionArabic:"بامية في صلصة طماطم مع قطع لحمة، بطابع أكل البيت.", price:240, marketPriceRange:"180–465+", portion:"طاجن فردي", image:"images/menu/bamya.svg", vegetarian:false, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"roz-muammar", nameArabic:"أرز معمر بالقشطة", nameEnglish:"Oven-Baked Creamy Rice", category:"home-style", descriptionArabic:"أرز معمر مخبوز لحد ما ياخد الوش الذهبي.", price:115, marketPriceRange:"175–195", portion:"طاجن صغير", image:"images/menu/roz-muammar.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"plain-rice", nameArabic:"أرز بالشعرية", nameEnglish:"Vermicelli Rice", category:"rice-mahashi", descriptionArabic:"أرز مصري بالشعرية، مناسب جنب كل أطباق البيت.", price:55, marketPriceRange:"60–75", portion:"طبق", image:"images/menu/rice.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},

    // CORE — koshary
    {id:"koshary", nameArabic:"كشري طنط ناهد", nameEnglish:"Tanta Nahed Koshary", category:"koshary", descriptionArabic:"رز ومكرونة وعدس وحمص وصلصة ودقة وبصل مقرمش.", price:75, marketPriceRange:"48–122 حسب الحجم والمكان", portion:"طبق متوسط", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Koshari.jpg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:"Benchmark includes dedicated koshary shops and premium Egyptian restaurants."},
    {id:"koshary-spicy", nameArabic:"كشري حراق", nameEnglish:"Spicy Koshary", category:"koshary", descriptionArabic:"كشري طنط ناهد مع شطة إضافية ودقة زيادة.", price:80, marketPriceRange:"50–130", portion:"طبق متوسط", image:"images/menu/koshary-spicy.svg", vegetarian:true, spicy:true, featured:false, popular:false, available:true, notes:""},

    // CORE — mahashi
    {id:"mixed-mahashi", nameArabic:"طبق محاشي مشكل", nameEnglish:"Mixed Mahashi", category:"rice-mahashi", descriptionArabic:"كرنب وورق عنب وكوسة وفلفل، حسب المتاح يومياً.", price:110, marketPriceRange:"60–185+ حسب الوزن والمكان", portion:"طبق", image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahshi.jpg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:"من أفضل أطباق الهوية؛ راجع وزن الطبق."},
    {id:"cabbage", nameArabic:"محشي كرنب", nameEnglish:"Stuffed Cabbage", category:"rice-mahashi", descriptionArabic:"كرنب محشي رز متبل بالأعشاب والصلصة.", price:95, marketPriceRange:"60–95", portion:"طبق", image:"images/menu/cabbage.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"vine-leaves", nameArabic:"ورق عنب", nameEnglish:"Stuffed Vine Leaves", category:"rice-mahashi", descriptionArabic:"ورق عنب محشي رز ومتبل بتتبيلة مصرية.", price:105, marketPriceRange:"50–100+", portion:"طبق", image:"images/menu/vine-leaves.svg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"zucchini-mahshi", nameArabic:"محشي كوسة", nameEnglish:"Stuffed Zucchini", category:"rice-mahashi", descriptionArabic:"كوسة محشية رز على طريقة البيت.", price:90, marketPriceRange:"90 تقريباً في benchmark حديث", portion:"طبق", image:"images/menu/zucchini.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"eggplant-mahshi", nameArabic:"محشي باذنجان", nameEnglish:"Stuffed Eggplant", category:"rice-mahashi", descriptionArabic:"باذنجان محشي رز وتوابل مصرية.", price:90, marketPriceRange:"90 تقريباً في benchmark حديث", portion:"طبق", image:"images/menu/eggplant-mahshi.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},

    // CORE — meat
    {id:"kofta", nameArabic:"كفتة مشوية", nameEnglish:"Grilled Kofta", category:"meat", descriptionArabic:"كفتة مشوية مع رز وخضار أو سلطة.", price:290, marketPriceRange:"180–365+", portion:"وجبة", image:"images/menu/kofta.svg", vegetarian:false, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"kebda", nameArabic:"كبدة إسكندراني", nameEnglish:"Alexandrian Liver", category:"meat", descriptionArabic:"كبدة شرائح بالثوم والكمون والفلفل، مع عيش بلدي.", price:160, marketPriceRange:"100–220", portion:"وجبة/ساندوتش حسب التنفيذ", image:"images/menu/kebda.svg", vegetarian:false, spicy:true, featured:true, popular:true, available:true, notes:"Strong brand fit; can be a high-margin hero if portion-controlled."},
    {id:"meat-tagine", nameArabic:"طاجن لحمة بالبصل", nameEnglish:"Meat & Onion Tagine", category:"tagines", descriptionArabic:"قطع لحمة مطهية ببطء مع البصل والصلصة، مع رز بالشعرية.", price:290, marketPriceRange:"340–460+", portion:"طاجن + رز", image:"images/menu/meat-onion-tagine.svg", vegetarian:false, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"meat-potato-tagine", nameArabic:"طاجن بطاطس باللحمة", nameEnglish:"Meat & Potato Tagine", category:"tagines", descriptionArabic:"بطاطس وقطع لحمة في صلصة طماطم مخبوزة.", price:280, marketPriceRange:"180–498", portion:"طاجن + رز", image:"images/menu/meat-potato-tagine.svg", vegetarian:false, spicy:false, featured:false, popular:true, available:true, notes:""},

    // CORE — chicken
    {id:"roast-chicken-quarter", nameArabic:"ربع فراخ محمرة", nameEnglish:"Quarter Roast Chicken", category:"chicken", descriptionArabic:"ربع فراخ متحمرة مع رز بالشعرية وسلطة.", price:185, marketPriceRange:"140–250+", portion:"ربع فرخة + رز", image:"images/menu/roast-chicken.svg", vegetarian:false, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"grilled-chicken", nameArabic:"فراخ مشوية", nameEnglish:"Grilled Chicken", category:"chicken", descriptionArabic:"فراخ متبلة ومشوية، مع رز وسلطة.", price:210, marketPriceRange:"170–342+", portion:"ربع/قطعة حسب التقديم", image:"images/menu/grilled-chicken.svg", vegetarian:false, spicy:false, featured:false, popular:true, available:true, notes:""},

    // CORE — pigeon
    {id:"pigeon-rice", nameArabic:"حمام محشي أرز", nameEnglish:"Pigeon Stuffed with Rice", category:"pigeon", descriptionArabic:"حمام محشي رز وتتبيلة مصرية، مع بطاطس أو سلطة.", price:320, marketPriceRange:"210–407+", portion:"حمامة", image:"images/menu/pigeon-rice.svg", vegetarian:false, spicy:false, featured:true, popular:true, available:true, notes:"High-cost item; review yield, procurement and waste weekly."},
    {id:"pigeon-freekeh", nameArabic:"حمام محشي فريك", nameEnglish:"Pigeon Stuffed with Freekeh", category:"pigeon", descriptionArabic:"حمام محشي فريك، اختيار احتفالي ومميز.", price:340, marketPriceRange:"250–407+", portion:"حمامة", image:"images/menu/pigeon-freekeh.svg", vegetarian:false, spicy:false, featured:false, popular:false, available:true, notes:"Extended/limited availability may be safer at launch."},

    // EXTENDED / seasonal seafood
    {id:"sayadeya", nameArabic:"سمك صيادية", nameEnglish:"Sayadeya Fish", category:"seafood", descriptionArabic:"سمك مع رز صيادية وبصل وتتبيلة مصرية.", price:"PRICE_TO_CONFIRM", marketPriceRange:"NEEDS_LOCAL_VERIFICATION", portion:"طبق", image:"images/menu/sayadeya.svg", vegetarian:false, spicy:false, featured:false, popular:false, available:false, notes:"Add only if reliable fish sourcing and daily demand are established."},

    // desserts
    {id:"om-ali", nameArabic:"أم علي", nameEnglish:"Om Ali", category:"desserts", descriptionArabic:"رقائق مخبوزة باللبن والمكسرات والزبيب، تتقدم دافية.", price:65, marketPriceRange:"40–150", portion:"طبق فردي", image:"images/menu/om-ali.svg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"rice-pudding", nameArabic:"أرز بلبن", nameEnglish:"Rice Pudding", category:"desserts", descriptionArabic:"أرز بلبن كريمي بطعم بسيط وبيتي.", price:55, marketPriceRange:"20–70", portion:"طبق فردي", image:"images/menu/rice-pudding.svg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"mahalabia", nameArabic:"مهلبية", nameEnglish:"Mahalabia", category:"desserts", descriptionArabic:"مهلبية ناعمة وخفيفة.", price:50, marketPriceRange:"32–95", portion:"طبق فردي", image:"images/menu/mahalabia.svg", vegetarian:true, spicy:false, featured:false, popular:false, available:true, notes:""},
    {id:"basbousa", nameArabic:"بسبوسة", nameEnglish:"Basbousa", category:"desserts", descriptionArabic:"بسبوسة طرية بالشربات ولمسة جوز هند.", price:55, marketPriceRange:"NEEDS_LOCAL_VERIFICATION", portion:"قطعة", image:"images/menu/basbousa.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},

    // drinks
    {id:"tea", nameArabic:"شاي", nameEnglish:"Tea", category:"drinks", descriptionArabic:"شاي مصري على أصوله.", price:30, marketPriceRange:"20–50+", portion:"كوب", image:"images/menu/tea.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"turkish-coffee", nameArabic:"قهوة تركي", nameEnglish:"Turkish Coffee", category:"drinks", descriptionArabic:"قهوة تركي سادة أو مظبوط.", price:40, marketPriceRange:"NEEDS_LOCAL_VERIFICATION", portion:"فنجان", image:"images/menu/coffee.svg", vegetarian:true, spicy:false, featured:false, popular:true, available:true, notes:""},
    {id:"karkadeh", nameArabic:"كركديه", nameEnglish:"Hibiscus", category:"drinks", descriptionArabic:"كركديه بارد ومنعش.", price:45, marketPriceRange:"20–80+", portion:"كوب", image:"images/menu/karkadeh.svg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"tamarind", nameArabic:"تمر هندي", nameEnglish:"Tamarind", category:"drinks", descriptionArabic:"تمر هندي بارد بطعم حلو وحامض متوازن.", price:45, marketPriceRange:"20–65+", portion:"كوب", image:"images/menu/tamarind.svg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"sobya", nameArabic:"سوبيا", nameEnglish:"Sobia", category:"drinks", descriptionArabic:"سوبيا باردة بطابع مصري، خصوصاً في رمضان.", price:55, marketPriceRange:"30–69+", portion:"كوب كبير", image:"images/menu/sobia.svg", vegetarian:true, spicy:false, featured:true, popular:true, available:true, notes:""},
    {id:"water", nameArabic:"مياه معدنية", nameEnglish:"Mineral Water", category:"drinks", descriptionArabic:"مياه معدنية.", price:20, marketPriceRange:"10–25", portion:"زجاجة", image:"images/menu/water.svg", vegetarian:true, spicy:false, featured:false, popular:false, available:true, notes:"Brand/size to confirm."},
    {id:"soft-drink", nameArabic:"مشروب غازي", nameEnglish:"Soft Drink", category:"drinks", descriptionArabic:"كانز مشروب غازي.", price:30, marketPriceRange:"20–35", portion:"كانز", image:"images/menu/soft-drink.svg", vegetarian:true, spicy:false, featured:false, popular:false, available:true, notes:"Brand/size to confirm."}
  ],

  signatureDishIds: ["molokhia-chicken","koshary","mixed-mahashi","fatta-meat","kofta","kebda","roast-chicken-quarter","pigeon-rice","om-ali","sobya"],

  pricingResearch: [
    {dish:"كشري", marketPrice:"أمثلة فعلية على Talabat: 48–122 ج.م. حسب الحجم والمطعم؛ Cairo Oldies 110 ج.م.; Abu Tarek 61–122 ج.م.", marketPriceRange:"48–122+", recommendedPrice:"75 ج.م. (مقترح)", portion:"متوسط", pricingDate:"2026-09-03", source:"Talabat menus: Koshary Egypt / Abu Tarek / Cairo Oldies", confidence:"high"},
    {dish:"ملوخية", marketPrice:"Halet Mahshi: 80 ج.م. للطبق المتوسط؛ Cairo Oldies: 105 ج.م. كطاجن؛ Cairo Kitchen: 342 ج.م. مع فراخ و399 ج.م. مع لحم", marketPriceRange:"80–399 حسب وجود البروتين والمستوى", recommendedPrice:"95 ج.م. سادة / 230 ج.م. مع ربع فراخ (مقترح)", portion:"طبق / وجبة", pricingDate:"2026-09-03", source:"Talabat menus: Halet Mahshi / Cairo Oldies / Cairo Kitchen", confidence:"high"},
    {dish:"محاشي", marketPrice:"Halet Mahshi: كرنب 95، ورق عنب 100، كوسة/باذنجان/فلفل نحو 90؛ Kebabji Alaa Eldin: نصف كيلو مشكل 95، كيلو 185", marketPriceRange:"90–185+ حسب الوزن", recommendedPrice:"90–110 للطبق الفردي (مقترح)", portion:"طبق", pricingDate:"2026-09-03", source:"Talabat menus: Halet Mahshi / Kebabji and grills Alaa Eldin", confidence:"high"},
    {dish:"فتة باللحمة", marketPrice:"Kebabji Alaa Eldin 315؛ Cairo Kitchen 399؛ Am Saeed 180؛ Om Abdo 515", marketPriceRange:"180–515+", recommendedPrice:"260 ج.م. (مقترح)", portion:"فردي", pricingDate:"2026-09-03", source:"Talabat menus: Kebabji Alaa Eldin / Cairo Kitchen / Am Saeed / Om Abdo", confidence:"high"},
    {dish:"كفتة", marketPrice:"Cairo Kitchen grilled kofta 364.80؛ سوق أوسع يختلف حسب الوزن والمقبلات", marketPriceRange:"180–365+", recommendedPrice:"290 ج.م. (مقترح)", portion:"وجبة مع رز وسلطة", pricingDate:"2026-09-03", source:"Talabat: Cairo Kitchen; Am Saeed benchmarks", confidence:"medium"},
    {dish:"حمام محشي", marketPrice:"Halet Mahshi 210؛ Baladina 305؛ Cairo's 331؛ Seekh Mashwy نحو 387–407", marketPriceRange:"210–407+", recommendedPrice:"320 ج.م. (مقترح)", portion:"حمامة", pricingDate:"2026-09-03", source:"Talabat menus: Halet Mahshi / Baladina / Cairo's / Seekh Mashwy", confidence:"high"},
    {dish:"أرز بلبن", marketPrice:"Koushari Hend 20–45 حسب الإضافات؛ Halib Halab 25–79 حسب الإضافات؛ Soft Cream 70 للمكسرات", marketPriceRange:"20–79+", recommendedPrice:"55 ج.م. (مقترح)", portion:"فردي", pricingDate:"2026-09-03", source:"Talabat menus: Koushari Hend / Halib Halab / Soft Cream", confidence:"high"},
    {dish:"مشروبات مصرية", marketPrice:"Kabab Shaker: كركديه/تمر هندي 20؛ City Drink: 25–50؛ Juice Factory: المشروبات الشرقية الكبيرة 38–69", marketPriceRange:"20–69+", recommendedPrice:"45–55 ج.م. للكوب الكبير (مقترح)", portion:"كوب كبير", pricingDate:"2026-09-03", source:"Talabat menus: Kabab Shaker / City Drink / Juice Factory", confidence:"high"}
  ],

  gallery: [
    {image:"images/gallery/food-table.svg", altArabic:"ترابيزة أكل مصري بيتي", altEnglish:"Egyptian home-style food table", caption:"تصور بصري — الصورة الحقيقية هتتضاف بعد التصوير", featured:true},
    {image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Mahshi.jpg", altArabic:"محاشي مصرية", altEnglish:"Egyptian mahashi", caption:"تصور بصري — الصورة الحقيقية هتتضاف بعد التصوير", featured:true},
    {image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/EgyptianMolokheya.jpg", altArabic:"ملوخية مصرية", altEnglish:"Egyptian molokhia", caption:"تصور بصري — الصورة الحقيقية هتتضاف بعد التصوير", featured:true},
    {image:"https://commons.wikimedia.org/wiki/Special:Redirect/file/Koshari.jpg", altArabic:"كشري مصري", altEnglish:"Egyptian koshary", caption:"تصور بصري — الصورة الحقيقية هتتضاف بعد التصوير", featured:true},
    {image:"images/gallery/oven.svg", altArabic:"أكل مصري خارج من الفرن", altEnglish:"Egyptian oven dish", caption:"تصور بصري — الصورة الحقيقية هتتضاف بعد التصوير", featured:false},
    {image:"images/gallery/dessert.svg", altArabic:"حلويات مصرية", altEnglish:"Egyptian desserts", caption:"تصور بصري — الصورة الحقيقية هتتضاف بعد التصوير", featured:false}
  ],

  reviews: [],

  seo: {
    title:"طنط ناهد | طعم البيت المصري… على أصوله",
    metaDescription:"طنط ناهد — أكل مصري بطعم البيت: محشي، ملوخية، كشري، فتة، فراخ، لحوم وحلويات مصرية. المنيو والحجز والتواصل على واتساب.",
    keywords:"طنط ناهد, مطعم طنط ناهد, مطعم أكل مصري, أكل بيتي مصري, أكل مصري, مطاعم مصرية, محشي, ملوخية, كشري, فتة, أكل بيتي",
    ogTitle:"طنط ناهد | طعم البيت المصري… على أصوله",
    ogDescription:"أكل مصري دافي، وصفات بيتية، ولمة تحسّك إنك في بيتك.",
    canonical:"",
    defaultSocialImage:"images/brand/logo.svg",
    favicon:"images/brand/favicon.svg",
    language:"ar",
    rtl:true
  }
};

const CATEGORIES = {
  breakfast:{label:"🍳 الفطار", icon:"🍳"},
  starters:{label:"🥗 المقبلات والسلطات", icon:"🥗"},
  "home-style":{label:"🍲 الأكل البيتي", icon:"🍲"},
  koshary:{label:"🍚 الكشري", icon:"🍚"},
  "rice-mahashi":{label:"🥬 المحاشي والأرز", icon:"🥬"},
  meat:{label:"🥩 اللحوم", icon:"🥩"},
  chicken:{label:"🍗 الفراخ", icon:"🍗"},
  tagines:{label:"🫕 الطواجن", icon:"🫕"},
  pigeon:{label:"🕊️ الحمام", icon:"🕊️"},
  seafood:{label:"🐟 الأسماك", icon:"🐟"},
  desserts:{label:"🍰 الحلويات", icon:"🍰"},
  drinks:{label:"🥤 المشروبات", icon:"🥤"}
};

document.addEventListener('DOMContentLoaded',()=>{
 const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
 const money=v=>typeof v==='number'?`${v.toLocaleString('ar-EG')} ج.م.`:v;
 const file=location.pathname.split('/').pop()||'index.html';
 $$('a[href]').forEach(a=>{const href=a.getAttribute('href');if(href===file)a.classList.add('active')});
 const toggle=$('.menu-toggle'), mobile=$('.mobile-menu');
 if(toggle&&mobile) toggle.addEventListener('click',()=>{const open=mobile.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
 $$('[data-brand-name]').forEach(e=>e.textContent=RESTAURANT.brand.nameArabic);
 $$('[data-tagline]').forEach(e=>e.textContent=RESTAURANT.brand.taglineArabic);
 $$('[data-phone]').forEach(e=>{e.textContent=RESTAURANT.contact.phoneDisplay;e.href=`tel:${RESTAURANT.contact.phone}`});
 const wa=`https://wa.me/${RESTAURANT.contact.whatsappNumber}?text=${encodeURIComponent(RESTAURANT.contact.whatsappDefaultMessage)}`;
 $$('[data-whatsapp]').forEach(e=>e.href=wa);
 $$('[data-reserve]').forEach(e=>e.href=`https://wa.me/${RESTAURANT.reservation.whatsappNumber}?text=${encodeURIComponent(RESTAURANT.reservation.defaultMessage)}`);
 const status={ 'pre-launch':'قريباً — طنط ناهد هتفتح أبوابها ❤️','opening-soon':'الافتتاح قرب ❤️','open':'طنط ناهد مفتوحة ومستنياك ❤️','temporarily-closed':'طنط ناهد مقفولة مؤقتاً — هنرجع قريب ❤️'};
 $$('[data-status]').forEach(e=>e.textContent=status[RESTAURANT.businessStatus]||status['pre-launch']);
 $$('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
 const meta=(name,content,attr='name')=>{if(!content)return;let e=document.head.querySelector(`meta[${attr}="${name}"]`);if(!e){e=document.createElement('meta');e.setAttribute(attr,name);document.head.appendChild(e)}e.content=content};
 meta('description',RESTAURANT.seo.metaDescription);meta('keywords',RESTAURANT.seo.keywords);meta('og:title',RESTAURANT.seo.ogTitle,'property');meta('og:description',RESTAURANT.seo.ogDescription,'property');meta('og:type','website','property');meta('og:locale','ar_EG','property');
 if(RESTAURANT.seo.canonical){let l=$('link[rel="canonical"]')||document.createElement('link');l.rel='canonical';l.href=RESTAURANT.seo.canonical;document.head.appendChild(l)}
 const schema={"@context":"https://schema.org","@type":"Restaurant",name:RESTAURANT.brand.nameArabic,description:RESTAURANT.brand.shortDescription,telephone:RESTAURANT.contact.phone,servesCuisine:'Egyptian',priceRange:'$$',url:location.href};
 const sd=document.createElement('script');sd.type='application/ld+json';sd.textContent=JSON.stringify(schema);document.head.appendChild(sd);
 const featured=$('#featured-dishes');
 if(featured){const list=RESTAURANT.signatureDishIds.map(id=>RESTAURANT.menu.find(d=>d.id===id)).filter(Boolean).slice(0,8);featured.innerHTML=list.map(d=>`<article class="card"><div class="card-media"><img loading="lazy" src="${d.image}" alt="${d.nameArabic}"><span class="badge">${d.popular?'الأكثر طلباً':'اختيار طنط ناهد'}</span></div><div class="card-body"><h3>${d.nameArabic}</h3><p>${d.descriptionArabic}</p><div class="price">${money(d.price)}</div></div></article>`).join('')}
 const menuRoot=$('#full-menu');
 if(menuRoot){const order=['breakfast','starters','home-style','koshary','rice-mahashi','meat','chicken','tagines','pigeon','seafood','desserts','drinks'];menuRoot.innerHTML=order.map(cat=>{const dishes=RESTAURANT.menu.filter(d=>d.category===cat&&d.available);if(!dishes.length)return '';return `<section class="menu-section" id="${cat}"><h2>${CATEGORIES[cat]?.label||cat}</h2><div class="menu-grid">${dishes.map(d=>`<article class="menu-item"><img loading="lazy" src="${d.image}" alt="${d.nameArabic}"><div><h3>${d.nameArabic}</h3><p>${d.descriptionArabic}</p><div class="meta">${d.vegetarian?'<span class="chip">نباتي</span>':''}${d.spicy?'<span class="chip">🌶️ حراق</span>':''}${d.popular?'<span class="chip">الأكثر طلباً</span>':''}${d.featured?'<span class="chip">مميز</span>':''}</div><div class="menu-price">${money(d.price)}</div></div></article>`).join('')}</div></section>`}).join('');const nav=$('#category-nav');if(nav)nav.innerHTML=order.filter(c=>RESTAURANT.menu.some(d=>d.category===c&&d.available)).map(c=>`<a href="#${c}">${CATEGORIES[c].label}</a>`).join('')}
 const gallery=$('#gallery-grid');if(gallery)gallery.innerHTML=RESTAURANT.gallery.map(g=>`<figure class="gallery-item"><img loading="lazy" src="${g.image}" alt="${g.altArabic}"><figcaption>${g.caption}</figcaption></figure>`).join('');
 const reviews=$('#reviews');if(reviews)reviews.innerHTML=RESTAURANT.reviews.length?RESTAURANT.reviews.map(r=>`<article class="contact-card"><strong>${r.customerName}</strong><p>“${r.review}”</p></article>`).join(''):`<div class="contact-card"><strong>لسه بنستنى أول رأي منكم ❤️</strong><p>مش هنحط تقييمات مصطنعة. أول ما طنط ناهد تفتح، آراء الناس الحقيقية هتكون هنا.</p></div>`;
 $$('[data-address]').forEach(e=>e.textContent=RESTAURANT.contact.address);$$('[data-email]').forEach(e=>{e.textContent=RESTAURANT.contact.email;if(RESTAURANT.contact.email.includes('@'))e.href=`mailto:${RESTAURANT.contact.email}`});
 const hours=$('#hours');if(hours)hours.innerHTML=Object.entries(RESTAURANT.hours).map(([d,h])=>`<div><strong>${d}</strong><span>${h}</span></div>`).join('');
 const socials=[['Instagram',RESTAURANT.contact.instagram],['Facebook',RESTAURANT.contact.facebook],['TikTok',RESTAURANT.contact.tiktok],['Google Business',RESTAURANT.contact.googleBusiness]];$$('[data-social-links]').forEach(root=>root.innerHTML=socials.filter(([,u])=>u).map(([n,u])=>`<a class="btn btn-secondary" href="${u}" target="_blank" rel="noopener">${n}</a>`).join('')||'<span class="pill">السوشيال هتعلن قريباً</span>');
 $$('img').forEach(img=>img.addEventListener('error',()=>{if(!img.dataset.fallback){img.dataset.fallback='1';img.src='images/brand/logo.svg'}}));
});
