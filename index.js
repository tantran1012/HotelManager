const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");
const methodOverride = require('method-override')
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;

const route = require("./routers");

const db = require("./config/db");
db.connect();

require("dotenv").config();

const app = express();

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, "public")));
// view engine setup
app.engine("hbs", hbs({ 
	extname: ".hbs",
	helpers: {
		ifEquals: (a, b, options) => {
			if (a === b) {
				return options.fn(this);
			  }
			  return options.inverse(this);
		}
	}
}));
app.set("view engine", "hbs");
app.set("views", [__dirname + "/views", __dirname + "/components"]);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cookieParser())

// routers/index.js
route(app);


app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}/`);
});