import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'O que é terapia?',
      answer: 'A terapia é um processo colaborativo entre um terapeuta qualificado e um cliente que visa ajudar o cliente a resolver problemas emocionais, psicológicos ou comportamentais, melhorar relacionamentos e promover o bem-estar geral.',
    },
    {
      question: 'Como saber que preciso fazer terapia?',
      answer: 'Você pode considerar a terapia se estiver enfrentando emoções persistentes como tristeza, ansiedade ou desesperança, dificuldades nos relacionamentos, mudanças significativas no sono ou apetite, problemas de autoestima, trauma não resolvido, ou condições de saúde mental como depressão ou ansiedade. Reconhecer esses sinais e buscar ajuda é um passo importante para cuidar da sua saúde emocional.',
    },
    {
      question: 'Porque digo que vou iniciar a psicoterapia e sempre adio e acabo desistindo?',
      answer: 'A psicologia atualmente influencia e pode melhorar todos os campos e contextos dos indivíduos. No entanto, apesar de ser cada vez mais valorizada, a consulta com um psicólogo continua sendo muito estigmatizada. As pessoas criam infinitas desculpas para não ir ao psicólogo. Muitas vezes essa dificuldade é por achar desconfortável falar de seus problemas para uma pessoa desconhecida, outras por ter muita resistência em se abrir, em mostrar seus sentimentos e também, em algumas situações, por não acreditarem que um trabalho psicoterápico possa realmente ajudar. Mas o importante disso tudo é que você se permita vivenciar essa experiência para realmente poder ter uma opinião mais fidedigna a respeito de seus temores e dúvidas sobre um trabalho terapêutico.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-green-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=55%2021993455665&text=Olá%2C%20vim%20pelo%20site!%20Gostaria%20de%20mais%20informações%20sobre%20a%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            Fale Conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
