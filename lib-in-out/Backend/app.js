let express = require('express')
let cors = require('cors')
let unggah = require('express-fileupload')
const fs = require('fs');
const bodyParser = require('body-parser');
const Tesseract = require('tesseract.js');
const mongoose = require('mongoose');
var app = express()
app.use(cors())
app.use(unggah())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/img', express.static('storage'))
app.use(bodyParser.json());
const uri = "mongodb+srv://dep2k24:.*Zhq6!6B*TuG3.@cluster0.egkhwqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'DEP',
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

app.get('/', (req,res)=>{
    res.send('<h1>ID SCAN</h1>')
})

const enteredSchema = new mongoose.Schema({
  email : String,
  name: String,
  department: String
});
const Entered = mongoose.model('Entered Student', enteredSchema);

// Endpoint to toggle entry
app.post('/toggleEntry', async (req, res) => {
    try {
      const { name, entryNo, department } = req.body;
  
      // Convert entry number to lowercase and append the domain
      const email = entryNo.toLowerCase() + '@iitrpr.ac.in';
        console.log("email : ", email);
      // Check if entry with email already exists
      const existingEntry = await Entered.findOne({ email });
  
      if (existingEntry) {
        // If entry exists, delete it
        await Entered.findOneAndDelete({ email });
        res.send({ message: 'Entry deleted successfully' });
      } else {
        // If entry doesn't exist, create new entry
        const newEntry = new Entered({ email, name, department });
        await newEntry.save();
        res.send({ message: 'Entry created successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: 'Internal Server Error' });
    }
  });
const capturedImage = async (req, res, next) => {
    try {
        const path = './storage/ocr_image.jpeg'     // destination image path
        let imgdata = req.body.img;                 // get img as base64
        const base64Data = imgdata.replace(/^data:([A-Za-z-+/]+);base64,/, '');     // convert base64
        fs.writeFileSync(path, base64Data,  {encoding: 'base64'});                  // write img file

        Tesseract.recognize(
            'http://localhost:5000/img/ocr_image.jpeg',
            'eng',
            { logger: m => console.log(m) }
        )
        .then(({ data: { text } }) => {
            console.log(text)
            return res.send({
                image: imgdata,
                path: path,
                text: text
            });
        })

    } catch (e) {
        next(e);
    }
}
app.post('/capture', capturedImage)

app.post('/upload', (req, res)=>{
    if(req.files){
        console.log(req.files)
        var unggahFile = req.files.file
        var namaFile = unggahFile.name
        unggahFile.mv('./storage/'+namaFile, (err)=>{
            if(err){
                console.log(err)
                res.send(err)
            } else {
                // console.log(namaFile)
                // res.send(namaFile)
                Tesseract.recognize(
                    `./storage/${namaFile}`,
                    'eng',
                    { logger: m => console.log(m) }
                )
                .then(({ data: { text } }) => {
                    console.log(text)
                    return res.send({
                        image: `http://localhost:5000/img/${namaFile}`,
                        path: `http://localhost:5000/img/${namaFile}`,
                        text: text
                    });
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        })
    }
})

app.listen(5000, ()=>{
    console.log('Server running @port 5000!')
})