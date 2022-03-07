import app from './app';
const port = 3000;

app.listen(port, () => {
    console.log(`Calculator listening on http://localhost:${port}`);
});