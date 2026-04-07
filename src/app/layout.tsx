import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro, Almarai, Tajawal } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import Cart from "@/components/cart";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-vietnam",
  subsets: ["latin"],
});

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  variable: "--font-almarai",
  subsets: ["arabic"],
});

const tajawal = Tajawal({
  weight: ['300', '400', '500', '700', '900'],
  variable: "--font-tajawal",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Vamos Burger | فاموس برجر",
  description: "الطعم الأصلي في جنين",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${plusJakartaSans.variable} ${beVietnamPro.variable} ${almarai.variable} ${tajawal.variable} h-full antialiased`}
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          .font-headline {
            font-family: var(--font-almarai), sans-serif;
          }
          body {
            font-family: var(--font-tajawal), sans-serif;
          }
          .hero-gradient {
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-container) 100%);
          }
        `}</style>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-surface text-on-surface">
        <CartProvider>
          <header className="w-full bg-surface/95 dark:bg-slate-950/95 border-b border-outline-variant/10 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-4 max-w-7xl mx-auto">
              <Link href="/" className="text-2xl font-black text-red-900 dark:text-red-100 tracking-tighter font-headline">
                Vamos Burger
              </Link>
              <nav aria-label="Main navigation" className="flex flex-wrap justify-center gap-3 md:gap-8 text-sm font-headline font-bold text-right">
                <Link href="/" className="text-red-800 dark:text-red-400 border-b-2 border-red-800 pb-1 hover:scale-105 transition-transform duration-500 ease-in-out">
                  الرئيسية
                </Link>
                <Link href="/menu" className="text-slate-600 dark:text-slate-400 hover:text-red-700 hover:scale-105 transition-transform duration-500 ease-in-out">
                  القائمة
                </Link>
                <Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-red-700 hover:scale-105 transition-transform duration-500 ease-in-out">
                  من نحن
                </Link>
                <Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-red-700 hover:scale-105 transition-transform duration-500 ease-in-out">
                  اتصل بنا
                </Link>
                <Link href="/checkout" className="text-slate-600 dark:text-slate-400 hover:text-red-700 hover:scale-105 transition-transform duration-500 ease-in-out">
                  الطلبات
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <button className="material-symbols-outlined text-slate-600 dark:text-slate-400 hover:scale-105 transition-transform" aria-label="Toggle language">
                  language
                </button>
                <Link href="/menu" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform shadow-sm">
                  اطلب الآن
                </Link>
              </div>
            </div>
          </header>
          {children}
          <Cart />
        </CartProvider>
      </body>
    </html>
  );
}
