const mongoose = require('mongoose')
const uri = process.env.MONGO_URI
try{
    const connection = mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    if(connection) console.log('DB Connected!!!')
}
catch(e) {
    console.log(e.message)
}