School Class Management System

# DB
## Migrations
Generates a migration script depnding on the difference of schema in an actual
DB and entities.
```
yarn ts-node node_modules/typeorm/cli.js migration:generate --name CreateAccountTable
```

Do migration.
```
yarn ts-node node_modules/typeorm/cli.js migration:run
```
