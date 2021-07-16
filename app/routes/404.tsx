import type { LinksFunction, LoaderFunction, MetaFunction } from 'remix';
import { json, useRouteData } from 'remix';
import styles from '../styles/routes/404.css';

export let meta: MetaFunction = () => {
  return {
    title: `DogLog - 404`,
    description: `There's nothing here!`
  };
};

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export let loader: LoaderFunction = () => {
  return json({ notFound: true }, { status: 404 });
};

export default function FourOhFour() {
  const data = useRouteData();
  return (
    <div className="container">
      <h1 className="error-heading">404</h1>
      <p className="error-message">Oops! The page you are looking for doesn't exist.</p>
    </div>
  );
}
