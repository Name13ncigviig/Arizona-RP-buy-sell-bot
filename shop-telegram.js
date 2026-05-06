const TelegramBot = require('node-telegram-bot-api');

// Настройки
const TOKEN = 'ВАШ_TELEGRAM_BOT_TOKEN';
const CHAT_ID = 'ВАШ_CHAT_ID';
const bot = new TelegramBot(TOKEN, { polling: false });

// Функция для отправки уведомления о продаже
async function sendSaleNotification(playerName, itemName, quantity, price, totalPrice) {
    const message = `
📤 **ПРОДАЖА В ЛАВКЕ**
👤 Игрок: ${playerName}
📦 Товар: ${itemName}
🔢 Количество: ${quantity}
💰 Цена за шт: $${price}
💵 Итого: $${totalPrice}
⏰ Время: ${new Date().toLocaleString('ru-RU')}
    `;
    
    try {
        await bot.sendMessage(CHAT_ID, message, { parse_mode: 'Markdown' });
    } catch (error) {
        console.error('Ошибка отправки:', error);
    }
}

// Функция для отправки уведомления о покупке
async function sendPurchaseNotification(playerName, itemName, quantity, price, totalPrice) {
    const message = `
📥 **ПОКУПКА В ЛАВКЕ**
👤 Игрок: ${playerName}
📦 Товар: ${itemName}
🔢 Количество: ${quantity}
💰 Цена за шт: $${price}
💵 Итого: $${totalPrice}
⏰ Время: ${new Date().toLocaleString('ru-RU')}
    `;
    
    try {
        await bot.sendMessage(CHAT_ID, message, { parse_mode: 'Markdown' });
    } catch (error) {
        console.error('Ошибка отправки:', error);
    }
}

// Экспортируем функции
module.exports = {
    sendSaleNotification,
    sendPurchaseNotification
};
