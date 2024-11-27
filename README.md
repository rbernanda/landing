# E-Store

Simple landing page for e-commerce.

# Project Setup

This project is built using [Next.js 15](https://nextjs.org/)

## Setup

### Dependencies

Use [yarn](https://yarnpkg.com/) to install dependencies, so make
sure [yarn is installed](https://yarnpkg.com/getting-started/install):

```sh
corepack enable
```

To run the app locally, make sure the project's local dependencies are
installed:

```sh
yarn install
```

### Environment Variables

Create the `.env` file from `.env.example`.

```sh
cp -i .env.example .env
```

Required:

- `NEXT_PUBLIC_BASE_API_URL`: Base URL for the API

### Development

Finally, develop the app while running the development server:

```sh
yarn dev
```

Open <http://localhost:3000> and it's ready!

### Creating an optimized production build

To ensure your application is ready for production, generate an optimized build. The output will be placed in the .next directory located in the root of the project.

To create the production build, run:

```sh
yarn build
```

After building the project, you can serve the app with:

```sh
yarn start
```
