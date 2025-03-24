import { db } from "@/config/FireBaseConfig";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

export const fetchOrders = async () => {
  try {
    const ordersRef = collection(db, "Order");
    const ordersSnapshot = await getDocs(ordersRef);

    const ordersData = await Promise.all(
      ordersSnapshot.docs.map(async (orderDoc) => {
        const order = orderDoc.data();

        // Kiểm tra nếu order không tồn tại hoặc thiếu dữ liệu
        if (!order || !order.customerId || !order.candleId) {
          console.error("Lỗi: Đơn hàng thiếu dữ liệu", order);
          return null;
        }

        try {
          // Lấy thông tin khách hàng
          const customerRef = doc(db, "Customer", order.customerId);
          const customerDoc = await getDoc(customerRef);
          const customerName = customerDoc.exists()
            ? customerDoc.data().fullname
            : "Không xác định";

          // Lấy thông tin nến
          const candleRef = doc(db, "Candle", order.candleId);
          const candleDoc = await getDoc(candleRef);
          const candleName = candleDoc.exists()
            ? candleDoc.data().candleName
            : "Không xác định";
          const candleThumbnailImage = candleDoc.exists()
            ? candleDoc.data().candleThumbnailImage
            : "";

          return {
            id: orderDoc.id,
            customerName,
            candleName,
            candleThumbnailImage,
            quantity: order.quantity,
            totalPrice: order.totalPrice,
          };
        } catch (error) {
          console.error("Lỗi khi lấy dữ liệu Firestore:", error);
          return null;
        }
      })
    );

    return ordersData.filter((order) => order !== null);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách đơn hàng:", error);
    return [];
  }
};
