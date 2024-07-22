import { ApolloServer } from 'apollo-server-lambda'

import mongoose from 'mongoose'

import { typeDefs } from '../schema/gql'
import resolvers from '../resolvers'

import fs from 'fs'

const config = JSON.parse(
	fs.readFileSync('config.json', 'utf-8')
)

const getHandler = async (
	event: any,
	context: any
) => {
	const server = new ApolloServer({
		typeDefs,
		rootValue: resolvers,
		introspection: true,
		debug: true,
	})

	mongoose
		.connect(config.DB_STRING)
		.then(() => console.log('Connected!'))

	const graphqlHandler = server.createHandler()

	if (!event.requestContext) {
		event.requestContext = context
	}

	return graphqlHandler(event, context, null)
}

export const handler = getHandler
