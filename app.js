function orderProduct(carModel) {
    const telegramUsername = "Dmitry_mee";
    const message = `Привет, Дмитрий! Меня интересует выхлопная система на ${carModel}. Хочу обсудить конфигурацию и стоимость. Мой ник в Instagram: `;
    
    // Формируем ссылку для перехода в Telegram
    const telegramUrl = `https://t.me{telegramUsername}?text=${encodeURIComponent(message)}`;
    
    // Открываем чат в новой вкладке
    window.open(telegramUrl, '_blank');
}
