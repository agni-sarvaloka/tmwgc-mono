import mongoose from 'mongoose'

const Schema = mongoose.Schema

const settingmod = new Schema({
	brand_label: {
		type: String,
		required: true,
	},
	brand_mark: {
		type: String,
		required: true,
	},
	mobile: {
		type: Number,
		required: true,
	},
	menu: [
		{
			type: Schema.Types.ObjectId,
			ref: 'Product',
		},
	],
})

export default mongoose.model(
	'Setting',
	settingmod
)
