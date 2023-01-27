const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/talk2me(2)", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>
    console.log("connection successfully........")
).catch((err) => {
    console.log(err)
});