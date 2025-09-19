'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: 'Mantenimiento de piscinas',
    description:
      'Planes estacionales y anuales con limpieza, control químico y seguimiento digital para comunidades y residencias.',
    image: {
      src: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&w=800&q=80',
      alt: 'Técnico revisando el estado del agua en una piscina residencial'
    }
  },
  {
    title: 'Piscinas proyectadas completas',
    description:
      'Diseñamos y ejecutamos vasos gunitados, instalaciones hidráulicas y acabados decorativos llave en mano.',
    image: {
      src: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?auto=format&fit=crop&w=800&q=80',
      alt: 'Piscina de diseño con borde infinito y vistas abiertas'
    }
  },
  {
    title: 'Reformas e impermeabilización',
    description:
      'Rehabilitamos estructuras, renovamos coronaciones y aplicamos sistemas de impermeabilización certificados.',
    image: {
      src: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=800&q=80',
      alt: 'Renovación de revestimientos en una piscina familiar'
    }
  },
  {
    title: 'Fontanería y equipos de sal',
    description:
      'Instalamos cloración salina, bombas de calor y automatizaciones que optimizan el consumo y el confort.',
    image: {
      src: 'https://images.unsplash.com/photo-1530543787849-128d94430c6b?auto=format&fit=crop&w=800&q=80',
      alt: 'Cuarto técnico con equipamiento de cloración salina'
    }
  }
];

const projects = [
  {
    name: 'Residencial Valdeiglesias',
    detail: 'Piscina climatizada con cloración salina y domótica integrada.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Hotel Sierra Azul',
    detail: 'Lámina de agua infinita con iluminación RGB programable.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Urbanización Montealto',
    detail: 'Reforma integral y automatización de control químico.',
    image: 'https://images.unsplash.com/photo-1507502707541-f369a3b18502?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Vivienda unifamiliar Los Arroyos',
    detail: 'Microcemento, playa húmeda y jacuzzi integrado.',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Comunidad Jardines del Tajo',
    detail: 'Plan de mantenimiento integral con reportes digitales.',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1000&q=80'
  },
  {
    name: 'Club Náutico San Martín',
    detail: 'Renovación del vaso y sistemas de filtración de alto rendimiento.',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80'
  }
];

const sellingPoints = [
  {
    label: 'Experiencia comprobada',
    detail: 'Más de 15 años construyendo y cuidando piscinas en Madrid, Toledo y Ávila.'
  },
  {
    label: 'Respuesta en 24 horas',
    detail: 'Diagnóstico técnico y propuesta clara para que tomes decisiones sin sorpresas.'
  },
  {
    label: 'Garantía Piscina Moisés',
    detail: 'Materiales homologados, personal propio y servicio posventa con seguimiento continuo.'
  }
];

const steps = [
  {
    title: '1. Estudio y asesoría personalizada',
    description:
      'Visitamos tu piscina o parcela, analizamos necesidades y definimos el plan de actuación ideal.'
  },
  {
    title: '2. Planificación transparente',
    description:
      'Entregamos presupuesto desglosado, calendario de trabajos y propuestas de mejora energética.'
  },
  {
    title: '3. Ejecución certificada',
    description:
      'Coordinamos a nuestro equipo especializado y te mantenemos informado en cada hito hasta la entrega final.'
  }
];

const highlights = [
  {
    title: 'Cobertura integral',
    description: 'Servicio oficial en Comunidad de Madrid y provincias limítrofes con soporte de emergencia.'
  },
  {
    title: 'Tecnología y eficiencia',
    description: 'Equipos de sal, automatización y soluciones de bajo consumo para un agua perfecta todo el año.'
  },
  {
    title: 'Acabados a medida',
    description: 'Revestimientos vítreos, microcemento, iluminación LED y domótica integrada.'
  }
];

const sectionFade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const heroContainer = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const heroContent = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const listVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.1 }
  }
};

const fadeListItem = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const mediaReveal = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
};

const cardReveal = {
  hidden: { opacity: 0, y: 26 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay: index * 0.08 }
  })
};

const contactReveal = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', delayChildren: 0.1, staggerChildren: 0.08 }
  }
};

const inViewConfig = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.2 }
};

export default function HomePage() {
  return (
    <main className="page">
      <motion.section className="hero" initial="hidden" animate="visible" variants={sectionFade}>
        <div className="hero__overlay" />
        <div className="hero__light hero__light--one" aria-hidden />
        <div className="hero__light hero__light--two" aria-hidden />
        <motion.div className="hero__inner" variants={heroContainer}>
          <motion.div className="hero__content" variants={heroContent}>
            <motion.p className="hero__eyebrow" variants={fadeUp}>
              𝓟𝓲𝓼𝓬𝓲𝓷𝓪 𝓜𝓸𝓲𝓼𝓮𝓼 · Especialistas en piscinas premium
            </motion.p>
            <motion.h1 className="hero__title" variants={fadeUp}>
              Diseñamos, proyectamos y cuidamos piscinas sin límites
            </motion.h1>
            <motion.p className="hero__subtitle" variants={fadeUp}>
              Convertimos cada espacio acuático en una experiencia segura y elegante: desde nuevas piscinas proyectadas hasta la
              renovación total con tecnología de cloración salina.
            </motion.p>
            <motion.ul className="hero__list" variants={listVariants}>
              {[
                'Mantenimiento profesional de piscinas residenciales y comunitarias.',
                'Proyección completa de vasos en hormigón gunitado y acabados a medida.',
                'Reformas estructurales, impermeabilización avanzada y domótica.',
                'Fontanería especializada con equipos de sal y automatización inteligente.'
              ].map((item) => (
                <motion.li key={item} variants={fadeListItem}>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div className="hero__actions" variants={fadeUp}>
              <motion.a
                className="button button--primary"
                href="#presupuesto"
                whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(15, 176, 206, 0.55)' }}
                whileTap={{ scale: 0.96 }}
              >
                Solicitar presupuesto
              </motion.a>
              <motion.a
                className="button button--ghost"
                href="#servicios"
                whileHover={{ y: -4, borderColor: 'rgba(255, 255, 255, 0.65)' }}
                whileTap={{ scale: 0.96 }}
              >
                Ver servicios
              </motion.a>
            </motion.div>
            <motion.div className="hero__badge" variants={fadeUp}>
              <span className="hero__badge-title">Equipo certificado</span>
              <span className="hero__badge-text">Más de 250 proyectos entregados con garantía Piscina Moisés.</span>
            </motion.div>
          </motion.div>
          <motion.div className="hero__media" variants={heroContent}>
            <motion.figure
              className="hero__photo hero__photo--primary"
              variants={mediaReveal}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1000&q=80"
                alt="Piscina de lujo al atardecer con iluminación ambiental"
                loading="lazy"
              />
            </motion.figure>
            <motion.div className="hero__photo-stack" variants={mediaReveal}>
              <motion.figure className="hero__photo" variants={mediaReveal} whileHover={{ y: -8, scale: 1.02 }}>
                <motion.img
                  src="https://images.unsplash.com/photo-1531853121101-1b4b07fd4e9e?auto=format&fit=crop&w=700&q=80"
                  alt="Detalle de cascada en piscina moderna"
                  loading="lazy"
                />
              </motion.figure>
              <motion.figure className="hero__photo" variants={mediaReveal} whileHover={{ y: -8, scale: 1.02 }}>
                <motion.img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80"
                  alt="Técnico de piscina realizando comprobaciones de calidad"
                  loading="lazy"
                />
              </motion.figure>
            </motion.div>
            <motion.div className="hero__note" variants={fadeUp}>
              <span>Residencial · Hotelero · Wellness</span>
              <p>Proyectos personalizados con seguimiento digital desde el diseño hasta el mantenimiento.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="selling-points" id="servicios" {...inViewConfig} variants={sectionFade}>
        <motion.div className="section-heading" variants={fadeUp}>
          <p className="section-eyebrow">Por qué nos eligen</p>
          <h2>Soluciones integrales y artesanía en cada detalle</h2>
          <p className="section-description">
            Somos una empresa española especializada en piscinas a medida. Coordinamos todas las fases del proyecto para que
            disfrutes sin preocupaciones, con comunicación directa y tiempos de respuesta inmediatos.
          </p>
        </motion.div>
        <div className="selling-points__grid">
          {sellingPoints.map((point, index) => (
            <motion.article
              className="card"
              key={point.label}
              variants={cardReveal}
              custom={index}
              whileHover={{ y: -10, boxShadow: '0 26px 70px rgba(0, 0, 0, 0.35)' }}
            >
              <h3>{point.label}</h3>
              <p>{point.detail}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="services" {...inViewConfig} variants={sectionFade}>
        <motion.div className="section-heading" variants={fadeUp}>
          <p className="section-eyebrow">Soluciones a medida</p>
          <h2>Servicios especializados para cada necesidad</h2>
        </motion.div>
        <div className="services__grid">
          {services.map((service, index) => (
            <motion.article
              className="service-card"
              key={service.title}
              variants={cardReveal}
              custom={index}
              whileHover={{ y: -12, scale: 1.01 }}
            >
              <div className="service-card__media">
                <motion.img src={service.image.src} alt={service.image.alt} loading="lazy" />
              </div>
              <div className="service-card__content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="highlights" {...inViewConfig} variants={sectionFade}>
        <motion.div className="section-heading" variants={fadeUp}>
          <p className="section-eyebrow">Nuestra forma de trabajar</p>
          <h2>Expertos en proyectos complejos y mantenimiento continuo</h2>
          <p className="section-description">
            Integramos arquitectura, ingeniería y mantenimiento en un mismo equipo. Cada piscina recibe un plan único con
            inspecciones programadas, informes digitales y recomendaciones para optimizar recursos.
          </p>
        </motion.div>
        <div className="highlights__grid">
          {highlights.map((highlight, index) => (
            <motion.article className="highlight-card" key={highlight.title} variants={cardReveal} custom={index}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="gallery" {...inViewConfig} variants={sectionFade}>
        <motion.div className="section-heading" variants={fadeUp}>
          <p className="section-eyebrow">Casos recientes</p>
          <h2>Inspiración visual de nuestros proyectos</h2>
          <p className="section-description">
            Así combinamos estética, ingeniería y mantenimiento profesional en residencias privadas, hoteles y comunidades de
            vecinos en la zona centro.
          </p>
        </motion.div>
        <div className="gallery__grid">
          {projects.map((project, index) => (
            <motion.figure
              className="gallery__item"
              key={project.name}
              variants={cardReveal}
              custom={index}
              whileHover={{ y: -10, scale: 1.01 }}
            >
              <motion.img src={project.image} alt={project.name} loading="lazy" />
              <figcaption>
                <strong>{project.name}</strong>
                <span>{project.detail}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </motion.section>

      <motion.section className="cta" {...inViewConfig} variants={sectionFade}>
        <motion.div className="cta__text" variants={fadeUp}>
          <p className="section-eyebrow">Piscinas impecables todo el año</p>
          <h2>
            Mantenimiento continuo
            <br /> con seguimiento digital
          </h2>
          <p>
            Recibe informes tras cada visita, controla el estado del agua y confía en un plan diseñado para tu piscina. Nos
            encargamos de todo para que tú solo tengas que disfrutarla.
          </p>
        </motion.div>
        <motion.ul className="cta__list" variants={fadeUp}>
          {[
            {
              title: 'Visitas programadas',
              detail: 'Calendario adaptado a tu uso, con recordatorios automáticos.'
            },
            {
              title: 'Control químico preciso',
              detail: 'Mediciones periódicas y ajustes exactos para garantizar seguridad.'
            },
            {
              title: 'Asistencia 24/7',
              detail: 'Disponibilidad para emergencias con técnicos especializados.'
            }
          ].map((item, index) => (
            <motion.li key={item.title} variants={cardReveal} custom={index}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      <motion.section className="process" {...inViewConfig} variants={sectionFade}>
        <motion.div className="section-heading" variants={fadeUp}>
          <p className="section-eyebrow">Así trabajamos</p>
          <h2>Un proceso claro, eficiente y sin sorpresas</h2>
        </motion.div>
        <div className="process__grid">
          {steps.map((step, index) => (
            <motion.article className="process-card" key={step.title} variants={cardReveal} custom={index}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section className="contact" id="presupuesto" {...inViewConfig} variants={sectionFade}>
        <motion.div className="section-heading" variants={fadeUp}>
          <p className="section-eyebrow">Solicita tu propuesta</p>
          <h2>Pide un presupuesto personalizado</h2>
          <p className="section-description">
            Cuéntanos qué necesita tu piscina y te devolveremos una propuesta en menos de 24 horas.
          </p>
        </motion.div>
        <motion.form className="contact__form" variants={contactReveal}>
          <motion.div className="form-row" variants={fadeUp}>
            <label htmlFor="nombre">Nombre y apellidos</label>
            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
          </motion.div>
          <motion.div className="form-row" variants={fadeUp}>
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" placeholder="tucorreo@email.com" required />
          </motion.div>
          <motion.div className="form-row" variants={fadeUp}>
            <label htmlFor="telefono">Teléfono</label>
            <input id="telefono" name="telefono" type="tel" placeholder="Tu teléfono" />
          </motion.div>
          <motion.div className="form-row" variants={fadeUp}>
            <label htmlFor="servicio">Servicio de interés</label>
            <select id="servicio" name="servicio" defaultValue="">
              <option value="" disabled>
                Selecciona una opción
              </option>
              <option value="mantenimiento">Mantenimiento de piscinas</option>
              <option value="proyeccion">Piscina proyectada nueva</option>
              <option value="reforma">Reforma o impermeabilización</option>
              <option value="fontaneria">Fontanería y cloración salina</option>
              <option value="otro">Otros trabajos</option>
            </select>
          </motion.div>
          <motion.div className="form-row" variants={fadeUp}>
            <label htmlFor="mensaje">Cuéntanos más detalles</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              placeholder="Describe el estado de tu piscina y qué necesitas resolver"
            />
          </motion.div>
          <motion.button className="button button--primary" type="submit" variants={fadeUp} whileHover={{ y: -3 }} whileTap={{ scale: 0.97 }}>
            Enviar solicitud
          </motion.button>
        </motion.form>
      </motion.section>

      <motion.footer className="footer" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
        <div>
          <strong>Piscina Moisés</strong>
          <p>Servicio integral · Comunidad de Madrid y provincias colindantes</p>
        </div>
        <div className="footer__contact">
          <a href="tel:+34911011222">91 101 12 22</a>
          <a href="mailto:hola@piscinamoises.es">hola@piscinamoises.es</a>
        </div>
      </motion.footer>
    </main>
  );
}
