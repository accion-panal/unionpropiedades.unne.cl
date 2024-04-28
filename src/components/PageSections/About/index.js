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
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className="col-span-2 lg:col-span-1 flex justify-center flex-col">
            <img
              src={aboutMeImg}
              alt="about-img"
              className="object-cover object-center rounded-full shadow-lg h-[280px] w-[280px] mt-10 mx-5 md:mx-28 md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px] xl:my-10 xl:mx-20 hover:scale-110 duration-300"
            />
          </div>
          <div className="col-span-2 lg:col-span-1 text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">
            <p>                    
            Somos asesores inmobiliarios con experiencia y conocimientos en materia de compraventa, 
            arriendos, y administración de arriendos. Trabajamos desde una metodología clara y 
            efectiva para lograr cierres en el mejor precio de mercado y en el menor tiempo posible.          
            </p>
            <br/>
            <p>Orientados a un trato cercano y directo con nuestros clientes, siempre manteniendo y 
              proporcionando estrategias y soluciones para sacar adelante cada proceso con éxito.
            </p>
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
            Lorena Garrido, Esteban Maturana Flores y Nury Sanchez
            </p>
            <p className="text-lg xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
            Director/es de Unión Propiedades.
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
