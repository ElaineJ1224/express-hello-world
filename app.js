const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// ✅ 允許處理 JSON 資料
app.use(express.json());

// ✅ 測試首頁 GET
app.get("/", (req, res) => {
  res.send("🌟 Hello! Render is running.");
});

// ✅ LINE Webhook 接收 POST 請求
app.post("/webhook", (req, res) => {
  console.log("✅ 收到 LINE Webhook 資料：", req.body);
  res.sendStatus(200); // 告訴 LINE 一切正常
});

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});

