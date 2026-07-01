import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Olá! Meu nome é ${formData.name}. Email: ${formData.email}. Telefone: ${formData.phone}. Mensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5521993455665?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Telefone</h3>
            <a href="tel:+5521993455665" className="text-green-600 hover:text-green-700 font-medium">
              (21) 99345-5665
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:psicoconceicao@gmail.com" className="text-green-600 hover:text-green-700 font-medium">
              psicoconceicao@gmail.com
            </a>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-green-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Localização</h3>
            <p className="text-gray-600 font-medium">
              Barra da Tijuca, Rio de Janeiro - RJ
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-10 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Envie uma Mensagem</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Telefone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                placeholder="(21) 9 9999-9999"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100 resize-none"
                placeholder="Conte-me um pouco sobre você e como posso ajudar..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Enviar via WhatsApp
            </button>
          </form>

          <p className="text-sm text-gray-600 text-center mt-6">
            Sua mensagem será enviada via WhatsApp. Respondo em até 24 horas.
          </p>
        </div>
      </div>
    </section>
  );
}
