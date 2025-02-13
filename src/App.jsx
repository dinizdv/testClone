import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Form from "./components/design/Form";

const App = () => {
// Função para observar os componentes e adicionar a classe 'visible'
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.fade-in'); // Seleciona todos os elementos com a classe 'fade-in'

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Adiciona a classe 'visible' quando o componente entra na tela
        observer.unobserve(entry.target); // Para de observar o elemento após a animação ser disparada
      }
    });
  }, {
    threshold: 0.1, // Quando 10% do componente estiver visível
  });

  elements.forEach(element => {
    observer.observe(element); // Começa a observar o componente
  });
};

// Chama a função para iniciar a animação ao carregar a página
window.addEventListener('load', animateOnScroll);

// Também pode chamar no evento de scroll ou resize, se necessário
window.addEventListener('scroll', animateOnScroll);


  return (
    <>
    <>
    <Header />

      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        {/* Header */}
        <div className="fade-in">
        </div>

        {/* Hero */}
          <Hero />

        {/* Benefits */}
        <div className="fade-in">
          <Benefits />
        </div>

        {/* Form */}
        <div className="fade-in">
          <Form />
        </div>

        {/* Roadmap */}
        <div className="fade-in">
          <Roadmap />
        </div>

        {/* Footer */}
        <div className="fade-in">
          <Footer />
        </div>
      </div>

      {/* ButtonGradient */}
      <div className="fade-in">
        <ButtonGradient />
      </div>
    </>
    </>
  );
};

export default App;
