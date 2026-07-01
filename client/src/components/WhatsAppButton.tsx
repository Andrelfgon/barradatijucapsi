import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = "https://api.whatsapp.com/send?phone=55%2021993455665&text=Olá%2C%20vim%20pelo%20site!%20Gostaria%20de%20mais%20informações%20sobre%20a%20consulta.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 animate-float">
      {/* Tooltip */}
      {isHovered && (
        <div className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap animate-fade-in shadow-lg">
          Agende sua consulta
        </div>
      )}
      
      {/* Botão WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center relative group animate-pulse-button"
        title="Fale conosco no WhatsApp"
      >
        {/* Icon */}
        <MessageCircle size={28} className="relative z-10" />
      </a>
    </div>
  );
}
