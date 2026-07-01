export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <img
              src="/images/sobre.jpg"
              alt="Maria da Conceição - Psicóloga"
              className="w-full rounded-lg shadow-lg object-cover h-96"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Sobre Mim
            </h2>
            <div className="w-12 h-1 bg-green-600 mb-8"></div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Olá! Me chamo Maria da Conceição, sou formada há mais de 35 anos e pós-graduada em Psicoterapia Breve Focal.
              </p>

              <p className="text-lg leading-relaxed">
                Permaneci 14 anos na Santa Casa de Misericórdia, trabalhando em atendimento psicoterápico no Serviço de Psiquiatria Dr. Jorge Alberto Costa e Silva, onde desenvolvi uma abordagem compassiva e eficaz no tratamento de diversos transtornos.
              </p>

              <p className="text-lg leading-relaxed">
                Atendo de forma presencial na Barra da Tijuca e online para todo o Brasil, oferecendo um espaço seguro e confidencial para sua jornada de autoconhecimento e transformação pessoal.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Minha Abordagem</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Psicoterapia Breve Focal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Terapia Cognitiva Comportamental (TCC)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 font-bold mt-1">✓</span>
                    <span>Abordagem humanista e empática</span>
                  </li>
                </ul>
              </div>

              <a
                href="#contact"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold mt-6"
              >
                Fale Comigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
