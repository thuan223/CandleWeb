import { db } from "@/config/FireBaseConfig";
import { doc, getDoc } from "firebase/firestore";

export const checkAdmin = async (uid: string): Promise<boolean> => {
  try {
    const adminRef = doc(db, "admin", uid);
    const adminDoc = await getDoc(adminRef);

    return adminDoc.exists(); // Nếu tồn tại document, người dùng là admin
  } catch (error) {
    console.error("Lỗi kiểm tra admin:", error);
    return false;
  }
};
