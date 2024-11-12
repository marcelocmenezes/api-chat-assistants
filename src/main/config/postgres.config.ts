export type PostgresConfig = {
    connectionStr: string
    max: number
}

export const postgresConfig: PostgresConfig = {
    connectionStr: process.env.DATABASE_URL || 'postgres://postgres:root@localhost:5432/postgres',
    max: 20,
}