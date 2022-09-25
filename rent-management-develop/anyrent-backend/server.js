const express = require("express");
const cors = require("cors");
const dbConfig = require("./app/config/db.config");
const path = require("path");
const app = express();
const { v4: uuidv4 } = require("uuid");
const expressSwagger = require("express-swagger-generator")(app);
var swaggerOptions = require("./app/config/swagger.config");

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));

var corsOptions = {
    origin: "http://localhost:3000",
};

const db = require("./app/models");
const Role = db.role;
const Item = db.item;
const Category = db.category;
const Order = db.order;
var auth = require("./app/routes/auth.routes");
var item = require("./app/routes/item.routes");
var user = require("./app/routes/user.routes");
var categories = require("./app/routes/category.routes");
var order = require("./app/routes/order.routes");

db.mongoose
    .connect(`${dbConfig.url}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");
    })
    .catch((err) => {
        console.error("Connection error", err);
        process.exit();
    });

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Anyrent Backend application." });
});

// routes
app.use("/api/user", user);
app.use("/api/items", item);
app.use("/api/auth", auth);
app.use("/api/categories", categories);
app.use("/api/orders", order);
// set port, listen for requests
const PORT = process.env.PORT || 8080;

expressSwagger(swaggerOptions);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

function initial() {
    var id = uuidv4();
    new Order({
        id: id,
        itemId: "312",
        ownerId: "123",
        customerId: "123",
        orderTime: new Date().toLocaleString(),
    }).save((err) => {
        if (err) {
            console.log("error", err);
        }
        console.log("added 'admin' to roles collection");
    });
}
