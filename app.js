const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// LINE 測試回傳訊息：允許處理 JSON 資料
app.use(express.json());

// ✅ 根目錄測試 GET 用
app.get("/", (req, res) => {
  res.send("🌟 Hello! Render is running.");
});

// ✅ Webhook 接收 POST
app.post("/webhook", (req, res) => {
  console.log("✅ 收到 LINE Webhook 資料：", req.body);
  res.sendStatus(200); // LINE 要求收到後回傳 HTTP 200
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
