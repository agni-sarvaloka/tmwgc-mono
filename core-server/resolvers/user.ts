import User from '../models/user'

const userResolver = {
	users: async (args: any) => {
		const result = await User.find()
		return result.map((user) => {
			return { ...user }
		})
	},
	createUser: (args: any) => {
		const user = new User({
			name: args.userInput.name,
			email: args.userInput.email,
			mobile: +args.userInput.mobile,
		})

		user.save()
		return { ...user }
	},
}

export default userResolver
