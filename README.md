Fake school class system.

# Overview
This is a project of a fake school class system.

# Setup
## .env.local
Please add .env.local file. Sample is in sample.env.local

### Google Client ID and secret
This system is using [ID Platform on Google Cloud Platform](https://cloud.google.com/identity-platform).
Create a project and enable managing users with Google accounts and get OAuth client ID and its secret and set them in .env.local.

# Development
## DB migration commands
This projects is using TypeORM. Migration is needed.

Generates a migration script depnding on the difference of schema in an actual
DB and entities.
```
yarn ts-node node_modules/typeorm/cli.js migration:generate --name CreateAccountTable
```

Do migration.
```
yarn ts-node node_modules/typeorm/cli.js migration:run
```
