import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pt-24 flex-1">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Restaurant Interior"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0VHm0GwkapSMJh0U5S4T6OxamZconl8bNX_vv4jHh-k9vXxq7cjNks8GBqTltNbVvXXpl0MLUeKW7ReGLvQz2PhnDX8LYTF_Zz9OAP2S1SalC5cWu0Re75uWyE3JtNVTVQ4dNbVTEthwFZ_4nvqAzYaPC7t8Yy-bNnxDpGkxNItMC-ih1g6R4yXQAoqGl-Ah5vGZTRby38l-6BQoHm2Pp22A8xbyeur2zY2CTXJEbV38S9w63QAhnhwYa26Hr8Kl7s5xBR56Eaqk"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-right">
          <h1 className="text-white text-6xl md:text-8xl font-black font-headline tracking-tighter mb-4">
            قصتنا بدأت بشغف
          </h1>
          <p className="text-white/90 text-xl md:text-2xl max-w-2xl leading-relaxed mr-auto">
            من قلب جنين، نقدّم تجربة البرجر الفاخرة التي تجمع بين الجودة العالية والنكهة الأصيلة.
          </p>
        </div>
      </section>

      {/* The Story Section (Asymmetric Bento Grid) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Main Story Text */}
          <div className="md:col-span-7 bg-surface-container-lowest p-12 rounded-xl self-center">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-4">أصل الحكاية</span>
            <h2 className="text-4xl md:text-5xl font-black font-headline text-red-900 mb-8 leading-tight">
              فاموس برجر.. أكثر من مجرد وجبة، إنها رحلة طهي
            </h2>
            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
              <p>
                تأسست فاموس برجر في مدينة جنين برؤية واضحة: إعادة تعريف مفهوم "الوجبات السريعة" لتصبح "تجارب ذواقة". بدأنا بمطبخ صغير وشغف كبير لتقديم أفضل أنواع اللحوم الطازجة والخبز المخبوز يدوياً.
              </p>
              <p>
                نؤمن في فاموس أن البرجر المثالي يتطلب دقة متناهية، من اختيار قطعة اللحم المناسبة إلى توازن الصوصات السرية التي نعدها يومياً. كل قطعة برجر تخرج من مطبخنا هي وعد بالتميز.
              </p>
            </div>
          </div>
          {/* Overlapping Image Container */}
          <div className="md:col-span-5 relative">
            <div className="bg-surface-container-high w-full h-full rounded-xl overflow-hidden min-h-[400px]">
              <img
                alt="Chef preparing burger"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgNPX4ZUJcj_Q4h5udSkXuO1BeRUl9iuhY8KSKGHekxLJhYGq3U5pa4I5ZMsE5NPCbUp80Y45ofHZTBna4e7ipgGLMyOzSvxlyT5qMZzELBtcfXKOt_mveBEkbhvg12IIsWmWtDrxQtPmD3qLVZuX0jUXYqFEbmzELAtpeADlTjYzxeHz0Y3w7LNzwFFgf--mwFsq5PCRQIsuK0qrMpqMlGnPLv3nv8npRA7_IHbAF3Mf-hkpQ9pe-Ch-Lr2TVdN-vIDLM0l9kc-E"
              />
            </div>
            {/* Overlapping Decorative Element */}
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-xl hidden md:block">
              <div className="text-on-primary text-center">
                <span className="block text-4xl font-black mb-1">100%</span>
                <span className="text-sm font-bold opacity-80">لحم بلدي طازج</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise - Tonal Layering */}
      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black font-headline text-on-surface">وعدنا للجودة</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl hover:translate-y-[-8px] transition-transform duration-[500ms] text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline">مكونات طازجة</h3>
              <p className="text-on-surface-variant">
                نختار خضرواتنا ولحومنا يومياً من المزارعين المحليين لضمان أعلى مستويات الطعم والقيمة الغذائية.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl hover:translate-y-[-8px] transition-transform duration-[500ms] text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">skillet</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline">طهي احترافي</h3>
              <p className="text-on-surface-variant">
                نستخدم تقنيات طهي عالمية مدروسة للحفاظ على عصارة اللحم وتجانس النكهات في كل قضمة.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-xl hover:translate-y-[-8px] transition-transform duration-[500ms] text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
              </div>
              <h3 className="text-xl font-bold mb-4 font-headline">فخر الصناعة المحلية</h3>
              <p className="text-on-surface-variant">
                انطلاقاً من جنين، نفخر بكوننا علامة تجارية فلسطينية تنافس في معايير الجودة العالمية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px]">
          <div className="rounded-xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC85v84-KG8dweiDntJqWZHfhe5nk3Ryvnd-epy21EfzbVyEX5cReYXfOtdWx1vmUWjWHZKS4e9xp4VWWe8MWpJcxPVptcANuFrwDVkX7NdiJaJQX0y80yBDEuSef9mvZY0slSs0zIvjGAFLq8mkeo26SYjXOEB7mmkob5rF54yMLBC3vS8SSZ-ZMjZAzSCjZLPcUAPsIbOVz_IWob9atfajoidST6-qh0UEpO9M75f7RfTXPNKYcXJ0kYjzGQfJWZTe7B4cuYNjpI"
              alt="Seating area"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 right-8 text-white">
              <h4 className="text-2xl font-bold font-headline">بيئة مريحة</h4>
              <p className="opacity-80">صُممت لتناسب لقاءات العائلة والأصدقاء</p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="rounded-xl overflow-hidden relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Ma0LYk5ZCuw8ut4w2yW2u1HXUOns_p93akjUVxgREgruUfKfMQbNMDlg57FEBOv4h1KJzoaQuciYGhVIJQMLQv5uwpddTkoskaxblj73w72QQROLDPAesdeL0u541O0yd0VUtM5E90EaciERCPTmO83PxftS-T4NOc5nF0-FPr6w3A44PuLsO3KmFNwHfZVWIJLhbUnaRcJJ9V4NsPFJmvoAgT6OkG81K9cGY7TBipQSoWjUMvYGZU93mdAqZaAwZ-VI40iP7CU"
                alt="Close up flavor"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-white">
                <span className="text-lg font-bold font-headline">نكهة لا تُنسى</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden relative group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpemLkImWe9rh5mnuS_hRVJb56RIo1WvzatMwhAXWyVYkGV5tfuG_z_mBmg2Ixmmt87a61ZUF4xaCQEzWBepR9EA_j3iGWS8RBO9gXn82_WQEZb4zIiWNrAEtWbaUeST9Z_nNx2-VSvehXlc6nVaC7B0SU_OSnjttqzxpzLWHuOXf7c-Mw6Jmti5cQ6tIBiJQA4xePkx4ZP8LLGeWjMZREiFcoaTwiFCx3grxxpLrIr6I9JHT1cD-GPPzW8xVJpAEBRDsy_EEkJpY"
                alt="Kitchen staff"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 right-6 text-white">
                <span className="text-lg font-bold font-headline">فريق شغوف</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="bg-[var(--color-primary-container)] rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full translate-x-1/4 translate-y-1/4"></div>
          <h2 className="text-4xl md:text-5xl font-black font-headline mb-6 relative z-10">جاهز لتجربة الطعم الحقيقي؟</h2>
          <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto relative z-10">تفضل بزيارتنا في جنين أو اطلب وجبتك الآن لتصلك ساخنة ومثالية.</p>
          <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
            <Link href="/menu" className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all">
              اطلب الآن
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white/40 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
              تواصل معنا
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
