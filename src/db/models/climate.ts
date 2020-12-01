import { Schema, model } from "mongoose"

const Climate = new Schema({
    date: {
        type: String,
        required: true
    },

    climate: {
        temperature: [{
            type: Number
        }],

        humidity: [{
            type: Number
        }],

        pressure: [{
            type: Number
        }],
    }
})

const ClimateSchema = model('Climate', Climate);
export default ClimateSchema;