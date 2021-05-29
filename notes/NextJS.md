# Next Js notes

## How to make a blog with Next Js

### Connent Contentful with Next Js project
- First import the contentful package into the project.
```shell
npm i contentful
```
- We can achieve this by obtaining the access token and space id form contentful. Then use getStatic props from Next Js to get the data from contnentful using `createClient`. 


```jsx
import {createClient} from 'contentful'
export async function getStaticProps() {
  const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	});

}
```
- In the above code, we called the `createClient` function and stored it in a variable. It's important to pass space id and access token key as an arguement. 
- The actual data is in the `.env` fike of in the root directory of the project. This helpes to secure the data as we upload our data to the public, hence our you can access the actual key and id.  
- In the `.env` file you can add as below: 

```js
CONTENTFUL_SPACE_ID=jjkkkkkkkkkk
CONTENTFUL_ACCESS_TOKEN=jakakdnmkxmnciniewmoifmreonvmoiVNV
```
- Next let's tell Next Js what by of content type we want from contentful. This data will be stored as the response in a variable.

```jsx
import {createClient} from 'contentful'
export async function getStaticProps() {
  const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	});

  const res = await client.getEntries({ content_type: 'recipe' });

}
```

- Up next we need to return our data, which is the post stored with the recipe id in contentful. 

```jsx
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
```
- To output the title of the posts to your home page, you can get that by mapping the recipe data in the `Home` function like: 

```jsx
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
```