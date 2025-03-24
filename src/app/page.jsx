"use client";
import Footer from "@/components/footer";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [language, setLanguage] = useState("vi");
  const [open, setOpen] = useState(false);
  const translations = {
    vi: {
      freeShipping: "🚚 Miễn phí vận chuyển hôm nay!",
      limitedOffer: "🔥 Ưu đãi có hạn!",
      shopNow: "Mua ngay",
      shopCollection: "Khám phá bộ sưu tập mới nhất",
      orderNow: "Đặt hàng",
      home: "Trang chủ",
      shop: "Cửa hàng",
      newArrival: "Hàng mới",
      manage: "Quản lý",
      blog: "Blog",
      cart: "Giỏ hàng 🛒",
      downloadApp: "Tải App",
      subTitle: "Combo với giá ưu đãi",
      whyChooseUs: "Tại sao chọn Mekong Candle?",
      gift: "🎁 Quà tặng ý nghĩa",
      giftDesc: "Nến thơm giúp bạn thể hiện tình cảm với người thân yêu.",
      relax: "🧘 Thư giãn tinh thần",
      relaxDesc:
        "Hương thơm tự nhiên giúp giảm stress và tạo không gian ấm cúng.",
      vrExperience: "🌍 Trải nghiệm VR độc đáo",
      vrExperienceDesc:
        "Thưởng thức mùi hương và khám phá vùng đất qua video VR.",
      vrGuide: "Hướng dẫn sử dụng VR",
      vrGuideDesc: "Xem cách sử dụng kính VR và trải nghiệm video thực tế.",
      contactUs: "Liên hệ chúng tôi",
      followUs: "Theo dõi chúng tôi",
    },
    en: {
      freeShipping: "🚚 Free Shipping Today!",
      limitedOffer: "🔥 Limited Time Offer!",
      shopNow: "Shop Now",
      shopCollection: "Shop our latest collection",
      orderNow: "Order Now",
      home: "Home",
      shop: "Shop",
      newArrival: "New Arrival",
      manage: "Manage",
      blog: "Blog",
      cart: "Cart 🛒",
      downloadApp: "Download App",
      subTitle: "Combo with preferential price",
      whyChooseUs: "Why Choose Mekong Candle?",
      gift: "🎁 Meaningful Gift",
      giftDesc: "Scented candles help you express love to your loved ones.",
      relax: "🧘 Mental Relaxation",
      relaxDesc: "Natural scents reduce stress and create a cozy atmosphere.",
      vrExperience: "🌍 Unique VR Experience",
      vrExperienceDesc:
        "Enjoy fragrances and explore regions through VR videos.",
      vrGuide: "VR Usage Guide",
      vrGuideDesc:
        "Learn how to use VR glasses and experience real-world videos.",
      contactUs: "Contact Us",
      followUs: "Follow Us",
    },
  };
  const qrImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/Download_App.png?alt=media&token=b157d84b-ea2c-4a26-a078-470ba88bb058";


  const t = translations[language];

  return (
    <div className="bg-[#FAF6F2] text-[#3D2B1F]">
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          {/* Overlay mờ + hiệu ứng mở */}
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" />

          {/* Nội dung chính */}
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow-2xl w-96 animate-scale-in">
            {/* Tiêu đề */}
            <Dialog.Title className="text-2xl font-bold text-center text-gray-800 mb-3">
              Quét mã QR để tải ứng dụng
            </Dialog.Title>

            {/* Nội dung */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-center text-gray-600 px-4">
                Dùng điện thoại của bạn để quét mã QR và tải ngay <strong>Mekong Candle App</strong>!
              </p>

              {/* Ảnh QR Code */}
              <img
                src={qrImageUrl}
                alt="QR Code"
                className="w-56 h-56 rounded-lg shadow-md border border-gray-300"
              />
            </div>

            {/* Nút đóng */}
            <button
              onClick={() => setOpen(false)}
              className="mt-5 w-full py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
            >
              ✖ Đóng
            </button>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      {/* Header */}
      <header className="bg-[#6B1D1D] text-white text-sm flex flex-wrap justify-center md:justify-between p-2 px-4 md:px-8">
        <span>{t.freeShipping}</span>
        <span className="hidden md:inline">{t.limitedOffer}</span>
        <span>{t.freeShipping}</span>
      </header>

      {/* Navbar */}
      <nav className="flex flex-wrap justify-between items-center p-5 border-b">
        <h1 className="text-3xl font-bold">Mekong Candle🔥</h1>
        <ul className="flex flex-wrap gap-4 md:gap-6 text-lg items-center">
          <li className="cursor-pointer">{t.home}</li>
          <li className="cursor-pointer" onClick={() => router.push('/dashboard/order')}>{t.manage}</li>
          <li className="cursor-pointer">{t.blog}</li>
          <li className="cursor-pointer">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="p-1 rounded bg-[#FAF6F2]"
            >
              <option value="vi">Tiếng Việt</option>
              <option value="en">English</option>
            </select>
          </li>
          <li>
            <button
              onClick={() => setOpen(true)}
              className="bg-[#6B1D1D] text-white px-4 py-2 rounded"
            >
              {t.downloadApp}
            </button>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-wrap md:flex-nowrap p-6 md:p-10 items-center">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold">Thắp sáng - Thư giãn - Tận hưởng 🔥</h2>
          <p className="mt-4">{t.subTitle}</p>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/combo_buoiduasen_16_9.png?alt=media&token=c2d95ada-27a9-4689-b07b-84a269c248b0"
            alt="Candles"
            className="rounded-lg mt-5 w-full max-w-[400px]"
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/VinhLongVideoThumbnail.png?alt=media&token=e3c9d0bf-95cb-4947-a5e2-ac31ba8406a6"
            alt="VR Experience"
            className="rounded-lg w-full max-w-[600px]"
          />
        </div>
      </section>

      {/* Product Section */}
      <section className="p-10">
        <h2 className="text-4xl font-bold text-center">{t.shopCollection}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <img
                src={product.image}
                alt={language == "vi" ? product.nameVI : product.nameEN}
                className="object-cover mx-auto rounded w-full max-w-[200px] h-auto"
              />
              <h3 className="text-xl font-semibold mt-2 text-center">
                {language == "vi" ? product.nameVI : product.nameEN}
              </h3>
              <p className="text-gray-700 text-sm text-center">
                {language == "vi"
                  ? product.descriptionVI
                  : product.descriptionEN}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold">{product.price}₫</span>
                <button onClick={() => setOpen(true)} className="bg-[#6B1D1D] text-white px-4 py-2 rounded">
                  {t.orderNow}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-[#FAF6F2] text-[#3D2B1F]">
        <section className="p-10 text-center bg-white">
          <h2 className="text-4xl font-bold">{t.whyChooseUs}</h2>
          <p className="mt-4 text-lg">
            {t.giftDesc} {t.relaxDesc} {t.vrExperienceDesc}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">{t.gift}</h3>
              <p className="mt-2">{t.giftDesc}</p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">{t.relax}</h3>
              <p className="mt-2">{t.relaxDesc}</p>
            </div>
            <div className="p-6 border rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">{t.vrExperience}</h3>
              <p className="mt-2">{t.vrExperienceDesc}</p>
            </div>
          </div>
        </section>

        <section className="p-10 text-center bg-[#FFF8F0]">
          <h2 className="text-4xl font-bold">{t.vrGuide}</h2>
          <p className="mt-4 text-lg">{t.vrGuideDesc}</p>
          <div className="flex justify-center mt-6">
            <iframe
              className="w-full max-w-3xl h-auto aspect-video"
              src="https://www.youtube.com/embed/uugqN3x3ZEY?si=CUibwJbqJ1WnFXOe"
              title="Hướng dẫn sử dụng VR"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

const products = [
  {
    nameVI: "Longan Candle",
    nameEN: "Longan Candle",
    descriptionVI: "Hương ngọt dịu từ nhãn Bạc Liêu, thư giãn và ấm cúng.",
    descriptionEN: "Sweet aroma from Bạc Liêu longan, relaxing.",
    price: "120000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/BacLieu.jpeg?alt=media&token=73dca7e4-3b74-40dd-924c-d9c5a0bdd10b",
  },
  {
    nameVI: "Nến thơm Dừa",
    nameEN: "Coconut Candle",
    descriptionVI: "Tinh dầu dừa Bến Tre, hương thơm thanh khiết.",
    descriptionEN: "Pure coconut oil scent from Bến Tre.",
    price: "120000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/BenTre.jpeg?alt=media&token=4f0ffa05-8a50-400f-8407-e849a1945648",
  },
  {
    nameVI: "Nến thơm Sen",
    nameEN: "Lotus Candle",
    descriptionVI: "Hương sen Đồng Tháp giúp tâm hồn bạn bình yên.",
    descriptionEN: "Đồng Tháp lotus scent for peace of mind.",
    price: "120000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/DongThap.jpeg?alt=media&token=9b7fad64-7d4a-48bf-83f6-dfa388c5163b",
  },
  {
    nameVI: "Nến thơm Bưởi",
    nameEN: "Pomelo Candle",
    descriptionVI: "Hương bưởi Vĩnh Long tươi mát, tràn đầy năng lượng.",
    descriptionEN: "Refreshing pomelo scent from Vĩnh Long.",
    price: "120000",
    image:
      "https://firebasestorage.googleapis.com/v0/b/candleapp-69573.appspot.com/o/VinhLong.jpeg?alt=media&token=2c4ad77c-5aee-4c4c-9af3-e63839959132",
  },
];
