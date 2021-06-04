# Next Js notes

Next Js is better for blog build because of pre rendering every page. This means it makes HTML pages for every page in advance instead of having it all done by client-side javascript. 
- Pre-rendering pages increases performance and SEO for your website. Since Html generated before that page loads javascript that is only required for that page to make it interactive.  

## Two forms of pre-rendering
- Depending on when the HTML pages are rendered, Next Js has two ways of doing pre-rendering:
1) Static Generation 
2) Server-side rendering

### Static Generation
- Static Generation is HTML generated in advance at build time and will be reused on each request. When you finish coding up your website with NEXT JS and run `next build`, the HTML pages will be created. 
- If you going to use external data, you can use Next JS async functions like `getStaticProps` and `getStaticPaths`.
- Don't panic, I will explain what the functions do.
- The `getStaticProps` function when getting external data that will create your page content. 
- The `getstaticPaths` functions creates paths that depends on external data.


Example of `getStaticProps`

```jsx
import Link from 'next/link'
import styles from '../../styles/User.module.css'


export async function getStaticProps() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
	const data = await res.json();

	if(!data) {
		return {notFound: true,}
	}
  return {
    props: {users: data}, // will be passed to the page component as props
  }
}


const UserList = ({users}) => {
	return (
		<>
			<h1>All the Contant List</h1>
			{users.map(user =>(
				<Link href={`/contacts/${user.id}`} key={user.id}>
					<a className={styles.single}>
						<h3>{user.name}</h3>
					</a>
				</Link>
			))}
		</>
	);
};

export default UserList;
```

- Example of `getStaticPaths`
```jsx
export const getStaticPaths = async () => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
	const data = await res.json();

	const paths = data.map((user) => {
		return {
			params: { id: user.id.toString() }
		};
	});

	return {
		paths,
		fallback: false
	};
};
```
### Server-side rendering
- Server-side rendering is HTML generated on request. This method is not highly recommend since it makes performance slower compared to static generation. Use it only when it is necessary. 
- To use server-side rendering in your page, you need to export an async function called `getServerSideProps`. This function is responsible for fetching your data and you can then pass it as a prop to you page component. 


- At times you want both, with Next Js you can have pages that static generated and others can be generated on request, that's server-side rendering. 
example

```jsx
import Link from 'next/link'
import styles from '../../styles/User.module.css'


export async function getServerSideProps() {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
	const data = await res.json();

	if(!data) {
		return {notFound: true,}
	}
  return {
    props: {users: data}, // will be passed to the page component as props
  }
}


const UserList = ({users}) => {
	// render your data here
};

export default UserList;
```
- Only use `getServerSideProps` if you need to pre-render the page with the data you are fetching when the user requests for it. Hence it runs on the server side but not on the browser.

- For more detailed explanation see the documentation from [NEXT JS about server-side rendering](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering)

### Summary
- Next Js has two type of pre-rendering, static generation and server-side rendering. 
- Static generation, HTML pages are created on build time. This means the HTML content for each page is available when you run `next build`, so they will be there before hand. 
- Server-side rendering the HTML content is created on request time. 


---
## How to make a blog with Next Js

### Connent Contentful with Next Js project
- First import the contentful package into the project.
```shell
npm i contentful
```
- We can achieve this by obtaining the access token and space id form contentful. Then use getStatic props (asychronous function) to pass data as props to our component. 
- Connect contentful by using the `createClient` function from the contentful package we installed earlier to our project.
- First we shall go to [Contentful website ](https://www.contentful.com/) and create a space for your project. In the Content Model tab, create a new content type, by clicking the `add content type` button on your top right. 

![content model from contentful](https://i.ibb.co/MP2ZYYQ/content-model-from-contentful.png)

- Then add the fields you want to appear in your blog post. Example: 
- Title:  choose short text
- Slug:  choose short text
- Thumbnail: choose media
- Featured image: choose media
- Body: choose rich text


![contentful data for the field type](https://i.ibb.co/25158xb/contentful-data.png)

- we called the `createClient` function and stored it in a variable. It's important to pass space id and access token key as an object arguement. This will show that we can get access to the contentful space you created to store the content type data.

```jsx
import {createClient} from 'contentful'
export async function getStaticProps() {
  const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
	});

}
```
- The actual data is in the `.env.local` fike of in the root directory of the project. This helpes to secure the data as we upload our data to the public, hence our you can access the actual key and id.  
- In the `.env` file you can add as below: 

```js
CONTENTFUL_SPACE_ID=jjkkkkkkkkkk
CONTENTFUL_ACCESS_TOKEN=jakakdnmkxmnciniewmoifmreonvmoiVNV
```
- Next let's tell Next Js what by of content type we want from contentful. This data will be stored as the response in a variable.
- The `getEntries` is a function that enables you to get data from the content space you created.
- You can have multiple content in your space, to be specific in which one it is, you need to pass an object which will have a key (content type) and a value(the content type ID). This will ensure you only get data from that specific content type. 

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

- Up next we need to return our data, which are stored in the items property from the response object. 

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
- To output the data, pass it as a props to the component through destructing. 
- You can console log the `recipes` data to see the content.

![contentful recipe data](https://i.ibb.co/FbHQ3w1/contentful-data-log.png)

Put the data on the frontend(your browser) by mapping the recipe data in the component (the below component is home functional component) function like: 

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

### How to import an image from contentful or external websites
1) Create a `next.config.js` file in the root directory and add the code below. 

```js
module.exports = {
	images: {
		domains: [ 'images.ctfassets.net' ]
	}
};
```

2) Add the image component in your template file.

```js
import Image from 'next/image'
export default function RecipeCard({recipe}) {
<Image src={`https:${thumbnail.fields.file.url}`} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height}/>
}
```