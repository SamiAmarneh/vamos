import React from "react";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface flex selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Sidebar Navigation Shell */}
      <aside className="h-screen w-64 fixed right-0 border-l border-slate-200 bg-surface-container-low flex flex-col z-50 hidden md:flex">
        {/* Brand Identity */}
        <div className="px-6 py-8 flex flex-col items-center border-b border-[var(--color-outline-variant)]/10">
          <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mb-4 shadow-lg">
            <span className="material-symbols-outlined text-on-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
          </div>
          <h1 className="text-xl font-bold text-red-900 font-headline">فاموس برجر</h1>
          <p className="text-xs text-on-surface-variant mt-1">نظام الإدارة</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-50 text-red-800 font-bold border-r-4 border-red-800 hover:translate-x-[-4px] transition-transform"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span>لوحة التحكم</span>
          </Link>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-100 hover:translate-x-[-4px] transition-transform" href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            <span>الطلبات</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-100 hover:translate-x-[-4px] transition-transform" href="#">
            <span className="material-symbols-outlined">restaurant_menu</span>
            <span>القائمة</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-100 hover:translate-x-[-4px] transition-transform" href="#">
            <span className="material-symbols-outlined">group</span>
            <span>المستخدمين</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-100 hover:translate-x-[-4px] transition-transform" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span>الإعدادات</span>
          </a>
        </nav>

        {/* User Profile Quick View */}
        <div className="p-6 mt-auto">
          <div className="flex items-center gap-3 bg-surface-container-lowest p-3 rounded-xl shadow-sm">
            <img
              alt="Admin"
              className="w-10 h-10 rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDwl2IFEPfSNnELcmZs88URQy5gUfn9nejRDOfgKPfwxLBBnuVikGinWVfEAeRmiXVZKJPm2sslZdkPL-Ub-0rol5_8sSbp92_NiC1wIwYZfvxrP3wLehylJ5UjGZbVixSg2yfabeKS0StYgBLWzTz6t4w79fifrg5g3G1kSx76UBbKkkBAXiYwnLhRt0bt-NFDO2Mx7NPp3sHYN9_rtDHqnUeER6mqv_7-pF4MhvOb--SQkU3oKK2BYPym8HlDmlMj3WGyG3B7WE"
            />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">أحمد الإداري</p>
              <p className="text-xs text-on-surface-variant">مدير المطعم</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="md:mr-64 flex-1 flex flex-col min-h-screen">
        <main className="p-8 flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="w-full mt-20 pt-12 pb-8 bg-surface-container-highest">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto text-right">
            <div>
              <h4 className="text-lg font-bold text-red-900 font-headline mb-4">فاموس برجر</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                نظام إدارة المطاعم المتكامل المصمم خصيصاً لتجارب الطهي الراقية. نحن نهتم بكل تفاصيل عملك بقدر اهتمامك بجودة طعامك.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-surface mb-4">روابط سريعة</h4>
              <ul className="space-y-2 text-sm">
                <li><a className="text-slate-500 hover:text-red-600 transition-colors" href="#">سياسة الخصوصية</a></li>
                <li><a className="text-slate-500 hover:text-red-600 transition-colors" href="#">الشروط والأحكام</a></li>
                <li><a className="text-slate-500 hover:text-red-600 transition-colors" href="#">الدعم الفني</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-on-surface mb-4">الدعم</h4>
              <div className="flex items-center gap-2 text-slate-500 text-sm mb-2">
                <span className="material-symbols-outlined text-sm">mail</span>
                <span>support@vamosburger.ps</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="material-symbols-outlined text-sm">call</span>
                <span>920000000</span>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-[var(--color-outline-variant)]/15 pt-8 text-center px-8">
            <p className="text-slate-400 text-xs">© ٢٠٢٤ فاموس برجر. جميع الحقوق محفوظة</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
