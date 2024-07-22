import productResolver from './product'
import userResolver from './user'

const resolvers = {
	...productResolver,
	...userResolver,
}

export default resolvers
