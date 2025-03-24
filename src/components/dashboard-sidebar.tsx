"use client";
import { useEffect, useState } from "react";
import { auth } from "@/config/FireBaseConfig";
import { useRouter } from "next/navigation";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { checkAdmin } from "@/util/checkAdmin"; // Import hàm kiểm tra admin
import { Menu, X, Package, ShoppingCart, Home } from "lucide-react";

const Sidebar = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      setUser(user);
      if (user) {
        const adminStatus = await checkAdmin(user.uid);
        setIsAdmin(adminStatus);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  const handleLogout = async () => {
    router.push("/");
    await signOut(auth);
    setUser(null);
    setIsAdmin(false);
  };

  if (loading) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <p className="mb-4">🔄 Đang kiểm tra quyền truy cập...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <p className="mb-4">Bạn cần đăng nhập để tiếp tục</p>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Đăng nhập với Google
        </button>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <p className="text-red-500">
          ⛔ Bạn không có quyền truy cập trang này!
        </p>
        <button
          onClick={handleLogout}
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded"
        >
          Đăng xuất
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      {/* Nút mở Sidebar trên mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-4 z-50 md:hidden"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white w-64 p-4 space-y-6 transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:relative h-full`}
      >
        {/* Logo */}
        <div className="text-2xl font-bold text-center">Dashboard</div>

        {/* Menu */}
        <nav className="space-y-3">
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded"
          >
            <Home size={20} /> Dashboard
          </button>
          <button
            onClick={() => router.push("/orders")}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded"
          >
            <ShoppingCart size={20} /> Orders
          </button>
          <button
            onClick={() => router.push("/products")}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 rounded"
          >
            <Package size={20} /> Products
          </button>
        </nav>

        {/* Nút Đăng xuất */}
        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 bg-red-500 hover:bg-red-600 rounded"
        >
          Đăng xuất
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
