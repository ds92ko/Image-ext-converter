import { button } from '@/styles/forms.css';
import { container, header, logo, symbol } from '@/styles/layout.css';
import { flexBox } from '@/styles/globals.css';
import ThemeButton from '@/components/interaction/theme-button';

const Header = () => {
  return (
    <header className={header}>
      <div className={container}>
        <div className={`${flexBox} between center md`}>
          <h1 className={`${flexBox} center xs`}>
            <i className={`bx bx-transfer-alt ${symbol}`}></i>
            <strong className={logo}>Somverter</strong>
          </h1>
          <nav>
            <ul className={`${flexBox} xs`}>
              <li>
                <button className={`${button} icon`}>
                  <i className="bx bx-world"></i>
                </button>
              </li>
              <li>
                <ThemeButton />
              </li>
              <li>
                <a
                  href="https://github.com/ds92ko/image-ext-converter"
                  target="_blank"
                  className={`${button} icon`}
                >
                  <i className="bx bxl-github"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
