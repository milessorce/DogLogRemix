import type { LinksFunction } from 'remix';
import { Meta, Links, Scripts, LiveReload } from 'remix';
import { Outlet } from 'react-router-dom';
import { Footer, NavBar, ScrollToTop } from './components';

import styles from './styles/global.css';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export function headers() {
  return {
    'Cache-Control': 'max-age=604800, public'
  };
}

function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"></meta>
        <link rel="icon" type="image/x-icon" href="https://s3-us-west-1.amazonaws.com/doglog-media/favicon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i" type="text/css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
        <Meta />
        <Links />
      </head>
      <body>
        { children }
        <Scripts />
        { process.env.NODE_ENV === "development" && <LiveReload /> }
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <div id="modal-root" />
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
      <div id="modal-backdrop-root" />
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <div className="error-boundary">
        <h1>Application Error</h1>
        <pre>{ error.message } </pre>
      </div>
    </Document>
  );
}
