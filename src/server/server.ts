import express from 'express'

const PORT = 8080;

const app = express();
let corsOptions = {
  origin: "http://localhost:" + PORT
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/static', express.static(__dirname+'/static'));
app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile('index.html', {root: __dirname});
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to quit')
})
