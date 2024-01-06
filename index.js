import { WebClient } from '@slack/web-api'
import { config } from 'dotenv'
config()

const client = new WebClient(process.env.SLACKBOT_TOKEN)

async function post(message) {
    try {
        await client.chat.postMessage({
            channel: '#general',
            text: message
        })
    } catch (error) {
        console.log(error)
    }
}

post('Test message')