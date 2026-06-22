exports.handler = async function(event) {
    const BOT_TOKEN = process.env.BOT_TOKEN;
    const CHAT_ID = process.env.CHAT_ID;

    const data = JSON.parse(event.body || "{}");
    const message = data.message || "Unknown event";

    await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message
        })
    });

    return {
        statusCode: 200,
        body: JSON.stringify({ ok: true })
    };
};