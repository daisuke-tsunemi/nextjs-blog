import '../public/css/global.css';
import { GoogleAnalytics } from '@next/third-parties/google';

export default function App({ Component, pageProps }) {
  return(
    <>
    <GoogleAnalytics gaId="G-5FSDH47FC1" />
    <Component {...pageProps} />
    </>
  );
}
