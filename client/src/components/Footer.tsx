import { Instagram, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Maria da Conceição</h3>
            <p className="text-sm leading-relaxed">
              Psicóloga especializada em Psicoterapia Breve Focal com mais de 35 anos de experiência em atendimento clínico.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-green-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-green-400 transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-400 transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#specialties" className="hover:text-green-400 transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-400 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-green-400" />
                <a href="tel:+5521993455665" className="hover:text-green-400 transition-colors">
                  (21) 99345-5665
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-green-400" />
                <a href="mailto:psicoconceicao@gmail.com" className="hover:text-green-400 transition-colors">
                  psicoconceicao@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={18} className="text-green-400" />
                <a href="https://instagram.com/psicoconceicao" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                  @psicoconceicao
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>
              © {currentYear} Maria da Conceição. Todos os direitos reservados.
            </p>
            <p className="mt-4 md:mt-0">
              Desenvolvido com cuidado para sua saúde mental
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
