import React from "react";

export default function AdminDashboardPage() {
  return (
    <>
      {/* Header / Top Bar */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-3xl font-black text-on-surface tracking-tight font-headline">مرحباً بك مجدداً</h2>
          <p className="text-on-surface-variant text-sm mt-1">إليك نظرة عامة على أداء Vamos Burger اليوم</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-surface-container-lowest p-3 rounded-xl shadow-sm hover:scale-105 transition-transform flex items-center justify-center">
            <span className="material-symbols-outlined text-[var(--color-secondary)]">notifications</span>
          </button>
          <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg hover:scale-[1.02] transition-all" style={{ background: "linear-gradient(135deg, #98001b, #be1e2d)" }}>
            <span className="material-symbols-outlined">add</span>
            <span>طلب جديد</span>
          </button>
        </div>
      </header>

      {/* Analytics Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {/* Total Orders */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_32px_32px_rgba(26,28,29,0.04)] flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <div className="bg-red-50 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</span>
            </div>
            <span className="text-green-600 text-xs font-bold flex items-center gap-1">
              +12% <span className="material-symbols-outlined text-xs">trending_up</span>
            </span>
          </div>
          <div>
            <h3 className="text-sm text-on-surface-variant font-medium">إجمالي الطلبات</h3>
            <p className="text-3xl font-black font-headline">1,284</p>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_32px_32px_rgba(26,28,29,0.04)] flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <div className="bg-red-50 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>payments</span>
            </div>
            <span className="text-green-600 text-xs font-bold flex items-center gap-1">
              +8.4% <span className="material-symbols-outlined text-xs">trending_up</span>
            </span>
          </div>
          <div>
            <h3 className="text-sm text-on-surface-variant font-medium">الإيرادات الشهرية</h3>
            <p className="text-3xl font-black font-headline">42,500 <span className="text-lg font-bold">ر.س</span></p>
          </div>
        </div>

        {/* Avg Order Value */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_32px_32px_rgba(26,28,29,0.04)] flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <div className="bg-red-50 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            </div>
            <span className="text-red-600 text-xs font-bold flex items-center gap-1">
              -2.1% <span className="material-symbols-outlined text-xs">trending_down</span>
            </span>
          </div>
          <div>
            <h3 className="text-sm text-on-surface-variant font-medium">متوسط قيمة الطلب</h3>
            <p className="text-3xl font-black font-headline">84.2 <span className="text-lg font-bold">ر.س</span></p>
          </div>
        </div>

        {/* Active Customers */}
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_32px_32px_rgba(26,28,29,0.04)] flex flex-col justify-between h-40">
          <div className="flex justify-between items-start">
            <div className="bg-red-50 p-2 rounded-lg text-primary">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
            </div>
            <span className="text-green-600 text-xs font-bold flex items-center gap-1">
              +156 <span className="material-symbols-outlined text-xs">person_add</span>
            </span>
          </div>
          <div>
            <h3 className="text-sm text-on-surface-variant font-medium">العملاء النشطون</h3>
            <p className="text-3xl font-black font-headline">3,120</p>
          </div>
        </div>
      </section>

      {/* Visual Analytics Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Revenue Trend Chart Placeholder */}
        <div className="lg:col-span-2 bg-surface-container-lowest p-8 rounded-2xl shadow-[0_32px_32px_rgba(26,28,29,0.04)]">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold font-headline">اتجاه المبيعات</h3>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-primary text-on-primary text-xs font-bold">يومي</span>
              <span className="px-3 py-1 rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] text-xs font-bold">شهري</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-4">
            {/* Faux Bar Chart */}
            <div className="w-full bg-red-100 rounded-t-lg relative group h-[40%] transition-all hover:h-[45%] hover:bg-primary">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold hidden group-hover:block">السبت</span>
            </div>
            <div className="w-full bg-red-100 rounded-t-lg relative group h-[60%] transition-all hover:h-[65%] hover:bg-primary"></div>
            <div className="w-full bg-red-100 rounded-t-lg relative group h-[85%] transition-all hover:h-[90%] hover:bg-primary"></div>
            <div className="w-full bg-red-100 rounded-t-lg relative group h-[70%] transition-all hover:h-[75%] hover:bg-primary"></div>
            <div className="w-full bg-primary rounded-t-lg relative group h-[100%] transition-all">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold">الأربعاء</span>
            </div>
            <div className="w-full bg-red-100 rounded-t-lg relative group h-[55%] transition-all hover:h-[60%] hover:bg-primary"></div>
            <div className="w-full bg-red-100 rounded-t-lg relative group h-[45%] transition-all hover:h-[50%] hover:bg-primary"></div>
          </div>
        </div>

        {/* Best Sellers Card */}
        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-[0_32px_32px_rgba(26,28,29,0.04)]">
          <h3 className="text-xl font-bold font-headline mb-6">الأكثر مبيعاً</h3>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <img
                  alt="Classic Burger"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAso2mtOIaQS7hbM0_qaSKLrITyi0j9ES8Po1k2N-fBUVNzdfTtCFWB6Ev8KagzAG4jJ_jgJkVjf5LuBEpdh5dtmdMZ5xWefRHkW7I5WSPgWvZCgX8hFrh9dEZINWRd7com7P0ttctRuuT1-ccYHeMKwYDe-5pp2h-lrJYis1zX--kru-tLCYEE8tf1-yu2SGOHFtdQk-kn6qvqyOacRRRSWao9RP6y3UBVhjbQAM3Dhd-BtAb2lUU0-mQ0Yx9aEPz6ALbObGF7Wc"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">برجر كلاسيك</p>
                <div className="w-full bg-[var(--color-surface-container)] h-1.5 rounded-full mt-2">
                  <div className="bg-primary h-full w-[85%] rounded-full"></div>
                </div>
              </div>
              <span className="text-xs font-black">85%</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <img
                  alt="Spicy Burger"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqang-PH4oKQzpRd4xN2QGp0CVfKRfcr0f_2vYoVC7dtpkexXubCWYX7elvt9f1da2VyS8wwNHhVzMEDS8aCh2KybYzvdeUGeBiQuUG6yMud5Znd_5IeFuIQQSZeFrlNESjtWLq8R-ke-5ajeiai6EgOINxAW5Iwwe6TImWhUOPeW8qaNfcGpNNRKdKjgVCI5ye483BzhtYwCGw7E2ij8rGIiAwHUKVDpXntc7uHujpfPs0y2zoHJ7VD79X2PPX0MXYILTXqhR2Vo"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">برجر حراق</p>
                <div className="w-full bg-[var(--color-surface-container)] h-1.5 rounded-full mt-2">
                  <div className="bg-primary h-full w-[62%] rounded-full"></div>
                </div>
              </div>
              <span className="text-xs font-black">62%</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0">
                <img
                  alt="Double Bacon"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeGQScdyGSoaDzRQrvm_XydkGvJfy2mnXFN7tbcZVr-cKnwDVYmqEv87-i79jyljBViBkXpF7tS5VvIMaPltoqhYQgc931ien07PZ_xuduWN2e6EGGEPiji2tkIksGcVCTR9KvpAEOdYdVlOh5jSKz5H9HrhDok22otCRwsVSsfq9kHbYUyuaNx3J8EahA_thhc_jT42w1vnIzGPjCfsfF44CRl1tRR8Wm0zrmR_PEJFCDiTPyOhw53G3-_pjmWG1rWJbW14LJeQM"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">دبل بيكون</p>
                <div className="w-full bg-[var(--color-surface-container)] h-1.5 rounded-full mt-2">
                  <div className="bg-primary h-full w-[48%] rounded-full"></div>
                </div>
              </div>
              <span className="text-xs font-black">48%</span>
            </div>
          </div>
          <button className="w-full mt-8 py-3 text-sm font-bold text-primary border border-[var(--color-outline-variant)]/20 rounded-xl hover:bg-red-50 transition-colors">
            عرض التقرير الكامل
          </button>
        </div>
      </section>

      {/* Menu Management Table Area */}
      <section className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_32px_32px_rgba(26,28,29,0.04)]">
        <div className="px-8 py-6 border-b border-[var(--color-outline-variant)]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <h3 className="text-xl font-bold font-headline">إدارة القائمة</h3>
          <div className="flex gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input
                className="w-full pr-10 pl-4 py-2 bg-[var(--color-surface-container-low)] border-none rounded-xl text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/60 outline-none"
                placeholder="ابحث عن صنف..."
                type="text"
              />
            </div>
            <button
              className="bg-primary text-on-primary px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #98001b, #be1e2d)" }}
            >
              <span className="material-symbols-outlined text-sm">add_circle</span>
              <span>صنف جديد</span>
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-[var(--color-surface-container-low)]/50 text-on-surface-variant text-xs uppercase tracking-wider">
                <th className="px-8 py-4 font-bold">الصنف</th>
                <th className="px-8 py-4 font-bold">التصنيف</th>
                <th className="px-8 py-4 font-bold">السعر</th>
                <th className="px-8 py-4 font-bold">الحالة</th>
                <th className="px-8 py-4 font-bold text-left">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-outline-variant)]/5">
              {/* Table Row 1 */}
              <tr className="hover:bg-[var(--color-surface-container-low)] transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Burger"
                      className="w-12 h-12 rounded-lg object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1SXz7wv4nTpcLBvrzhvtGc2aQL5CajljNnmImbU-YKowNulRfKHbqz4IWXL-Dwo4OcQD_Xxo7LxjTKosdxlQt1nJLOAsEUhkAtoWRLJD98cdGcs6Z3MVnIKR1EX9errdJwtZDyb5MBD7Ep8zVx4yEX_rI-qtzxHKfb8D6hbRKj_BbfpSQfJnZrVMkys0PZvV5nS2c1BQI5Q54_XLmYh9eQgv8FOSHwEW2wWbfYDSLMvaJbUG6ar1FQ8_tPy2ksksizXndcfHAFYA"
                    />
                    <div>
                      <p className="text-sm font-bold">فاموس أوريجينال</p>
                      <p className="text-[10px] text-on-surface-variant">لحم أنجوس، جبن شيدر، صلصة فاموس</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]">برجر لحم</span>
                </td>
                <td className="px-8 py-5">
                  <span className="text-sm font-black">45.00 ر.س</span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium">نشط</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-left">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 rounded-lg hover:bg-[var(--color-surface-container)] text-on-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-[var(--color-surface-container)] text-on-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-lg">visibility_off</span>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-50 text-[var(--color-error)] transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Table Row 2 */}
              <tr className="hover:bg-[var(--color-surface-container-low)] transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Chicken Burger"
                      className="w-12 h-12 rounded-lg object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp9gMVRRcKhKNTrvoI3x5JzKlX5zrYEuIi0qohcafOiDRNRHBxGkMwHdxK97j0FYckfZO90o00jBvgD_ja3nO4Jqard-OOnlE293gw5ykgAXQu3-8YPpgq6vMOq5DV6USyvF-3GZS-DjvdlXuqCzRohEIrqkvi7mFAP20oWECjmdqPcFqeOOeTSA5V_2bzi7DxOoElbdJ68t6v-2U8DBjXjJ7LnfSOl2GDabrwtQAPUT5U2aHEOcfBA4QixG0TnH3HVwDtoBjxdNk"
                    />
                    <div>
                      <p className="text-sm font-bold">كريسبي تشيكن</p>
                      <p className="text-[10px] text-on-surface-variant">دجاج مقرمش، خس، صوص الثوم</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]">برجر دجاج</span>
                </td>
                <td className="px-8 py-5">
                  <span className="text-sm font-black">38.00 ر.س</span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs font-medium">نشط</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-left">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 rounded-lg hover:bg-[var(--color-surface-container)] text-on-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-[var(--color-surface-container)] text-on-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-lg">visibility_off</span>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-50 text-[var(--color-error)] transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
              {/* Table Row 3 */}
              <tr className="hover:bg-[var(--color-surface-container-low)] transition-colors group">
                <td className="px-8 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Truffle Burger"
                      className="w-12 h-12 rounded-lg object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZPizcoRSiJ_4eEKZeMe6wbeP_EWm95fJEJEQonl8nFSj0NJOOFH6puZNkQexcZ-q6FWIYqiL6z9zgUKVBxHMzOhRpUPKDku05PfhFMKn0kEPsyUxmVhbW2DnHoajNissZLNNErk284UBDX58-UC8iFkWxsAJGakZ9o6e1o51slKeN-icW7Qu9Y-1E-9jzuPP2Y54xd-e_Wdqv1h1_xNFxdlwjh0cldgagbVUZO9RRq5tZJMb_RzFAqJUvQo_BYEMNBGeF8fwukTg"
                    />
                    <div>
                      <p className="text-sm font-bold">ترافل برجر</p>
                      <p className="text-[10px] text-on-surface-variant">زيت الترافل، فطر مشوي، جبن سويسري</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)]">إصدار خاص</span>
                </td>
                <td className="px-8 py-5">
                  <span className="text-sm font-black">58.00 ر.س</span>
                </td>
                <td className="px-8 py-5">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <span className="text-xs font-medium">غير متوفر</span>
                  </div>
                </td>
                <td className="px-8 py-5 text-left">
                  <div className="flex justify-end gap-2">
                    <button className="p-2 rounded-lg hover:bg-[var(--color-surface-container)] text-on-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-lg">edit</span>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-[var(--color-surface-container)] text-on-surface-variant transition-colors">
                      <span className="material-symbols-outlined text-lg">visibility</span>
                    </button>
                    <button className="p-2 rounded-lg hover:bg-red-50 text-[var(--color-error)] transition-colors">
                      <span className="material-symbols-outlined text-lg">delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-8 py-4 bg-[var(--color-surface-container-low)]/30 flex justify-between items-center">
          <span className="text-xs text-on-surface-variant">عرض 1-10 من أصل 42 صنف</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-lg border border-[var(--color-outline-variant)]/10 text-xs hover:bg-[var(--color-surface-container)] transition-colors disabled:opacity-50">السابق</button>
            <button className="px-3 py-1 rounded-lg bg-primary text-on-primary text-xs font-bold">1</button>
            <button className="px-3 py-1 rounded-lg border border-[var(--color-outline-variant)]/10 text-xs hover:bg-[var(--color-surface-container)] transition-colors">2</button>
            <button className="px-3 py-1 rounded-lg border border-[var(--color-outline-variant)]/10 text-xs hover:bg-[var(--color-surface-container)] transition-colors">التالي</button>
          </div>
        </div>
      </section>
    </>
  );
}
