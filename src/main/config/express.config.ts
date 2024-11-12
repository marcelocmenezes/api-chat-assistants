export const expressConfig = {
    port: process.env.PORT || 3000,
    bodyParser: {
        limit: '50mb'
    }
}