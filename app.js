const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// 先定義首頁要顯示的 HTML
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
      html {
        font-family: sans-serif;
        font-weight: bold;
        font-size: 48px;
        text-align: center;
        margin-top: 15%;
      }
    </style>
  </head>
  <body>
    Hello from Render!
  </body>
</html>
`;

// middleware：解析 JSON body
app.use(express.json());

// GET 首頁
app.get("/", (req, res) => res.type("html").send(html));

// POST webhook 路徑
app.post("/webhook", (req, res) => {
  console.log("✅ 收到 LINE Webhook 資料：", req.body);
  res.sendStatus(200);
});

// 啟動伺服器
const server = app.listen(port, () => {
  console.log(`🚀 App is running on port ${port}`);
});
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
