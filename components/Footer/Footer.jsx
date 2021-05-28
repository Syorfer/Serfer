import Link from 'next/link';

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
        <p>Мы в соцсетях</p>
      </div>
    </footer>
  );
};

export default Footer;
