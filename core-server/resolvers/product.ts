import Product from '../models/product'

const productResolver = {
	products: async () => {
		const result = await Product.find()
		return result.map((product) => {
			return { ...product._doc }
		})
	},

	createProduct: async (args: any) => {
		const product = new Product({
			title: args.productInput.title,
			brief: args.productInput.brief,
			price: +args.productInput.price,
		})
		console.log('works', product)
		product.save()
		return { ...product._doc }
	},
}

export default productResolver
