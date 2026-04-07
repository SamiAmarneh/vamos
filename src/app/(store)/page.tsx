import React from "react";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-surface">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="z-10 text-right">
            <h1 className="text-6xl md:text-8xl font-black text-red-900 mb-6 leading-tight tracking-tighter font-headline">
              الطعم <br /> <span className="text-on-surface">الأصلي</span> <br /> في جنين
            </h1>
            <p className="text-xl text-on-surface-variant mb-10 max-w-lg leading-relaxed">
              نقدم لكم تجربة برجر فاخرة محضرة من أجود أنواع اللحوم الطازجة والخبز المخبوز يومياً. فاموس برجر.. حيث تجتمع الجودة مع المذاق الرفيع.
            </p>
            <div className="flex gap-4 flex-row-reverse">
              <button className="hero-gradient text-on-primary px-10 py-4 rounded-xl text-lg font-bold shadow-lg hover:scale-105 transition-transform duration-[400ms]">
                استكشف القائمة
              </button>
              <button className="bg-surface-container-lowest text-on-surface px-10 py-4 rounded-xl text-lg font-bold border border-[var(--color-outline-variant)]/15 hover:bg-surface-container-low transition-colors">
                عن فاموس
              </button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <img
              alt="Premium Burger"
              className="w-full max-w-xl drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7bUk6kqJj5JQuz9krcLEHne9xsSWg6Sfni_I0A199NhRTDAGPd2Doh8OTwGhGY4sAtlXc2EdEPcq68cLYg5fgJ-LRwq0gHO0nESA0J2cMT8GSkIxZGkAocCtq-XgCrkp6Q7XWGNw54f0W52tgY3DxAhsJ46_jlamP8wg718_z72acyApz5tHWCN8NTZ_2Jk_OYS58-qtQlP5V5mCxpQoawWKcVb2k8hVCxzzA4-PH1DKHgDL_6Uf76lCxEgzo6tJT3NpiwtS0g3k"
            />
          </div>
        </div>
      </section>

      {/* Featured Burgers (Bento Style) */}
      <section className="py-24 bg-surface-container-low w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-red-900 font-headline mb-4">أصنافنا المختارة</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">اكتشف تشكيلتنا الواسعة من البرجر المصنوع يدوياً بكل حب وإتقان</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
            {/* Main Feature */}
            <div className="md:col-span-7 bg-surface-container-lowest rounded-xl overflow-hidden relative group min-h-[400px]">
              <img
                alt="Signature Burger"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWRHNGKBGHklXvhfZ-ZL5xtA49RSOyfmoyeqPJ7hftAJ9_KcrvtsXNPOIt5dE7tpGY4OkrfaMVRXlr6WdVkfuz-6DjwGdduopr2Z6ppD3w4DHbclCYm6WwXHRT2jlX1l6uSlDjrZBTlDyQXgQKKjcSHX6Ml2wNUVY_aZJqd8LxUnXS1ZciUPr2wlxTxK8P1sg3f-lqb_t5eI1Ok-1pnIoAcs8SvYEigEAx26G4zkqysHg4TcgkEGbmss-WdYJB_w7hVMl19clywRo"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-10 flex flex-col justify-end text-right">
                <span className="bg-primary text-on-primary w-fit px-4 py-1 rounded-full text-sm font-bold mb-4 mr-auto">الأكثر طلباً</span>
                <h3 className="text-3xl font-black text-white mb-2 font-headline">فاموس سيجنتشر</h3>
                <p className="text-white/80 max-w-sm mb-6 mr-auto">قطعتين من لحم الأنجوس مع صلصة فاموس الخاصة وجبن التشيدر المعتق.</p>
                <span className="text-[#ffdad8] text-2xl font-black mr-auto">₪ 45.00</span>
              </div>
            </div>
            {/* Secondary Features */}
            <div className="md:col-span-5 grid grid-rows-2 gap-6">
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden relative group min-h-[300px]">
                <img
                  alt="Chicken Burger"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi_Fx3YyTHe9Y6FH08SzWi9SKmezX89yAXswpGl6YhFAf7UrzecKKY8xqI4MXEKkhDxh_HxQMlUorDR6Rsc_xyq29jiYMwpzSyKud_VWjH8XpAtN_Ew488o3jlWjmyUgO55Fi8xA5WwI-dK67W37SfNOppgAnr9crFs6vP_57liVFhzPzmcrHd9kKqW6B5Oa0tH-gC-QfXhwDTi6QqG8mrpxnofvwlScpfPbMgevLGZ4tSRYlBWWlErbM5dwaZM78aFSYbq2QGQ6k"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-right">
                  <h3 className="text-xl font-bold text-white mb-1 font-headline">كريسبي تشيكن</h3>
                  <span className="text-[#ffdad8] font-bold">₪ 38.00</span>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden relative group min-h-[300px]">
                <img
                  alt="Classic Burger"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvIDnkBHGtl0NPQUFx5628e0Zoz_U2C76LAAdjx1mRY233V8T7T8F1DlagnKdO8wSPNyzVwtR5YEDSVFAs5lL85G4Aj-s-dJrbgwbkGMa93hM4EQZhS6VKEvn2qQ8G9XfOAXf2KKgJV9H71N0huvgTQRI3S_4r0iL-UA9L9x9F2Efr9X7Gkv_EXIjmGhnN50aHJlBDzwRmZnLYCyfE9tlen-818neSASx6sYwVEYch_OUJTcIDlUR4Zrkcbef0wMAPDdtmQxncQCU"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-right">
                  <h3 className="text-xl font-bold text-white mb-1 font-headline">كلاسيك بيف</h3>
                  <span className="text-[#ffdad8] font-bold">₪ 35.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Offers */}
      <section className="py-24 bg-surface w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-red-900 rounded-3xl p-12 relative overflow-hidden flex flex-col md:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-primary-container)]/10 rounded-full -ml-48 -mb-48"></div>
            <div className="relative z-10 flex-1 text-right">
              <h2 className="text-[#ffdad8] text-5xl font-black mb-4 font-headline">عرض العائلة الرهيب!</h2>
              <p className="text-[#ffd3d1] text-xl mb-8 leading-relaxed">
                احصل على 4 برجر كلاسيك، 2 بطاطس حجم عائلي، و4 مشروبات باردة فقط بـ 120 شيكل.
              </p>
              <Link href="/menu" className="inline-flex bg-white text-red-900 px-12 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform duration-[400ms]">
                اطلب العرض الآن
              </Link>
            </div>
            <div className="relative z-10">
              <img
                alt="Family Meal"
                className="w-full max-w-sm rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyCyeVJabvfmvRQlMN5DH9hH7YDg18U0lsCxnVt4At6i9ahAw-iFMZPPVSOcCqGOJJouEhScl78z9SVohFqUgTHGtLT5WYLJ9_TohhW-ujuHupRIlTczDjKPwqPMnxwuJ1HGWqttye4SPdqsy4qMYz7sN7s3Vi_l03zZ5O9vgxQk-RcqA_GTBBnM2wG8PpF-ePtThmEgvaZIQNhbIjTeIvtwmkqoImeo9JX469JpouZQ7Iz27S9RBral4YtMIukEALOxTT6Fp78vU"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-surface-container-low w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-right mb-16">
            <h2 className="text-4xl font-black text-on-surface font-headline mb-4">ماذا يقول عشاق فاموس؟</h2>
            <div className="w-24 h-1 bg-primary rounded-full mr-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-[var(--color-outline-variant)]/5">
              <div className="flex flex-row-reverse items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#ffdad8] flex items-center justify-center font-bold text-red-900">أ</div>
                <div className="text-right">
                  <h4 className="font-bold">أحمد محمود</h4>
                  <div className="flex text-yellow-500 text-sm">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-right italic">"أفضل برجر في جنين بلا منازع. اللحمة طازجة جداً والخبز رائع. التوصيل كان سريع جداً."</p>
            </div>
            {/* Review 2 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-[var(--color-outline-variant)]/5">
              <div className="flex flex-row-reverse items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#ffdad8] flex items-center justify-center font-bold text-red-900">س</div>
                <div className="text-right">
                  <h4 className="font-bold">سارة علي</h4>
                  <div className="flex text-yellow-500 text-sm">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-right italic">"تجربة ممتازة والخدمة في المطعم راقية جداً. جربت السيجنتشر برجر وكان خيالي."</p>
            </div>
            {/* Review 3 */}
            <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-[var(--color-outline-variant)]/5">
              <div className="flex flex-row-reverse items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#ffdad8] flex items-center justify-center font-bold text-red-900">خ</div>
                <div className="text-right">
                  <h4 className="font-bold">خالد حسن</h4>
                  <div className="flex text-yellow-500 text-sm">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed text-right italic">"نظافة عالية وطعم مميز. الأسعار مناسبة جداً مقارنة بالجودة المقدمة."</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
