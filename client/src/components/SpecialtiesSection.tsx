export default function SpecialtiesSection() {
  return (
    <section id="specialties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 mb-4">
            Especialidades
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* TCC */}
          <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-lg transition-shadow animate-slide-up">
            <img
              src="/manus-storage/tcc-heart-brain_cb392751.png"
              alt="Terapia Cognitiva Comportamental - Coração e Cérebro"
              className="w-full rounded-lg mb-6 h-64 object-contain bg-gray-50"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Terapia Cognitiva Comportamental (TCC)
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              O objetivo da TCC é descobrir como o pensar e sentir do paciente podem interferir nos sintomas que ele apresenta. Através dessa abordagem, teremos um olhar mais detalhado de como você se comporta, interage no dia a dia e expressa seus sentimentos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Esses sintomas, muitas vezes, se reproduzem como sensações de depressão, ansiedade e outros. Utilizamos técnicas e tarefas com o objetivo de viabilizar como você poderá adotar comportamentos mais saudáveis e funcionais.
            </p>
          </div>

          {/* Psicoterapia Breve Focal */}
          <div className="bg-white p-10 rounded-lg shadow-sm hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <img
              src="/manus-storage/psicoterapia-breve-focal_ec7aa2f5.jpg"
              alt="Psicoterapia Breve Focal"
              className="w-full rounded-lg mb-6 h-64 object-contain bg-gray-100"
            />
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Psicoterapia Breve Focal
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Uma abordagem focada e eficaz que trabalha com objetivos claros e específicos. Em um primeiro momento, é necessário estabelecer um vínculo seguro para manutenção da aliança de confiança entre terapeuta e paciente.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A partir daí, ao longo do tratamento, utilizamos técnicas e tarefas com o objetivo de viabilizar como você poderá adotar comportamentos mais saudáveis e funcionais, durante as situações de maior estresse.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-green-100 border-l-4 border-green-600 p-8 rounded-r-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Processo Terapêutico</h3>
          <p className="text-gray-800 leading-relaxed">
            Pontuamos como você se comporta, o que lhe faz mal, o que lhe faz sentir-se desorganizado, para então buscarmos em conjunto alternativas mais eficazes, como mudanças de comportamento e padrões de posições mais assertivas que você deverá adotar para atingir a remissão dos sintomas.
          </p>
        </div>
      </div>
    </section>
  );
}
