import './globals.css';

export const metadata = {
  title: 'Aquaval Piscinas | Mantenimiento y Reparación en San Martín de Valdeiglesias',
  description:
    'Expertos en reparación, mantenimiento y modernización de piscinas en San Martín de Valdeiglesias. Servicios integrales, atención cercana y resultados impecables.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
