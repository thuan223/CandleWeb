import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.innerHTML = `window.chtlConfig = { chatbotId: "6313182268" }`;
    document.body.appendChild(script);

    const chatlingScript = document.createElement("script");
    chatlingScript.src = "https://chatling.ai/js/embed.js";
    chatlingScript.async = true;
    chatlingScript.dataset.id = "6313182268";
    chatlingScript.id = "chatling-embed-script";
    document.body.appendChild(chatlingScript);
  }, []);

  return (
    <footer className="bg-[#6B1D1D] text-white p-5 mt-10">
      <div className="flex flex-wrap justify-between text-center md:text-left">
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-bold">Liên hệ</h3>
          <p>Email: support@mekongcandle.com</p>
          <p>Phone: +84 123 456 789</p>
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h3 className="text-xl font-bold">Theo dõi chúng tôi</h3>
          <p>Facebook | Instagram | TikTok</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
