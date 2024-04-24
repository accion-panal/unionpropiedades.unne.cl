import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import aboutMeImg from '../../../assets/img/me/mePhoto.jpg'


const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 my-10 mt-16 mb-10">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center xl:ml-6">
        <h2 className="text-5xl xl:text-4xl text-center xl:text-start  text-primary font-bold uppercase">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className="col-span-2 xl:col-span-1 flex justify-center flex-col">
            <img
              src={aboutMeImg}
              alt="about-img"
              className="object-cover object-center rounded-full shadow-lg h-[280px] w-[280px] mt-10 mx-20 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px] xl:my-10 xl:mx-20 hover:scale-110 duration-300"
            />
          </div>
          <div className="col-span-2 xl:col-span-1 ">
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">                    
            ¿Buscas vender o arrendar tu propiedad de forma rápida y segura? ¡Yo puedo ayudarte!
            Me llamo Hector Mora, soy corredor de propiedades con años de experiencia en el mercado inmobiliario. Ofrezco un servicio personalizado y eficiente para que puedas encontrar al mejor comprador o arrendatario para tu propiedad.
            Si tienes una propiedad que deseas vender o arrendar, no dudes en contactarme. Me encargaré de realizar una evaluación profesional de tu propiedad y de promocionarla en los principales portales inmobiliarios.
            ¡Confía en mi experiencia y en mis resultados! Contáctame para más información y juntos lograremos concretar la venta o arriendo de tu propiedad.
            ¡Déjame ayudarte a lograr tus objetivos inmobiliarios!
              <br />
            </p>
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
              Maisma propiedades
            </p>
            <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
              Directora de Maisma propiedades
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* </Fade>  */}
  </Section>
  );
};

export default AboutComponent;
