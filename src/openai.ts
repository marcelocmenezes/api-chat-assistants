import OpenAI from "openai"
import { AssistantTool } from 'openai/resources/beta/assistants'

const { OPENAI_API_KEY, OPENAI_MODEL, ASSISTANT_ID, ASSISTANT_NAME } = process.env

const openai = new OpenAI({
    apiKey: OPENAI_API_KEY,
});

const assistantId = ASSISTANT_ID || "asst_bVMqFlhMe0NrY4BdeBTqUwPR";
export const assistantName = ASSISTANT_NAME || "Teste Sac";
export const modelName = OPENAI_MODEL || "gpt-4o-mini";


export async function createThread() {
    const thread = await openai.beta.threads.create()
    return thread
}

export async function createAssistant(name: string, instructions: string, model: string, tools: AssistantTool[]) {
    const assistant = await openai.beta.assistants.create({
        name,
        instructions,
        model,
        tools
    })

    return assistant
}

export async function getAssistant(assistantId: string) {
    const assistant = await openai.beta.assistants.retrieve(assistantId)
    return assistant
}

export async function updateAssistant(assistantId: string, name: string, instructions: string, model: string, tools: AssistantTool[]) {
    const assistant = await openai.beta.assistants.update(assistantId, {
        name,
        instructions,
        model,
        tools
    })

    return assistant
}

export async function createMessage(threadId: string, message: string) {
    await openai.beta.threads.messages.create(threadId, {
        role: "user",
        content: message,
    });
}

export async function runAssistant(threadId: string, assistantId: string) {
    const run = await openai.beta.threads.runs.create(threadId, {
        assistant_id: assistantId,
    })

    return run
}

export async function getRun(threadId: string, runId: string) {
    // const run = await openai.beta.threads.runs.retrieve(threadId, runId)
    // return run

    return new Promise((resolve, reject) => {
        const interval = setInterval(async () => {
            const retrieveRun = await openai.beta.threads.runs.retrieve(
                threadId,
                runId
            )

            console.log('Run status: ', retrieveRun.status)

            if (retrieveRun.status === 'completed') {
                console.log('Run completed: ', retrieveRun)

                clearInterval(interval)
                resolve(retrieveRun)
            }
        }, 3000)
    })
}

export async function getRunMessages(threadId: string, runId: string) {
    const messageList = await openai.beta.threads.messages.list(threadId)
    const messages = messageList.data
        .filter(
            (message) => message.run_id === runId && message.role === "assistant"
        )
        .pop();
    return messages
}