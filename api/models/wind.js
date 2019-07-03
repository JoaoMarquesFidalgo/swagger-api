const mongoose = require('mongoose');

const WindSchema = new mongoose.Schema({
    coordinates: [Number], // fe
    efficiency: Number, // fe
    potency: Number, // dataset
});

/*
const WindSchema = new mongoose.Schema({
    coordinates: [Number], // fe
    max_power: Number, // fe
    area: Number, // fe
    wind_speed: Number, // dataset
    air_density: Number, // dataset
    power_killowatts: Number // constant
});
*/
module.exports = mongoose.model("Wind", WindSchema, "wind");
