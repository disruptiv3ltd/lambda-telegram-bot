import TelegramBot from "node-telegram-bot-api";

export const handler = async (event) => {
    const telegramChatId = process.env.MESSAGE_CHAT_ID;
    const telegramApiToken = process.env.TELEGRAM_API_TOKEN;

    // Create a new Telegram bot instance
    const bot = new TelegramBot(telegramApiToken);

    // The message you want to send
    const messageText = event.body;

    try {
        // Send the message
        await bot.sendMessage(telegramChatId, messageText);

        const response = {
            statusCode: 200,
            body: "Message sent successfully!",
        };

        return response;
    } catch (error) {
        console.error("Error sending message:", error);
        const response = {
            statusCode: 500,
            body: error,
        };
        return response;
    }
};
