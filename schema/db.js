const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: 'John',
        enum: ['John', 'Roshan', 'Doe']
    },
    phone: {
        type: Number,
        required: true    
    },
    cart: [{
        id: {
            type: String,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    }],
    address: {
        contactName: {
            type: String,
            required: true
        },
        detailAddress: {
            line1: {
                type: String,
                required: true
            },
            line2: {
                type: String,
                required: true
            },
            line3: {
                type: String,
                required: true
            }
        },
        pin: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    }
})

module.exports = mongoose.model('User', userSchema);


// Sample data

// const user = {
//     name: 'Roshan',
//     phone: 8210592314,
//     address: {
//         contactName: 'Sunny',
//         detailAddress: {
//             line1: 'Sector: 2/A',
//             line2: 'Q. No.: 3-018',
//             line3: 'Near Shopping Centre'
//         },
//         pin: 827001,
//         country: 'India'
//     },
//     cart: [
//         {
//             id: 'newId',
//             count: 2
//         }
//     ]
// };