import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, MessageCircle, Sparkles, Zap, Shield, Clock } from "lucide-react";

/**
 * Design Philosophy: Luxo Moderno com Gradientes Sutis
 * - Art Deco contemporâneo com glassmorphism
 * - Paleta: Ouro, prata, preto profundo, blush pink
 * - Tipografia: Bodoni Moda (títulos) + Raleway (corpo)
 * - Animações: Transições suaves, hover elegante, scroll parallax
 */

export default function Home() {
  const whatsappLink = "https://wa.me/5511999999999?text=Olá%20Vercel%20Clínica%20de%20Estética%21%20Gostaria%20de%20mais%20informações%20sobre%20Monjaro%20e%20Ozempic.";
  const appDownloadLink = "#download-app";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container flex items-center justify-between py-2 md:py-4 px-3 md:px-4">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <img src="/vercel_logo1.png" alt="Vercel Logo" className="h-10 md:h-16 w-10 md:w-16 drop-shadow-lg flex-shrink-0" />
            <span className="text-sm md:text-2xl font-bold text-foreground truncate">VERCEL - Clínica de Estética</span>
          </div>
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#servicos" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Serviços</a>
            <a href="#sobre" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Sobre</a>
            <a href="#monjaro" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">Monjaro & Ozempic</a>
            <a href="#download-app" className="text-xs lg:text-sm font-medium hover:text-primary transition-colors">App Premium</a>
          </div>
          <Button 
            size="sm"
            className="bg-gradient-gold text-foreground hover:shadow-lg transition-all text-xs md:text-sm"
            onClick={() => window.location.href = whatsappLink}
          >
            <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
            <span className="hidden sm:inline">WhatsApp</span>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern" />
        <div className="relative h-72 sm:h-80 md:h-screen flex items-center">
          <div className="absolute inset-0">
            <img 
              src="/hero-banner.jpg" 
              alt="Tratamento Facial Luxo" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          </div>
          <div className="relative z-10 container px-2 sm:px-3 md:px-4 text-center text-white space-y-1 md:space-y-4">
            <div className="inline-block px-1.5 md:px-4 py-0.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
              <span className="text-xs md:text-sm font-semibold text-accent">Luxo & Tecnologia</span>
            </div>
            
            <h1 className="text-lg sm:text-xl md:text-5xl lg:text-5xl font-bold leading-snug">
              <span className="text-black">Sua Beleza,</span> <span className="text-black">Transformada</span>
            </h1>

            <p className="text-xs sm:text-xs md:text-sm lg:text-base max-w-lg mx-auto leading-tight">
              Tratamentos faciais e corporais de luxo com tecnologia avançada. Descubra a clínica de estética que redefine a excelência.
            </p>
            <div className="flex flex-col sm:flex-row gap-1 md:gap-3 pt-0.5 md:pt-2 justify-center">
              <Button 
                size="sm"
                className="bg-gradient-gold text-foreground hover:shadow-lg transition-all text-sm md:text-base"
                onClick={() => window.location.href = whatsappLink}
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Agende Agora
              </Button>
              <Button 
                size="sm"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-sm md:text-base"
                onClick={() => window.location.href = appDownloadLink}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-6 md:py-14 bg-muted/30">
        <div className="container space-y-3 md:space-y-8 px-3 md:px-4">
          <div className="text-center space-y-0.5 md:space-y-2">
            <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold">Nossos Serviços Premium</h2>
            <p className="text-xs sm:text-xs md:text-sm text-muted-foreground max-w-sm mx-auto">
              Tratamentos exclusivos desenvolvidos para realçar sua beleza natural com tecnologia de ponta
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {[
              {
                icon: Sparkles,
                title: "Limpeza Profunda",
                description: "Tratamento facial completo com tecnologia ultrassônica e produtos premium importados.",
                image: "/treatment-card-1.jpg"
              },
              {
                icon: Zap,
                title: "Radiofrequência",
                description: "Rejuvenescimento facial não invasivo com resultados imediatos e duradouros.",
                image: "/treatment-card-2.jpg"
              },
              {
                icon: Shield,
                title: "Proteção Avançada",
                description: "Protocolos de proteção solar e antienvelhecimento com ativos de última geração.",
                image: "/services-section.jpg"
              }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <Card key={idx} className="glass-effect border-primary/20 overflow-hidden hover:shadow-xl transition-all group">
                  <div className="relative h-40 md:h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-4 md:p-6 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-gold rounded-lg flex-shrink-0">
                        <Icon className="w-4 md:w-5 h-4 md:h-5 text-foreground" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="sobre" className="py-6 md:py-14">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center px-3 md:px-4">
          <div className="space-y-3 md:space-y-6 order-2 md:order-1">
            <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold">Por que Escolher Vercel?</h2>
            <div className="space-y-4 md:space-y-6">
              {[
                { icon: Sparkles, title: "Tecnologia Premium", desc: "Equipamentos de última geração importados" },
                { icon: Shield, title: "Profissionais Certificados", desc: "Equipe altamente qualificada e experiente" },
                { icon: Clock, title: "Agendamento Flexível", desc: "Horários adaptados ao seu dia a dia" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                      <Icon className="w-5 md:w-6 h-5 md:h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base md:text-lg">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative h-64 md:h-96 overflow-hidden rounded-xl md:rounded-2xl order-1 md:order-2">
            <img 
              src="/services-section.jpg" 
              alt="Produtos Premium" 
              className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Monjaro & Ozempic Section */}
      <section id="monjaro" className="py-12 md:py-20 bg-background relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern" />
        <div className="container relative z-10 px-3 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="relative h-64 md:h-96 overflow-hidden rounded-xl md:rounded-2xl order-2 md:order-1">
              <img 
                src="/monjaro-ozempic-banner.jpg" 
                alt="Monjaro e Ozempic" 
                className="w-full h-full object-cover rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl"
              />
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="space-y-4 md:space-y-6 z-10 order-1 md:order-2">
              <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 rounded-full border border-accent/20">
                <span className="text-xs md:text-sm font-semibold text-accent">Tratamentos Avançados</span>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Monjaro & Ozempic
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Tratamentos inovadores para perda de peso e bem-estar corporal. Aplicações seguras e eficazes realizadas por profissionais certificados em ambiente estéril.
              </p>
              
              <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
                <h3 className="text-lg md:text-xl font-semibold">Benefícios:</h3>
                <ul className="space-y-2 md:space-y-3">
                  {[
                    "Redução eficaz de peso corporal",
                    "Melhora do metabolismo e controle de apetite",
                    "Resultados visíveis em 4-6 semanas",
                    "Acompanhamento profissional contínuo",
                    "Aplicação indolor e rápida"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 md:gap-3">
                      <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-primary flex-shrink-0 mt-0.5 md:mt-1" />
                      <span className="text-sm md:text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 md:pt-4 space-y-3">
                <p className="text-xs md:text-sm text-muted-foreground italic">
                  Consulte nossos profissionais para avaliar se o tratamento é adequado para você.
                </p>
                <Button 
                  size="sm"
                  className="bg-gradient-gold text-foreground hover:shadow-lg transition-all w-full text-sm md:text-base"
                  onClick={() => window.location.href = whatsappLink}
                >
                  <MessageCircle className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                  Agende Sua Consulta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Premium Download */}
      <section id="download-app" className="py-12 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 art-deco-pattern opacity-10" />
        <div className="container relative z-10 px-3 md:px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">App Premium Vercel</h2>
              <p className="text-base md:text-lg text-muted-foreground">
                Acesso exclusivo a agendamentos, histórico de tratamentos e ofertas especiais na palma da sua mão
              </p>
              <p className="text-sm md:text-base font-semibold text-primary">
                Ao baixar o app tenha uma sessão grátis! 🎁
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 py-6 md:py-8">
              {[
                "Agendamento Online 24/7",
                "Histórico de Tratamentos",
                "Ofertas Exclusivas",
                "Notificações Personalizadas"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 md:gap-3 justify-center">
                  <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-xs md:text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-4 justify-center pt-2 md:pt-4">
            
             {/* <Button 
                size="sm"
                className="bg-gradient-gold text-foreground hover:shadow-lg transition-all text-xs md:text-base"
              >
                <Download className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                Download iOS
              </Button> */}
              
              <Button 
                size="sm"
                className="bg-gradient-gold text-foreground hover:shadow-lg transition-all text-xs md:text-base"
              >
                <Download className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                Download Android
              </Button>
            </div>

            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg border border-primary/40 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300 animate-pulse">
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-center gap-2 justify-center flex-wrap">
                  <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-primary animate-bounce flex-shrink-0" />
                  <h3 className="text-base md:text-lg font-bold bg-gradient-gold bg-clip-text text-transparent">Descubra Mais no Nosso App!</h3>
                  <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-primary animate-bounce flex-shrink-0" />
                </div>
                <p className="text-sm md:text-base font-semibold text-foreground leading-relaxed text-center">
                  Fique por dentro de mais informações completas e procedimentos detalhados através do nosso App Premium. 
                </p>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed text-center">
                  Acesse guias de pré e pós-tratamento, dicas exclusivas de cuidados, resultados de outros pacientes e tenha uma experiência personalizada em sua jornada de beleza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="container space-y-8 md:space-y-12 px-3 md:px-4">
          <div className="text-center space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Monjaro vs Ozempic</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça as diferenças e escolha o tratamento mais adequado para você
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            <Card className="glass-effect border-primary/20 p-4 md:p-8 hover:shadow-xl transition-all">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 md:p-3 bg-gradient-gold rounded-lg flex-shrink-0">
                    <Zap className="w-5 md:w-6 h-5 md:h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">Monjaro</h3>
                </div>
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <p><strong>Princípio Ativo:</strong> Tirzepatida</p>
                  <p><strong>Frequência:</strong> Aplicação semanal</p>
                  <p><strong>Indicação:</strong> Diabetes tipo 2 e perda de peso</p>
                  <p><strong>Resultado:</strong> Mais rápido (2-4 semanas)</p>
                  <p><strong>Efeito:</strong> Dupla ação no metabolismo</p>
                </div>
              </div>
            </Card>

            <Card className="glass-effect border-primary/20 p-4 md:p-8 hover:shadow-xl transition-all">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 md:p-3 bg-gradient-gold rounded-lg flex-shrink-0">
                    <Shield className="w-5 md:w-6 h-5 md:h-6 text-foreground" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">Ozempic</h3>
                </div>
                <div className="space-y-2 md:space-y-3 text-xs md:text-sm">
                  <p><strong>Princípio Ativo:</strong> Semaglutida</p>
                  <p><strong>Frequência:</strong> Aplicação semanal</p>
                  <p><strong>Indicação:</strong> Diabetes tipo 2 e perda de peso</p>
                  <p><strong>Resultado:</strong> Progressivo (4-6 semanas)</p>
                  <p><strong>Efeito:</strong> Controle de apetite eficaz</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-20 bg-foreground text-background">
        <div className="container text-center space-y-6 md:space-y-8 px-3 md:px-4">
          
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 py-4">
            <img src="/google.png" alt="Google Site Seguro" className="h-16 md:h-24 w-auto object-contain" />
            <img src="/Selo-RA1000.png" alt="Reclame Aqui" className="h-24 md:h-40 w-auto object-contain" />
            <img src="/Site-Seguro.png" alt="Site Seguro" className="h-11 md:h-15 w-auto object-contain" />
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">Pronto para Transformar?</h2>
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto">
              Entre em contato conosco via WhatsApp e agende sua primeira consulta. Nossas especialistas estão prontas para ajudar.
            </p>
          </div>
          <Button 
            size="sm"
            className="bg-background text-foreground hover:bg-background/90 text-sm md:text-base"
            onClick={() => window.location.href = whatsappLink}
          >
            <MessageCircle className="w-4 md:w-5 h-4 md:h-5 mr-2" />
            Fale Conosco no WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 bg-muted/50 border-t border-border">
        <div className="container px-3 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pb-6 md:pb-8 text-center">
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 justify-center">
                <img src="/vercel_logo1.png" alt="Vercel Logo" className="h-6 md:h-8 w-6 md:w-8" />
                <span className="font-bold text-sm md:text-base">VERCEL - Clínica de Estética </span>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">Clínica de Estética Premium</p>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-semibold text-sm md:text-base">Menu</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#download-app" className="hover:text-primary transition-colors">App</a></li>
              </ul>
            </div>
            <div className="space-y-3 md:space-y-4">
              <h4 className="font-semibold text-sm md:text-base">Contato</h4>
              <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted-foreground">
                <li><a href={whatsappLink} className="hover:text-primary transition-colors">WhatsApp -endereço pelo direct</a></li>
                <li><a href="tel:+5511999999999" className="hover:text-primary transition-colors"></a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-4 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p>&copy; 2025 Vercel Clínica de Estética. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
