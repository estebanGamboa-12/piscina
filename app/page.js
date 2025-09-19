const services = [
  {
    title: 'Reparación integral',
    description:
      'Localizamos fugas, reparamos grietas y renovamos instalaciones hidráulicas para que tu piscina vuelva a lucir como nueva.'
  },
  {
    title: 'Mantenimiento completo',
    description:
      'Planes a medida con limpiezas programadas, equilibrado químico y control preventivo para garantizar agua cristalina todo el año.'
  },
  {
    title: 'Modernización & domótica',
    description:
      'Actualizamos iluminación, sistemas de climatización y automatizamos procesos para que disfrutes de tu piscina sin preocupaciones.'
  }
];

const sellingPoints = [
  {
    label: '20+ años de experiencia local',
    detail: 'Equipo técnico especializado en piscinas residenciales y comunitarias de la Sierra Oeste.'
  },
  {
    label: 'Respuesta urgente',
    detail: 'Atención preferente en San Martín de Valdeiglesias con diagnósticos rápidos y presupuestos claros.'
  },
  {
    label: 'Garantía transparente',
    detail: 'Materiales certificados, mano de obra garantizada y seguimiento post-servicio.'
  }
];

const steps = [
  {
    title: '1. Visita técnica gratuita',
    description:
      'Nos desplazamos a tu piscina, analizamos el estado real y detectamos los puntos críticos.'
  },
  {
    title: '2. Propuesta detallada',
    description:
      'Recibirás un presupuesto desglosado con opciones de reparación, mejora y mantenimiento.'
  },
  {
    title: '3. Ejecución impecable',
    description:
      'Coordinamos al equipo especializado y te mantenemos informado de cada avance hasta la entrega final.'
  }
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content">
          <p className="hero__eyebrow">Servicio premium en San Martín de Valdeiglesias</p>
          <h1 className="hero__title">
            Expertos en reparación y mantenimiento de piscinas con resultados de lujo
          </h1>
          <p className="hero__subtitle">
            Recupera la tranquilidad con un equipo de confianza que cuida cada detalle: desde la detección de
            fugas hasta el mantenimiento integral con tecnología de última generación.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#presupuesto">
              Solicitar presupuesto
            </a>
            <a className="button button--ghost" href="#servicios">
              Ver servicios
            </a>
          </div>
          <div className="hero__badge">
            <span className="hero__badge-title">Aquaval Piscinas</span>
            <span className="hero__badge-text">Cuidamos cada piscina como si fuera nuestra.</span>
          </div>
        </div>
      </section>

      <section className="selling-points" id="servicios">
        <div className="section-heading">
          <p className="section-eyebrow">Por qué nos eligen</p>
          <h2>Calidad artesanal con servicio cercano</h2>
          <p className="section-description">
            Somos vecinos de San Martín de Valdeiglesias y conocemos a fondo las necesidades de las piscinas en
            la zona. Nuestro objetivo es que disfrutes sin preocupaciones.
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
              <div className="service-card__icon" aria-hidden="true">
                <span>💧</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
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
            Recibe informes tras cada visita, controla el estado del agua y confía en un plan diseñado para tu
            piscina. Nos encargamos de todo para que tú solo tengas que disfrutarla.
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
              <option value="reparacion">Reparación integral</option>
              <option value="mantenimiento">Plan de mantenimiento</option>
              <option value="modernizacion">Modernización y domótica</option>
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
          <strong>Aquaval Piscinas</strong>
          <p>San Martín de Valdeiglesias · Sierra Oeste de Madrid</p>
        </div>
        <div className="footer__contact">
          <a href="tel:+34910000000">910 000 000</a>
          <a href="mailto:contacto@aquavalpiscinas.com">contacto@aquavalpiscinas.com</a>
        </div>
      </footer>
    </main>
  );
}
