"use client";
import React, { useEffect, useState } from "react";
import { auth } from "@/config/FireBaseConfig";
import { checkAdmin } from "@/util/checkAdmin";
import { fetchOrders } from "@/util/fetchOrders";

const Page = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const adminStatus = await checkAdmin(user.uid);
        setIsAdmin(adminStatus);
        if (adminStatus) {
          const ordersData = await fetchOrders();
          setOrders(ordersData || []);
        }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <p className="absolute top-[40vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        🔄 Đang tải...
      </p>
    );
  }

  if (!user) {
    return (
      <p className="absolute top-[40vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        ❌ Bạn cần đăng nhập.
      </p>
    );
  }

  if (!isAdmin) {
    return (
      <p className="absolute top-[40vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        ⛔ Bạn không có quyền truy cập.
      </p>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Danh sách đơn hàng</h1>
      {orders.length === 0 ? (
        <p>Không có đơn hàng nào.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="p-4 border rounded-lg shadow-md flex items-center"
            >
              <img
                src={order.candleThumbnailImage}
                alt={order.candleName}
                className="w-16 h-16 rounded-md object-cover mr-4"
              />
              <div>
                <p className="text-lg font-semibold">{order.candleName}</p>
                <p>👤 Khách hàng: {order.customerName}</p>
                <p>📦 Số lượng: {order.quantity}</p>
                <p>💰 Tổng tiền: {order.totalPrice.toLocaleString()} VND</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
