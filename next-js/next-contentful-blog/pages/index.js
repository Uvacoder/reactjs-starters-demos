import Head from 'next/head';

export default function Home() {
	return (
		<div className="recipe-list">
			<Head>
				<title>Recipe Blog</title>
				<meta name="description" content="Delicious food recipes to make at home" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</div>
	);
}
