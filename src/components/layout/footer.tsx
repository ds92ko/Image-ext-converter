import { container, footer } from '@/styles/layout.css';

const Footer = () => {
  return (
    <footer className={footer}>
      <div className={container}>
        <p>&copy; Somverter. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
