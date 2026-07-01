import { Brain, Smile, Sprout, Heart } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Heart,
      title: 'Integração Emocional-Racional',
      description: 'A terapia integra suas emoções (coração) com sua razão (cérebro), criando uma harmonia que permite decisões mais saudáveis e relacionamentos mais autênticos.',
    },
    {
      icon: Brain,
      title: 'Resolução de Problemas',
      description: 'Ao entender melhor a si mesmo, você pode experimentar uma forma de comunicação mais saudável com o outro e se tornar mais assertivo.',
    },
    {
      icon: Smile,
      title: 'Cuidando da Saúde Mental',
      description: 'Sempre há tempo para a saúde. Cultivar a mente e o corpo para manter o bom humor e melhorar o desempenho nas tarefas diárias.',
    },
    {
      icon: Sprout,
      title: 'Relacionamentos Saudáveis',
      description: 'Desenvolver habilidades para lidar com desafios da vida de forma mais eficaz, identificando soluções construtivas e duradouras.',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-4">
            Como a Psicoterapia Pode te Ajudar
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition-shadow animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {Icon ? (
                  <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-green-600" size={28} />
                  </div>
                ) : null}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-green-50 border-l-4 border-green-600 p-8 rounded-r-lg">
          <p className="text-lg text-gray-800 italic">
            "Acredite em você, esses recursos para adquirir o bem estar podem estar bem a seu alcance."
          </p>
        </div>
      </div>
    </section>
  );
}
