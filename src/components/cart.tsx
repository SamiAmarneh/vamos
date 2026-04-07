'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useCart, CartItem } from '@/lib/cart-context';

export default function Cart() {
  const { state, dispatch } = useCart();
  const [isOpen, setIsOpen] = useState(false);

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

  const getItemTypeLabel = (type: string) => {
    switch (type) {
      case 'sandwich': return 'ساندويش';
      case 'meal': return 'وجبة';
      case 'double': return 'دبل';
      default: return '';
    }
  };

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-primary text-on-primary p-4 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="فتح السلة"
      >
        <span className="material-symbols-outlined">shopping_cart</span>
        {state.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
            {state.items.reduce((sum, item) => sum + item.quantity, 0)}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
          <div className="bg-surface rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-outline-variant/10">
              <h2 className="text-xl font-black font-headline text-on-surface">سلة الطلبات</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-surface-container-low rounded-lg transition-colors"
                aria-label="إغلاق"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto max-h-96">
              {state.items.length === 0 ? (
                <div className="p-6 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-6xl mb-4 block opacity-50">shopping_cart</span>
                  <p>السلة فارغة</p>
                  <p className="text-sm mt-2">أضف بعض الأصناف من القائمة</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  {state.items.map((item) => (
                    <div key={`${item.id}-${item.type}`} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl">
                      <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-container-high flex items-center justify-center">
                        {item.image ? (
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        ) : (
                          <span className="material-symbols-outlined text-3xl text-on-surface-variant">restaurant</span>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-on-surface truncate">{item.name}</h3>
                        {item.type !== 'default' && (
                          <p className="text-sm text-on-surface-variant">{getItemTypeLabel(item.type)}</p>
                        )}
                        <p className="text-primary font-bold">₪ {item.price}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors"
                          aria-label="تقليل الكمية"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>

                        <span className="w-8 text-center font-bold">{item.quantity}</span>

                        <button
                          onClick={() => updateQuantity(item, item.quantity + 1)}
                          className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-surface-container-highest transition-colors"
                          aria-label="زيادة الكمية"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label="إزالة العنصر"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-outline-variant/10 p-6 space-y-4">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>المجموع:</span>
                  <span className="text-primary">₪ {state.total.toFixed(2)}</span>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => dispatch({ type: 'CLEAR_CART' })}
                    className="flex-1 py-3 px-4 border border-outline-variant/20 rounded-lg font-bold text-on-surface hover:bg-surface-container-low transition-colors"
                  >
                    إفراغ السلة
                  </button>
                  <Link
                    href="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 py-3 px-4 bg-primary text-on-primary rounded-lg font-bold text-center hover:scale-105 transition-transform"
                  >
                    إتمام الطلب
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}