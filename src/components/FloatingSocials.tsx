import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const FloatingSocials = () => {
  const whatsappNumber = '+919506050605';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const instagramUrl = 'https://www.instagram.com/_shashank_car_detailing/';

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center space-y-4">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white p-4 rounded-full shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Follow on Instagram"
      >
        <FaInstagram size={25} />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={25} />
      </a>
    </div>
  );
};

export default FloatingSocials;
