This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### How to create a Navbar
- Creating navbar links is similar to Gatsby but the difference is you need to import the link component from next.js. 
- In this example I will create a `Navbar` js file from the component folder and add the links to the different page routes on my site.

```jsx
import Link from 'next/link';

const Navbar = () => {
	return (
		<nav>
			<div className="logo">
				<Link href="/">
					<a>
						<h1>UI Resources</h1>
					</a>
				</Link>
			</div>

			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Link href="/resources">
				<a>All coding Resources</a>
			</Link>
		</nav>
	);
};

export default Navbar;

```
- Another trick is if you want to link to a page that has a subpage in it, you can use `index.js` instead of naming it with other names, to make it a default subpage. 
- Example the in the pages folder I have the `All resources` page which i added a subpage called `index.js` the route will be: 
```jsx
<Link href="/resources">
	<a>All coding Resources</a>
</Link>
```
- If I used another name like `frontend.js` inside the `resources` folder and I wanted to link to  that page. It would look like: 
```jsx
<Link href="/resources/frontend">
	<a>All coding Resources</a>
</Link>
```
### Using global styles and  CSS Modules in next js
- To make your project look neat, you can create a `styles` folder that contains your css modules and global styles. 
- For the global styles to be applied through out your website and components you need to add the styleshhet in `pages/_app.js`;

```jsx
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
```
- To add css modules to your page to get styles for that specific page component. Example let's create a css module for the Home page component
- Steps to take:
1) Create a `Home.module.css` file in the `styles` folder.
2) Add your element styles as classes instead of `p{}` it will be `.p{}`

```css
.title {
	color: #333;
	padding-bottom: 20px;
	text-align: center;
}
.text {
	color: #777;
}
```
3) Add the styleshhet in your HOME page component. 
```js
import styles from '../styles/Home.module.css';
```
4) Let's add the title and he text styles as classes. This will be in the `ClassName` attribute. 
```jsx
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>Learning Next Js</h1>
			<h4>Let's get started</h4>
			<p className={styles.text}>
				
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum autem natus ex suscipit
				repellat obcaecati repellendus ratione neque eaque sint molestiae fuga officiis vitae recusandae,
				consequatur quidem? Voluptatum, autem.
			</p>

			<p className={styles.text}> lorem ipsum dolor sit amet consectetur adipis</p>
			<Link href="/resources"> See all the UI Resources for Developers</Link>
		</div>
	);
}
```

- Note the styles in the css module files are scoped meaning that the class will be specific to that css module style included in the page.
From the example above, if I wanted to add a different title style to the the `about` page, I can still add it as `.title`. This will be only scoped to the about page.


To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


