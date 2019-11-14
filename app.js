
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const layout = require("./views/layout");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");




const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', userRouter);
app.use('/wiki', wikiRouter);

const models = require('./models');


app.get("/", (req, res) => {
  res.send(layout(""));
});

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })


const PORT = 3000;

const init = async() => {
  // await models.User.sync();
  // await models.Page.sync();
  await models.db.sync({force: true});

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}!`);
  });
}

init();

// app.listen(PORT, () => {
//   console.log(`App listening in port ${PORT}`);
// });
