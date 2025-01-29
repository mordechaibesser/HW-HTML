const express = require('express');
const app = express();
const port = 3000;

// Middleware to extract numbers and validate them
function validateNumbers(req, res, next) {
    let num1, num2;

    if (req.query.num1 && req.query.num2) {
        num1 = parseFloat(req.query.num1);
        num2 = parseFloat(req.query.num2);
    } else if (req.params.num1 && req.params.num2) {
        num1 = parseFloat(req.params.num1);
        num2 = parseFloat(req.params.num2);
    } else {
        return res.status(400).json({ error: "Missing numbers in request" });
    }

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: "Invalid number provided" });
    }

    req.num1 = num1;
    req.num2 = num2;
    next();
}

// /add endpoint (query or route parameters)
app.get(['/add', '/add/:num1/:num2'], validateNumbers, (req, res) => {
    res.json({ result: req.num1 + req.num2 });
});

// /subtract endpoint (query or route parameters)
app.get(['/subtract', '/subtract/:num1/:num2'], validateNumbers, (req, res) => {
    res.json({ result: req.num1 - req.num2 });
});

// /operation endpoint with operator (+, -, *, /)
app.get(['/operation/:operator', '/operation/:operator/:num1/:num2'], validateNumbers, (req, res) => {
    const { operator } = req.params;
    let result;

    switch (operator) {
        case '+':
            result = req.num1 + req.num2;
            break;
        case '-':
            result = req.num1 - req.num2;
            break;
        case '*':
            result = req.num1 * req.num2;
            break;
        case '/':
            if (req.num2 === 0) {
                return res.status(400).json({ error: "Division by zero is not allowed" });
            }
            result = req.num1 / req.num2;
            break;
        default:
            return res.status(400).json({ error: "Invalid operator. Use +, -, *, or /" });
    }

    res.json({ result });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
