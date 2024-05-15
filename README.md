# React + Vite

### Requirements for this project are

-   [Node.js, v16.13.1](https://nodejs.org/fr/blog/release/v16.13.1/)
-   [Postgresql](https://www.postgresql.org/)
-   [Postman](https://www.getpostman.com/)
-   [Git](https://git-scm.com/)
-   [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

### Clone the repository

```bash
git clone https://github.com/HengKevin/rest-attend-api.git
```

### Install dependencies

```bash
yarn install
```

### Run migrations

```bash
npx prisma generate
```

### Update Server's database

```bash
nxp prisma db push
```

### Run the application on dev

```bash
yarn start:dev
```

### To access the Swagger documentation of api localhost
```bash
localhost:3000/api/v1
```

### Run the tests

```bash
yarn test
```

## Local test

### .env
    
```bash
DATABASE_URL=postgresql://{username}:{password}@{host}:{port}/{database_name}?schema=public
```
