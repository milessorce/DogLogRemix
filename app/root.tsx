import type { LinksFunction, MetaFunction } from 'remix';
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
        <link rel="canonical" href="https://www.doglogapp.com/"></link>
        <meta name="keywords" content="dog, dogs, pet, pets, app, application, petcare, mobile, track, tracking, tracker, activities, blog, doglog, log, doge, fetch, rover, walk, walking, walker, pee, poop, vet, happy, healthy, safe, pup, puppy, schedule, simple, reminder, reminders, treat, treats, medicine, meal"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:title" content="DogLog: Track and coordinate your pet's activities and health"></meta>
        <meta property="og:description" content="Organize your pet's life and be the best dog owner you can be. Track medicine, walks, puppy training, and more while sharing photos and reminders for your pets. Share records with family members and vets. Great for puppies and senior dogs."></meta>
        <link rel="icon" type="image/x-icon" href="https://res.cloudinary.com/dyrrwpemp/image/upload/v1626810769/DogLog/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&display=swap" type="text/css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous"></link>
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-863XK73Y70"></script>
        <script
          dangerouslySetInnerHTML={{ __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-863XK73Y70');`
          }}
        /> */}
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
