import '../public/css/global.css';
import useSmoothScroll from '../components/use-smooth-scroll'
import { GoogleAnalytics } from '@next/third-parties/google';

  export default function App({ Component, pageProps }) {
  // useSmoothScroll()
  return(
    <>
    <GoogleAnalytics gaId="G-5FSDH47FC1" />
    <Component {...pageProps} />
    </>
  );
}
