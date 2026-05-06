const shopTelegram = require('./shop-telegram');

// При продаже товара
on('shop:sell', (event) => {
    const { playerName, itemName, quantity, price } = event;
    const totalPrice = quantity * price;
    
    shopTelegram.sendSaleNotification(playerName, itemName, quantity, price, totalPrice);
    console.log(`[SHOP] ${playerName} продал ${quantity}x ${itemName}`);
});

// При покупке товара
on('shop:buy', (event) => {
    const { playerName, itemName, quantity, price } = event;
    const totalPrice = quantity * price;
    
    shopTelegram.sendPurchaseNotification(playerName, itemName, quantity, price, totalPrice);
    console.log(`[SHOP] ${playerName} купил ${quantity}x ${itemName}`);
});
