import express from "express";
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs");    
app.get('/logo-linkedin', (req, res) => {
    res.redirect('https://www.linkedin.com/in/rohith-akshay-2895a11a9');
});
app.get('/logo-facebook', (req, res) => {
    res.redirect('https://www.facebook.com/profile.php?id=100009692767548&mibextid=ZbWKwL');
});
app.get('/logo-twitter', (req, res) => {
    res.redirect('https://x.com/RohithAkshay5?s=08');
});
app.get('/logo-instagram', (req, res) => {
    res.redirect('https://instagram.com/rohithakshay631?igshid=MTNiYzNiMzkwZA==');
})
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});