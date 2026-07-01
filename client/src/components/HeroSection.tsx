import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="mb-6">
              <p className="text-green-600 font-semibold text-sm uppercase tracking-wider">
                Bem-vindo à minha clínica
              </p>
              <h1 className="text-5xl md:text-6xl font-display text-gray-900 mt-4 leading-tight">
                Transforme sua vida através da psicoterapia
              </h1>
            </div>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Especialista em Psicoterapia Breve Focal com mais de 35 anos de experiência. Oferecendo atendimento presencial em Barra da Tijuca e online para todo o Brasil.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-semibold flex items-center justify-center gap-2 group"
              >
                Agende uma Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+5521993455665"
                className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold"
              >
                Ligar Agora
              </a>
            </div>

            <div className="flex gap-8 text-sm">
              <div>
                <p className="font-bold text-gray-900 text-lg">35+</p>
                <p className="text-gray-600">Anos de experiência</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">100%</p>
                <p className="text-gray-600">Confidencialidade</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-fade-in">
            <img
              src="/manus-storage/maria-consultorio_67b1264e.png"
              alt="Maria da Conceição em seu consultório - Psicóloga"
              className="w-full rounded-lg shadow-lg object-cover h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
