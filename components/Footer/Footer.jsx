import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='flex items-center'>
        <h2 className='footer__logo'>Sёrfer</h2>
        <Link href='/'>
          <a className='footer__link mr-60'>О нас</a>
        </Link>
        <Link href='/'>
          <a className='footer__link'>Обратная связь</a>
        </Link>
      </div>
      <div>
        <p className='footer__txt'>Мы в соцсетях</p>
        <div className='footer__icon-wrapper mt-10'>
          <Link href='/'>
            <a className='footer__social-link twitter mr-25'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </Link>
          <Link href='/'>
            <a className='footer__social-link facebook mr-25'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </Link>
          <Link href='/'>
            <a className='footer__social-link telegram mr-25'>
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
