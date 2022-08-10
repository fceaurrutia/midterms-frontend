import { GraphQLClient } from 'graphql-request';

export const graphqlClient = async () => {
	const graphqlUrl = process.env.NEXT_PUBLIC_ENDPOINT as string;

	return new GraphQLClient(graphqlUrl, {
		headers: {
			Authorization: '',
		},
	});
};
