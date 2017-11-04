var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var Item = new Schema({
    name: {
        type: String
    },
},{
    collection: 'users'
});

module.exports = mongoose.model('Item', Item);
