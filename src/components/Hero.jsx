import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[8rem] sm:pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[1.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 gradient-text ">
            Conectando e transformando pessoas.
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          Nossa missão é proporcionar a melhor experiência de compra aos nossos clientes, atendendo suas necessidades com produtos de alta qualidade.
          </p>
          <Button href="#contato" white>
            Entre em contato
          </Button>
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
