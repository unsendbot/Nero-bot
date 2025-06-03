const { colors } = require('../logger/func/colors.js');
module.exports = (color, message) => console.log(colors.hex(color, message));