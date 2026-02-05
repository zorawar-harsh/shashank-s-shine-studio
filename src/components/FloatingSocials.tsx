import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const FloatingSocials = () => {
  const whatsappNumber = '919876543210';
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  const instagramUrl = 'https://www.instagram.com/_shashank_car_detailing/';

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-center space-y-4">
      <a
        href={instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
        aria-label="Follow on Instagram"
      >
        <FaInstagram size={32} />
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default FloatingSocials;
