const User = require('../schema/db')

exports.user = async (req, res) => {
    const user = new User(req.body)
    // saving in db
    await user.save((err, user) => {
        if(err) return res.status(500).json(err)
        return res.status(201).json({
            status: "success",
            user
        })
    })
}