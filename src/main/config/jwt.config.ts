export type JwtConfig = {
    secret: string,
    expiresIn: string
}
export const jwtConfig:JwtConfig = {
    secret: process.env.JWT_SECRET || 'secret',
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
}