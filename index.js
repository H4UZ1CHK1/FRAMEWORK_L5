const Framework = require("./framework/Application.js");
const Router = require("./framework/Router.js");

const app = new Framework();
const port = 3000;

app.use((req, res, next) => {
  console.log(`📥 ${req.method} ${req.url}`);
  next();
});

const userRouter = new Router();

userRouter.get("/users", (req, res) => {
  res.json({ id: 1, name: "Алёша", role: "dev" });
});

userRouter.post("/users", (req, res) => {
  res.status(201).json({ message: "Пользователь создан", data: req.body });
});

userRouter.put("/users", (req, res) => {
  res.json({ message: "Данные обновлены", data: req.body });
});

userRouter.patch("/users", (req, res) => {
  res.json({ message: "Данные частично обновлены", data: req.body });
});

userRouter.delete("/users", (req, res) => {
  res.send("Пользователь удалён");
});

app.addRouter(userRouter);

app.listen(port, () => console.log(`🚀 Сервер запущен на http://localhost:${port}`));
