import mongoose from 'mongoose'

const Schema = mongoose.Schema

const brandmod = new Schema({
	label: {
		type: String,
		required: true,
	},
	domain: {
		type: String,
		required: true,
	},
	meta_title: {
		type: Number,
		required: true,
	},
	meta_description: {
		type: Number,
		required: true,
	},
	logo: {
		type: Number,
		required: true,
	},
	favicon: {
		type: Number,
		required: true,
	},
})

export default mongoose.model('User', brandmod)
