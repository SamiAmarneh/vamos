'use client';

import React from "react";
import Link from "next/link";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      {/* Footer */}
      <footer className="w-full mt-20 pt-12 pb-8 bg-surface-container-highest dark:bg-slate-950 border-t border-outline-variant/15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto text-right leading-relaxed">
          <div>
            <div className="text-lg font-bold text-red-900 dark:text-red-100 mb-4 font-headline">
              فاموس برجر
            </div>
            <p className="text-slate-500 text-sm mb-6">
              نحن نؤمن بأن البرجر ليس مجرد وجبة، بل هو تجربة فنية متكاملة تبدأ من اختيار المكونات وتنتهي بابتسامة زبائننا.
            </p>
            <div className="flex gap-4 justify-end">
              <a
                className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-red-800 hover:opacity-80 transition-opacity"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-red-800 hover:opacity-80 transition-opacity"
                href="#"
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="font-bold text-red-800 mb-4 font-headline">روابط سريعة</h4>
            <Link className="text-slate-500 hover:text-red-600 transition-opacity" href="#">
              العناوين
            </Link>
            <Link className="text-slate-500 hover:text-red-600 transition-opacity" href="#">
              ساعات العمل
            </Link>
            <Link className="text-slate-500 hover:text-red-600 transition-opacity" href="#">
              سياسة الخصوصية
            </Link>
            <Link className="text-slate-500 hover:text-red-600 transition-opacity" href="#">
              الشروط والأحكام
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-red-800 mb-2 font-headline">تواصل معنا</h4>
            <div className="flex items-center justify-end gap-3 text-slate-500">
              <span>جنين، الشارع الرئيسي، مقابل المجمع</span>
              <span className="material-symbols-outlined text-red-800">location_on</span>
            </div>
            <div className="flex items-center justify-end gap-3 text-slate-500">
              <span>+970 599 000 000</span>
              <span className="material-symbols-outlined text-red-800">call</span>
            </div>
            <div className="flex items-center justify-end gap-3 text-slate-500">
              <span>يومياً من 11:00 ص حتى 11:00 م</span>
              <span className="material-symbols-outlined text-red-800">schedule</span>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center text-slate-500 text-xs border-t border-[var(--color-outline-variant)]/10 pt-8">
          © ٢٠٢٤ فاموس برجر. جميع الحقوق محفوظة
        </div>
      </footer>
    </>
  );
}
