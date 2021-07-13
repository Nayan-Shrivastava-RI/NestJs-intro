import { SqliteConnectionOptions } from "typeorm/driver/sqlite/SqliteConnectionOptions";
import { User2 } from "./src/users2/user2.entity";

const config : SqliteConnectionOptions = {
    type: "sqlite",
    database: "db",
    entities: [
        "dist/src/**/*.entity.js",
        User2
    ],
    synchronize: false,
    migrations: [
        'dist/src/db/migrations/*.js'
    ],
    cli : {
        migrationsDir: 'src/db/migrations'
    }
}

export default config;