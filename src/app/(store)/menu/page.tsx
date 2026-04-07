'use client';

import React from "react";
import { menuData } from "@/data/menu";
import { useCart } from "@/lib/cart-context";

export default function MenuPage() {
  const { dispatch } = useCart();

  const addToCart = (item: any, type: 'sandwich' | 'meal' | 'double' | 'default') => {
    const price = type === 'sandwich' ? item.prices.sandwich :
                  type === 'meal' ? item.prices.meal :
                  type === 'double' ? item.prices.double :
                  item.prices.default || item.prices.sandwich || item.prices.meal;

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: item.id,
        name: item.name,
        price: price,
        image: item.image,
        type: type
      }
    });
  };
  const getDefaultImage = (categoryId: string) => {
    switch (categoryId) {
      case "beef-burgers":
      case "kids-menu":
        return "https://lh3.googleusercontent.com/aida-public/AB6AXuD4u_JGLt0t7q9lVGDerElB7p4rMYtC1g9kTlFv7HxrPsBBXvhiXeBRYUbzJImXKsiwwKTl9aNimsBJp8t8cmqeTmQDPGT9elL7W86C92_B_PzPpXT8nUQ4Y1j_DWzO39_u4uHp8tt1vxD8w5IZIPOoI5B8pRoW2naxt3f5kxQpcacysYPTtqHXqyqBHqFBCQP2ocJMA6yspOJPa9NT9vbDNiZWjBkZsZ8TFm5wiZ3FpZ6OPKKSaQn4_S0WWlEmtSgvYPJwh-LBHIg";
      case "chicken-burgers":
        return "https://lh3.googleusercontent.com/aida-public/AB6AXuClTM3S8PRdvHMZPjpP_1sGvLJiG2_rXumc3A767wE1WftOoMU6WJYzOmCTYbH2zjzdiXhwrierCmqI2dcOfhuPUJi0OiuCFfLliiDQCLFeizg1B7d1VdgpcQ2laB2O4g9rcuhHZ1obmPhVE0ETk8uy_RDp1f5Y5oARljoEXx_a-7L-LDHYDp2xIp7o4oo2d9DYZPoLCMD2NMInFs9NXl6v2c5bfzAd5ewnhHyUTPyFzy5yDU3GCceDZ_ZqDSKP6PaskBO9nM5lgvw";
      case "add-ons-appetizers":
      case "extra-add-ons":
        return "https://lh3.googleusercontent.com/aida-public/AB6AXuDad7joyNRU96plUdBRiQmaNAQRJ88kNXQL8D96fxPZI0_yuu-awMpsBtsRXbALOUQkCKa7BNE0c-NE5K4RaRQTos1pkgSZV_NVB8lje0SvKvadYuoclvbdreF8ZfRXnZd8VrkgzMqsyZf7lPtV9rKJnfDj_XTfSenXYvscEWVe2gAm5SzNhJWXm3lyPFrMk98LMkWwGYqumVyOLoYCecl8JfT148Z4qMKwHRQ4kKDYHqgSnEj7V-6C3briJInIuBZs2_vrDg8sd0s";
      default:
        return "https://lh3.googleusercontent.com/aida-public/AB6AXuDvZhhEN0YbbezNZ94hjtYODO064PP_N-P6YZxGux2aDUZqUz3JkwlSJ8UKvn0-B139P8-tXERKxy18-IQs3RD-pIH9h_jLgk8Z3nDkXEjHc91Ln7YaatHWF5MArdn5D_zSCA1HdCRI8CYJcSE1Lx51ZtfcigPXF_c7Pk6OeTIyIrbzBNoFwLxa7SZIl5P7jdercalwt9NbNZpMAiy1wByDZy6ELiBM8jjOOkcia8AO83PxiL285LU1srjj9e0Q-RCMS1dEdgTIp2s";
    }
  };

  return (
    <main className="pt-28 pb-20 flex-1 scroll-smooth">
      {/* Hero Section / Editorial Title */}
      <header className="max-w-7xl mx-auto px-6 mb-16">
        <div className="relative overflow-hidden bg-surface-container-low rounded-xl p-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="z-10 text-right space-y-6 max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-black text-primary leading-tight font-headline">
              مذاق <br />
              <span className="text-on-surface">لا يُنسى</span>
            </h1>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-lg">
              اكتشف قائمتنا المختارة من البرجر المشوي على اللهب، المجهز بأجود أنواع اللحوم الطازجة والمكونات الفاخرة.
            </p>
          </div>
          <div className="relative w-full md:w-1/2 aspect-square max-w-md">
            <img
              className="w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwU4AB592eFHYm2x8fvG51FJqXTyxpvTfHazK0tUmO3oCrXH53CXcPEA2P03fHS56lbySJ07LL9mlPYMX3LyJn6NKoDKPtTUwuCmogu0HcDk8LQBO7qlisK-WGF86JpGDiFpZxsuc_U5A2zVIAtTbvwqBqkq0nhQG-hJ23X9StKUaYiw8gCtX4Ff_agtlNamk2cfNhGOj2NFvQU4tUtJAQHkCvmDMiqAM_t3Z2tii6FBGpQzobULxOjQVKJz_P95IHu4P-WJbo5Wg"
              alt="Gourmet double beef burger"
            />
          </div>
        </div>
      </header>

      {/* Category Navigation */}
      <section className="max-w-7xl mx-auto px-6 mb-16 sticky top-20 z-40 bg-surface/90 backdrop-blur-md py-4">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          {menuData.map((cat, idx) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className={`px-8 py-3 rounded-full font-bold transition-all hover:scale-105 ${
                idx === 0
                  ? "bg-primary text-on-primary shadow-lg"
                  : "bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] hover:bg-primary/10"
              }`}
            >
              {cat.title}
            </a>
          ))}
        </div>
      </section>

      {/* Dynamic Menu Grid */}
      {menuData.map((category) => (
        <section key={category.id} id={category.id} className="max-w-7xl mx-auto px-6 mb-24 pt-20 -mt-20">
          <h2 className="text-4xl font-black text-primary font-headline mb-16 text-center">
            {category.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="group relative bg-surface-container-lowest rounded-xl p-6 pt-0 transition-all duration-[500ms] hover:translate-y-[-8px] shadow-sm hover:shadow-xl"
              >
                <div className="relative -top-12 flex justify-center">
                  <img
                    className="w-40 h-40 object-cover rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-500 bg-white"
                    src={item.image || getDefaultImage(category.id)}
                    alt={item.name}
                  />
                </div>
                <div className="text-right space-y-3 -mt-4">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-primary font-black text-xl whitespace-nowrap">
                      ₪ {item.prices.default || item.prices.sandwich || item.prices.meal}
                    </span>
                    <h3 className="text-lg font-bold text-on-surface line-clamp-1 mr-2">{item.name}</h3>
                  </div>
                  
                  {item.description && (
                    <p className="text-on-surface-variant text-sm leading-relaxed h-10 line-clamp-2">
                      {item.description}
                    </p>
                  )}

                  <div className="pt-2 space-y-2">
                    {item.prices.sandwich !== undefined && (
                      <button
                        onClick={() => addToCart(item, 'sandwich')}
                        className="w-full py-2 rounded-lg bg-primary text-on-primary font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm"
                      >
                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                        أضف ساندويش (₪ {item.prices.sandwich})
                      </button>
                    )}
                    {item.prices.meal !== undefined && (
                      <button
                        onClick={() => addToCart(item, 'meal')}
                        className="w-full py-2 rounded-lg bg-red-600 text-white font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm"
                      >
                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                        أضف وجبة (₪ {item.prices.meal})
                      </button>
                    )}
                    {item.prices.double !== undefined && (
                      <button
                        onClick={() => addToCart(item, 'double')}
                        className="w-full py-2 rounded-lg bg-orange-600 text-white font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 text-sm"
                      >
                        <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                        أضف دبل (₪ {item.prices.double})
                      </button>
                    )}
                    {(!item.prices.sandwich && !item.prices.meal && !item.prices.double) && (
                      <button
                        onClick={() => addToCart(item, 'default')}
                        className="w-full py-3 rounded-lg border border-[var(--color-outline-variant)]/15 text-primary font-bold group-hover:bg-primary group-hover:text-on-primary transition-colors flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined">add_shopping_cart</span>
                        إضافة للسلة
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Newsletter / Promo Bento Section */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-[var(--color-primary-container)] text-[var(--color-on-primary-container)] p-12 rounded-xl flex items-center justify-between">
            <div className="space-y-4 text-right z-10 relative">
              <h2 className="text-4xl font-black font-headline">احصل على خصم 20%</h2>
              <p className="opacity-90 max-w-sm">اشترك في قائمتنا البريدية ليصلك جديد عروضنا الحصرية وتشكيلاتنا الموسمية.</p>
              <div className="flex gap-2 mt-6">
                <button className="bg-surface text-primary px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform">اشترك</button>
                <input
                  className="bg-primary/20 border-none rounded-lg text-right focus:ring-2 focus:ring-surface w-full md:w-64 placeholder:text-[var(--color-on-primary-container)]/60 text-white"
                  placeholder="بريدك الإلكتروني"
                  type="email"
                />
              </div>
            </div>
            <span
              className="material-symbols-outlined text-8xl opacity-20 hidden lg:block"
              style={{ fontVariationSettings: "'FILL' 1", fontSize: "140px", transform: "translateY(-10px) translateX(-40px)" }}
            >
              local_fire_department
            </span>
          </div>
          <div className="bg-surface-container-highest p-12 rounded-xl text-right flex flex-col justify-center gap-4 hover:shadow-lg transition-shadow">
            <h3 className="text-3xl font-black text-primary font-headline">توصيل سريع</h3>
            <p className="text-on-surface-variant font-medium text-lg leading-relaxed">
              نصل إليك أينما كنت في أقل من 30 دقيقة، ساخناً وطازجاً.
            </p>
            <span className="material-symbols-outlined text-6xl text-primary mt-4 self-end">delivery_dining</span>
          </div>
        </div>
      </section>
    </main>
  );
}
