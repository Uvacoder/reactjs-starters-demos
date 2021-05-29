import Head from 'next/head';
import { createClient } from 'contentful';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	});

	const res = await client.getEntries({ content_type: 'recipe' });

	return {
		props: {
			recipes: res.items
		}
	};
}

export default function Home({ recipes }) {
	console.log(recipes);
	return (
		<div className="recipe-list">
			<Head>
				<title>Recipe Blog</title>
				<meta name="description" content="Delicious food recipes to make at home" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{recipes.map((recipe) => <div key={recipe.sys.id}>{recipe.fields.title}</div>)}
		</div>
	);
}
