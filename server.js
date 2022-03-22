const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");

const util = require("util");

const exec = util.promisify(require("child_process").exec);
const router = express.Router();

const makeAST = (text) => "python3 syntax_tree.py "+ text
const toPNG = (filename) => "gs -dSAFER -dEPSCrop -r600 -sDEVICE=pngalpha -o "+ filename + ".png"+ " "+ filename+".ps";


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
    console.log(req.body.element);
    exec(makeAST(req.body.element));
})

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
