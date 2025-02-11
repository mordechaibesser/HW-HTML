import express from "express";
import session from "express-session";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "supersecretkey", // Change this to a secure random string
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // Session expires in 1 day
  })
);

app.get("/", (req, res) => {
  req.session.visits = (req.session.visits || 0) + 1;
  const name = req.session.name || "Guest";

  res.send(`
    <h1>Welcome, ${name}!</h1>
    <p>You have visited this site ${req.session.visits} times.</p>
    <a href="/name">Set Your Name</a>
    <br>
    <a href="/reset">Reset Session</a>
  `);
});

app.get("/name", (req, res) => {
  res.send(`
    <form action="/name" method="POST">
      <label for="name">Enter your name:</label>
      <input type="text" name="name" required>
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/name", (req, res) => {
  req.session.name = req.body.name;
  res.redirect("/");
});

app.get("/reset", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
