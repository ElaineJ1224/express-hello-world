const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// 讓 express 可以解析 JSON（處理 LINE webhook 必須）
app.use(express.json());

// 📌 Line Webhook 的 POST 接收端點（這是關鍵）
app.post("/webhook", (req, res) => {
  console.log("✅ 收到 LINE Webhook 資料：", req.body);
  res.sendStatus(200); // LINE 平台要求回傳 200
});

// 🔍 首頁路由（打 https://xxxxx.onrender.com 會顯示畫面）
app.get("/", (req, res) => res.type("html").send(html));

// 🚀 啟動伺服器
const server = app.listen(port, () => {
  console.log(`🚀 App is running on port ${port}`);
});
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

// 🖼️ 首頁畫面用 HTML（含煙火）
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      body {
        font-family: Arial, sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background: white;
      }
      section {
        font-size: 2em;
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <section>Hello from Render!</section>
  </body>
</html>
`;
