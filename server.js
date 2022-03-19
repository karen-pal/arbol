const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");

const router = express.Router();
var cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/',cors(), (req, res) => {
  res.send('Hello World!')
})
router.get('/exec', cors(),(req, res) => {
  res.send('Hello World!')
})

router.post('/exec', cors(),(req, res) => {
    console.log(req);
})

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
