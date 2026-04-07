'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart, CartItem } from '@/lib/cart-context';

export default function CheckoutPage() {
  const { state, dispatch } = useCart();
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });

  const deliveryFee = 5;
  const totalWithDelivery = state.total + deliveryFee;

  const updateQuantity = (item: CartItem, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id, type: item.type } });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, type: item.type, quantity: newQuantity } });
    }
  };

  const removeItem = (item: CartItem) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id, type: item.type } });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to your backend
    alert('تم إرسال الطلب بنجاح! سيتم التواصل معك قريباً.');
    dispatch({ type: 'CLEAR_CART' });
  };

  const getItemTypeLabel = (type: string) => {
    switch (type) {
      case 'sandwich': return 'ساندويش';
      case 'meal': return 'وجبة';
      case 'double': return 'دبل';
      default: return '';
    }
  };

  if (state.items.length === 0) {
    return (
      <main className="pt-24 min-h-screen flex-1">
        <div className="max-w-4xl mx-auto px-6 py-12 text-center">
          <span className="material-symbols-outlined text-8xl text-slate-400 mb-6 block">shopping_cart</span>
          <h1 className="text-3xl font-black font-headline text-on-surface mb-4">السلة فارغة</h1>
          <p className="text-on-surface-variant mb-8">لا توجد عناصر في سلة الطلبات</p>
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            <span className="material-symbols-outlined">restaurant_menu</span>
            تصفح القائمة
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 min-h-screen flex-1">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-black font-headline text-on-surface mb-8 text-center">إتمام الطلب</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-6 rounded-xl">
              <h2 className="text-2xl font-black font-headline text-on-surface mb-6">ملخص الطلب</h2>

              <div className="space-y-4 mb-6">
                {state.items.map((item) => (
                  <div key={`${item.id}-${item.type}`} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-lg">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-high flex items-center justify-center">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="material-symbols-outlined text-2xl text-on-surface-variant">restaurant</span>
                      )}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-bold text-on-surface">{item.name}</h3>
                      {item.type !== 'default' && (
                        <p className="text-sm text-on-surface-variant">{getItemTypeLabel(item.type)}</p>
                      )}
                      <p className="text-primary font-bold">₪ {item.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors"
                      >
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm">delete</span>
                    </button>
                  </div>
                ))}
              </div>

              <div className="border-t border-outline-variant/10 pt-4 space-y-2">
                <div className="flex justify-between text-on-surface">
                  <span>المجموع الفرعي:</span>
                  <span>₪ {state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-on-surface">
                  <span>رسوم التوصيل:</span>
                  <span>₪ {deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-black text-primary border-t border-outline-variant/10 pt-2">
                  <span>المجموع الكلي:</span>
                  <span>₪ {totalWithDelivery.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Information Form */}
          <div className="bg-surface-container-lowest p-6 rounded-xl">
            <h2 className="text-2xl font-black font-headline text-on-surface mb-6">معلومات التوصيل</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2">الاسم الكامل *</label>
                <input
                  type="text"
                  required
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2">رقم الهاتف *</label>
                <input
                  type="tel"
                  required
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full px-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none"
                  placeholder="059XXXXXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2">عنوان التوصيل *</label>
                <textarea
                  required
                  rows={3}
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                  className="w-full px-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none resize-none"
                  placeholder="أدخل عنوان التوصيل بالتفصيل"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-on-surface-variant mb-2">ملاحظات إضافية</label>
                <textarea
                  rows={2}
                  value={customerInfo.notes}
                  onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                  className="w-full px-4 py-3 bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none resize-none"
                  placeholder="أي ملاحظات خاصة بالطلب..."
                />
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <div className="flex items-center gap-3 text-primary font-bold mb-2">
                  <span className="material-symbols-outlined">info</span>
                  <span>معلومات مهمة</span>
                </div>
                <ul className="text-sm text-primary space-y-1">
                  <li>• وقت التوصيل: 30-45 دقيقة</li>
                  <li>• الحد الأدنى للطلب: 25 شيكل</li>
                  <li>• الدفع عند الاستلام</li>
                </ul>
              </div>

              <button
                type="submit"
                className="w-full hero-gradient text-on-primary py-4 rounded-xl font-black text-lg hover:scale-[1.02] transition-all duration-[400ms] shadow-lg shadow-primary/20"
              >
                تأكيد الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}