const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// 允許處理 JSON 資料（LINE Webhook 需要）
app.use(express.json());

// ✅ 測試根目錄 GET 用
app.get("/", (req, res) => {
  res.send("🌟 Hello! Render is running.");
});

// ✅ 測試 webhook GET（給你用來測網址是否有開通）
app.get("/webhook", (req, res) => {
  res.send("✅ Webhook GET 路由有開起來");
});

// ✅ LINE Webhook 的 POST 接收點（LINE 要求的）
app.post("/webhook", (req, res) => {
  console.log("✅ 收到 LINE Webhook 資料：", req.body);
  res.sendStatus(200); // LINE 平台要求回傳 200
});

// ✅ 啟動 Server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
