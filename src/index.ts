import { app } from './app'


// const { OPEN_AI_API_KEY, ASSISTANT_ID } = process.env

// console.info('OPEN_AI_API_KEY:', OPEN_AI_API_KEY)
app.listen(3000, () => { console.info('express started.') })