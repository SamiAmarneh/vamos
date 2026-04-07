import React from "react";

export default function ContactPage() {
  return (
    <main className="pt-24 min-h-screen flex-1">
      {/* Hero Section */}
      <section className="relative h-[409px] flex items-center justify-center overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.4]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-5B11btlisoJ2Ub3M7dygKrBk6i6uMdtBso0yCXNTli3fjpuYCpXfn9uSGHyZWBQczYLOMgVRqulrhIAYWtO4IEmsn6yDy7ZMuuUBH1rIsh4-mIEVhNnLieeaGTeq1pX5iT4TLVv1npjGeC9ProV7l1WvbYdX_UX1AQdMTIcbKYu9Usn_h9ILnsINxM-tuYvma2IeXB0oKi9m3Q8_5nnABP41dqOI0dA2zP15CO2DqcS-Wmg3AnFocC2SvbsZFoP-GlRpINiUXoU"
            alt="Contact Hero"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight font-headline">
            تواصل معنا
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto leading-relaxed">
            نحن هنا للإجابة على استفساراتكم وخدمتكم بكل حب. طعم فاموس بانتظاركم!
          </p>
        </div>
      </section>

      {/* Main Content Cluster */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20">
        {/* Contact Info Column (Bento Style) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {/* Address Card */}
            <div className="bg-surface-container-lowest p-8 rounded-xl group transition-all duration-[400ms] hover:translate-x-[-4px]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface mb-2">موقعنا</h3>
                  <p className="text-on-surface-variant leading-relaxed">شارع المدارس، مدينة جنين، فلسطين</p>
                  <a className="inline-flex items-center gap-2 text-primary font-bold mt-4 hover:underline" href="#">
                    عرض على الخريطة
                    <span className="material-symbols-outlined text-sm">arrow_back</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-surface-container-low p-8 rounded-xl transition-all duration-[400ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">schedule</span>
                </div>
                <div className="w-full">
                  <h3 className="text-xl font-bold text-on-surface mb-4">ساعات العمل</h3>
                  <div className="space-y-3 text-on-surface-variant">
                    <div className="flex justify-between border-b border-[var(--color-outline-variant)]/10 pb-2">
                      <span>السبت - الأربعاء</span>
                      <span className="font-bold">12:00 م - 11:00 م</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-outline-variant)]/10 pb-2">
                      <span>الخميس</span>
                      <span className="font-bold">12:00 م - 12:00 ص</span>
                    </div>
                    <div className="flex justify-between text-red-700 font-medium">
                      <span>الجمعة</span>
                      <span className="font-bold">02:00 م - 12:00 ص</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Channels */}
            <div className="bg-surface-container-highest p-8 rounded-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span className="text-lg font-bold" dir="ltr">+970 59-XXXX-XXX</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="text-lg font-bold">hello@vamosburger.ps</span>
                </div>
              </div>
              <div className="mt-8 flex gap-4">
                <a className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm hover:scale-110 transition-all text-primary" href="#">
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm hover:scale-110 transition-all text-primary" href="#">
                  <span className="material-symbols-outlined">chat</span>
                </a>
                <a className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-sm hover:scale-110 transition-all text-primary" href="#">
                  <span className="material-symbols-outlined">camera</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-[0_32px_64px_-12px_rgba(26,28,29,0.04)]">
          <div className="mb-10">
            <h2 className="text-3xl font-black text-on-surface mb-2 font-headline">أرسل لنا رسالة</h2>
            <p className="text-on-surface-variant">لديك اقتراح أو استفسار؟ لا تتردد في مراسلتنا.</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant pr-1">الاسم الكامل</label>
                <input
                  className="w-full px-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none"
                  placeholder="مثال: أحمد محمد"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-on-surface-variant pr-1">رقم الهاتف</label>
                <input
                  className="w-full px-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none"
                  placeholder="059XXXXXXX"
                  type="tel"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant pr-1">البريد الإلكتروني</label>
              <input
                className="w-full px-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none"
                placeholder="email@example.com"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant pr-1">الموضوع</label>
              <select className="w-full px-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none appearance-none">
                <option>استفسار عام</option>
                <option>طلب خاص / حفلات</option>
                <option>شكوى أو اقتراح</option>
                <option>وظائف</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-on-surface-variant pr-1">رسالتك</label>
              <textarea
                className="w-full px-4 py-4 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all duration-300 outline-none resize-none"
                placeholder="اكتب رسالتك هنا..."
                rows={5}
              ></textarea>
            </div>
            <button
              className="w-full hero-gradient text-on-primary py-5 rounded-lg font-black text-lg hover:scale-[1.02] transition-all duration-[400ms] shadow-lg shadow-primary/20"
              type="submit"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>

      {/* Map Section (Location Link) */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl bg-slate-950">
          <a
            href="https://maps.app.goo.gl/GmgcK814UXgpf7TA9"
            target="_blank"
            rel="noreferrer"
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center text-white bg-black/50 hover:bg-black/60 transition-colors"
          >
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary shadow-2xl">
              <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
            </div>
            <div className="max-w-3xl">
              <h2 className="text-4xl font-black mb-4 font-headline">افتح موقع فاموس برجر على الخريطة</h2>
              <p className="text-base text-white/80 leading-relaxed">
                هذا هو اللوكيشن المطلوب. اضغط هنا لفتح موقعنا في خرائط جوجل وعرض الاتجاهات مباشرة.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg">
              افتح الموقع
              <span className="material-symbols-outlined">open_in_new</span>
            </span>
          </a>
        </div>
      </section>
    </main>
  );
}
