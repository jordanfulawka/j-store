import { Eczar } from 'next/font/google';
import './globals.css';
import './fanta.css';
import Head from './head';
import Link from 'next/link';
import Cart from '@/components/Cart';
import EmailInput from '@/components/EmailInput';

const eczar = Eczar({
  variable: '--font-eczar',
});

export const metadata = {
  title: 'JStore',
  description: 'A super cool store for programmers and productivity fiends!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={eczar.className}>
      <Head />
      <body>
        <div id='portal' />
        <div id='app'>
          <header>
            <div className='header-content'>
              <Link href={'/'}>
                <h1>J.Store</h1>
              </Link>

              <h5 className='mid-text'>-Cool stuff for cool people-</h5>
              <Cart />
            </div>
          </header>
          <main>{children}</main>
          <div className='hr' />
          <footer>
            <div className='email-container'>
              <h5>
                Get a sneak peak at new additions to the store, special offers,
                and so much more.
                <EmailInput />
              </h5>
            </div>
            <div className='links-container'>
              <div>
                <h3>Smoljames</h3>
                <Link href='/'>Hub</Link>
                <Link href='/'>Roadmap</Link>
              </div>
              <div>
                <h3>Store</h3>
                <Link href='/'>Home</Link>
                <Link href='/cart'>Cart</Link>
              </div>
              <div>
                <h3>Support</h3>
                <Link href='/contact'>Contact</Link>
                <Link href='/faq'>FAQ</Link>
              </div>
            </div>
            <div className='socials'>
              <p>
                ©
                <a href='https://google.com' target='_blank'>
                  Jordan{' '}
                </a>
                2025
                <br />
                Build with NextJS
              </p>
              <div className='social-links'>
                <Link href='/' target='_blank'>
                  <i className='fa-brands fa-github'></i>
                </Link>
                <Link href='/' target='_blank'>
                  <i className='fa-brands fa-youtube'></i>
                </Link>
                <Link href='/' target='_blank'>
                  <i className='fa-brands fa-linkedin'></i>
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
