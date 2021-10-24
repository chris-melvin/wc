import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import { useEffect } from 'react';
import Emoji from './emoji';

export default function Footer() {
  const useScript = url => {
    useEffect(() => {
      const script = document.createElement('script');
  
      script.src = url;
      script.async = true;
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };

  useScript("https://c6.patreon.com/becomePatronButton.bundle.js")
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Writing ideas made with the <Emoji symbol="♥" label="heart" />
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a href="https://www.patreon.com/bePatron?u=5330482" data-patreon-widget-type="become-patron-button">Become a Patron!</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

