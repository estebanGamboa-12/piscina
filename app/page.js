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

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__inner">
          <div className="hero__content">
            <p className="hero__eyebrow">𝓟𝓲𝓼𝓬𝓲𝓷𝓪 𝓜𝓸𝓲𝓼𝓮𝓼 · Especialistas en piscinas premium</p>
            <h1 className="hero__title">Diseñamos, proyectamos y cuidamos piscinas sin límites</h1>
            <p className="hero__subtitle">
              Convertimos cada espacio acuático en una experiencia segura y elegante: desde nuevas piscinas proyectadas hasta la
              renovación total con tecnología de cloración salina.
            </p>
            <ul className="hero__list">
              <li>Mantenimiento profesional de piscinas residenciales y comunitarias.</li>
              <li>Proyección completa de vasos en hormigón gunitado y acabados a medida.</li>
              <li>Reformas estructurales, impermeabilización avanzada y domótica.</li>
              <li>Fontanería especializada con equipos de sal y automatización inteligente.</li>
            </ul>
            <div className="hero__actions">
              <a className="button button--primary" href="#presupuesto">
                Solicitar presupuesto
              </a>
              <a className="button button--ghost" href="#servicios">
                Ver servicios
              </a>
            </div>
            <div className="hero__badge">
              <span className="hero__badge-title">Equipo certificado</span>
              <span className="hero__badge-text">Más de 250 proyectos entregados con garantía Piscina Moisés.</span>
            </div>
          </div>
          <div className="hero__media">
            <figure className="hero__photo hero__photo--primary">
              <img
                src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1000&q=80"
                alt="Piscina de lujo al atardecer con iluminación ambiental"
              />
            </figure>
            <div className="hero__photo-stack">
              <figure className="hero__photo">
                <img
                  src="https://images.unsplash.com/photo-1531853121101-1b4b07fd4e9e?auto=format&fit=crop&w=700&q=80"
                  alt="Detalle de cascada en piscina moderna"
                />
              </figure>
              <figure className="hero__photo">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=700&q=80"
                  alt="Técnico de piscina realizando comprobaciones de calidad"
                />
              </figure>
            </div>
            <div className="hero__note">
              <span>Residencial · Hotelero · Wellness</span>
              <p>Proyectos personalizados con seguimiento digital desde el diseño hasta el mantenimiento.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="selling-points" id="servicios">
        <div className="section-heading">
          <p className="section-eyebrow">Por qué nos eligen</p>
          <h2>Soluciones integrales y artesanía en cada detalle</h2>
          <p className="section-description">
            Somos una empresa española especializada en piscinas a medida. Coordinamos todas las fases del proyecto para que
            disfrutes sin preocupaciones, con comunicación directa y tiempos de respuesta inmediatos.
          </p>
        </div>
        <div className="selling-points__grid">
          {sellingPoints.map((point) => (
            <article className="card" key={point.label}>
              <h3>{point.label}</h3>
              <p>{point.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services">
        <div className="section-heading">
          <p className="section-eyebrow">Soluciones a medida</p>
          <h2>Servicios especializados para cada necesidad</h2>
        </div>
        <div className="services__grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-card__media">
                <img src={service.image.src} alt={service.image.alt} loading="lazy" />
              </div>
              <div className="service-card__content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="highlights">
        <div className="section-heading">
          <p className="section-eyebrow">Nuestra forma de trabajar</p>
          <h2>Expertos en proyectos complejos y mantenimiento continuo</h2>
          <p className="section-description">
            Integramos arquitectura, ingeniería y mantenimiento en un mismo equipo. Cada piscina recibe un plan único con
            inspecciones programadas, informes digitales y recomendaciones para optimizar recursos.
          </p>
        </div>
        <div className="highlights__grid">
          {highlights.map((highlight) => (
            <article className="highlight-card" key={highlight.title}>
              <h3>{highlight.title}</h3>
              <p>{highlight.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery">
        <div className="section-heading">
          <p className="section-eyebrow">Casos recientes</p>
          <h2>Inspiración visual de nuestros proyectos</h2>
          <p className="section-description">
            Así combinamos estética, ingeniería y mantenimiento profesional en residencias privadas, hoteles y comunidades de
            vecinos en la zona centro.
          </p>
        </div>
        <div className="gallery__grid">
          {projects.map((project) => (
            <figure className="gallery__item" key={project.name}>
              <img src={project.image} alt={project.name} loading="lazy" />
              <figcaption>
                <strong>{project.name}</strong>
                <span>{project.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="cta__text">
          <p className="section-eyebrow">Piscinas impecables todo el año</p>
          <h2>
            Mantenimiento continuo
            <br /> con seguimiento digital
          </h2>
          <p>
            Recibe informes tras cada visita, controla el estado del agua y confía en un plan diseñado para tu piscina. Nos
            encargamos de todo para que tú solo tengas que disfrutarla.
          </p>
        </div>
        <ul className="cta__list">
          <li>
            <strong>Visitas programadas</strong>
            <span>Calendario adaptado a tu uso, con recordatorios automáticos.</span>
          </li>
          <li>
            <strong>Control químico preciso</strong>
            <span>Mediciones periódicas y ajustes exactos para garantizar seguridad.</span>
          </li>
          <li>
            <strong>Asistencia 24/7</strong>
            <span>Disponibilidad para emergencias con técnicos especializados.</span>
          </li>
        </ul>
      </section>

      <section className="process">
        <div className="section-heading">
          <p className="section-eyebrow">Así trabajamos</p>
          <h2>Un proceso claro, eficiente y sin sorpresas</h2>
        </div>
        <div className="process__grid">
          {steps.map((step) => (
            <article className="process-card" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="presupuesto">
        <div className="section-heading">
          <p className="section-eyebrow">Solicita tu propuesta</p>
          <h2>Pide un presupuesto personalizado</h2>
          <p className="section-description">
            Cuéntanos qué necesita tu piscina y te devolveremos una propuesta en menos de 24 horas.
          </p>
        </div>
        <form className="contact__form">
          <div className="form-row">
            <label htmlFor="nombre">Nombre y apellidos</label>
            <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Correo electrónico</label>
            <input id="email" name="email" type="email" placeholder="tucorreo@email.com" required />
          </div>
          <div className="form-row">
            <label htmlFor="telefono">Teléfono</label>
            <input id="telefono" name="telefono" type="tel" placeholder="Tu teléfono" />
          </div>
          <div className="form-row">
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
          </div>
          <div className="form-row">
            <label htmlFor="mensaje">Cuéntanos más detalles</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              placeholder="Describe el estado de tu piscina y qué necesitas resolver"
            />
          </div>
          <button className="button button--primary" type="submit">
            Enviar solicitud
          </button>
        </form>
      </section>

      <footer className="footer">
        <div>
          <strong>Piscina Moisés</strong>
          <p>Servicio integral · Comunidad de Madrid y provincias colindantes</p>
        </div>
        <div className="footer__contact">
          <a href="tel:+34911011222">91 101 12 22</a>
          <a href="mailto:hola@piscinamoises.es">hola@piscinamoises.es</a>
        </div>
      </footer>
    </main>
  );
}
