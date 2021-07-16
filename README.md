# DogLog Remix

## Development

Install all dependencies using `npm`:

```sh
$ npm install
```

Once everything is installed, start the app in development mode with the following command:

```sh
$ npm run dev
```

Run postCSS using the following command:
```sh
$ npm run css:watch
```

## Production

To run the app in production mode, you'll need to build it first.

```sh
$ npm run build
$ npm start
```

This will start a single HTTP server process that will serve the app from the files generated in the build step.

## Project Structure

All application source code is found in the `app` directory. This includes your application entry points for both server rendering (see `app/entry-server.ts`) and the browser (see `app/entry-browser.ts`), as well as your root component and routes (see `app/App.tsx` and `app/routes`).

Everything in the `public` directory is served by `express.static`.

All styles live in the `styles` directory. PostCSS will add the output `css` files to the `app` directory. For global styles, add styles to `styles/global.css`. Otherwise, add styles to the route-specific `css` file.
