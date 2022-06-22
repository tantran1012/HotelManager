const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require('multer');
const PORT = process.env.PORT || 3000;

const route = require("./routers");

const db = require("./config/db");
db.connect();

require("dotenv").config();

const storage = multer.diskStorage({
	destination: "./public/img/users",
	filename: function (req, file, cb) {
	  cb(null, file.originalname);
	},
  });
  
  let upload = multer({
	storage: storage,
	limits: { fileSize: 1000000 },
	fileFilter: function (req, file, cb) {
	  checkFileType(file, cb);
	},
  }).single("Avatar");
  
  function checkFileType(file, cb) {
	// Allowed ext
	const filetypes = /jpeg|jpg|png|gif/;
	// Check ext
	const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
	// Check mime
	const mimetype = filetypes.test(file.mimetype);
  
	if (mimetype && extname) {
	  return cb(null, true);
	} else {
	  cb("Error: Images Only!");
	}
  }

const session = require("express-session");
const passport = require('./config/passport');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
// view engine setup
app.engine("hbs", hbs({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", [__dirname + "/views", __dirname + "/components"]);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cookieParser())

app.use(session({
	secret: process.env.SESSION_SECRET, resave: true,
	saveUninitialized: true
  }));
  
app.use(passport.initialize());
app.use(passport.session());
  
app.use(function(req,res,next) {
	res.locals.currentUser = req.user;
	next();
});

// routers/index.js
route(app);

app.post("/accounts/saveChanges", (req, res) => {
	upload(req, res, (err) => {
	  //err
	  if (err) {
		res.render("error", {
		  error: err,
		});
		//if no err
	  } else {
		if (req.file == undefined) {
		  res.render("error", {
			error: "Error: No File Selected!",
		  });
		} else {
		  console.log(req.body);
		  return true;
		}
	  }
	});
  });

  module.exports.upload = upload;

app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});

module.exports = app;