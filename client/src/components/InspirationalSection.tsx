export default function InspirationalSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in order-2 md:order-1">
            <img
              src="/manus-storage/frase-motivacional_76f1d36d.jpg"
              alt="Velhos caminhos não abrem portas novas"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-6">
              Transformação Começa Aqui
            </h2>
            <div className="w-12 h-1 bg-green-600 mb-8"></div>

            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                "Velhos caminhos não abrem portas novas" - essa é a essência do trabalho terapêutico. Muitas vezes, continuamos repetindo os mesmos padrões de comportamento esperando resultados diferentes.
              </p>

              <p className="text-lg leading-relaxed">
                A terapia é o espaço seguro onde você aprende a reconhecer esses padrões e desenvolve novas formas de pensar, sentir e agir. É o momento de abrir portas para possibilidades que você nunca imaginou.
              </p>

              <p className="text-lg leading-relaxed">
                Cada sessão é um passo em direção à sua melhor versão. Você não está sozinho nessa jornada.
              </p>

              <a
                href="https://api.whatsapp.com/send?phone=55%2021993455665&text=Olá%2C%20vim%20pelo%20site!%20Gostaria%20de%20mais%20informações%20sobre%20a%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold mt-6"
              >
                Comece Sua Transformação
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
