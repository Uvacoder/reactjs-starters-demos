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
- Let's add some styles in our global stylesheets.
1) Add some styles to the `global.css` file in the `styles` folder.
```css
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');

* {
	margin: 0;
	padding: 0;
}
*,
*::before,
*::after {
	box-sizing: inherit;
}
html {
	box-sizing: border-box;
	font-size: 62.5%;
}
body {
	font-size: 1.6rem;
	background: #f2f2f2;
	color: #333;
	font-family: "Nunito";
}
a {
	color: #333;
	text-decoration: none;
}
.btn {
	display: block;
	width: 150px;
	padding: 8px 0;
	margin: 20px auto;
	background: #353e58;
	border-radius: 4px;
	color: #fff;
	text-align: center;
}
h4{ 
	font-weight: 600;
}

```
2) Add them to the pages. Example let me add the `btn` styling
```jsx
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<h1 className={styles.title}>Learning Next Js</h1>
			<h4>Let's get started</h4>
		</div>
	);
}
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

### Images in Next Js
- Using the Image component allows next to resize and optimize your images. This ensures large images are not sent to small screen devices with small viewport width.
- It allows lazy loading of images hence increasing performance and speed of your page.
- Images are optimized on demand when they are requested by the user as they scroll down your page.

1) Add your image in the public folder. My image was `404.svg` for my 404 page. 
2) Import the `Image component` from Next.
```jsx
import Image from 'next/image';
```
3) Add the `Image Component` and start the src image with ` "/{Name of your image}" `
- Add the width and height of your image. {This is a must or it cause an error => 500 error}
```jsx
<Image src="/404.svg" alt="error illustration" width={500} height={500} />
```


```jsx
import Image from 'next/image';
const InfoError = () => {
	const router = useRouter();

	useEffect(() => {
		setTimeout(() => {
			router.push('/');
		}, 3000);
		console.log('Use effect');
	}, []);
	return (
		<div className={styles.center}>
			<Image src="/404.svg" alt="error illustration image" width={500} height={500} />
			<div>
				<h1> UGH! Looks like you are lost</h1>
				<p>The page you are looking for can't be found.</p>
				<Link href="/">
					<a className="btn">Go back Home</a>
				</Link>
			</div>
		</div>
	);
};

export default InfoError;
```
[Learm more about image optimization with Next](https://nextjs.org/docs/basic-features/image-optimization)


### Metadata in Next JS

1) Import the Head component from Next
```js
import Head from 'next/head';
```
2) Add the Head component and add the title and meta description

```jsx
export default function Home() {
	return (
		<>
		<Head>
			<title>UI Resources | Home</title>
			<meta name="description" content="{....description}"/>
			<meta name="keywords" content="UI resources, developer, design"/>
		</Head>
		<div>
			<h1 className={styles.title}>Learning Next Js</h1>
			<h4>Let's get started</h4>
			<p className={styles.text}>
				{' '}
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nostrum autem natus ex suscipit
				repellat obcaecati repellendus ratione neque eaque sint molestiae fuga officiis vitae recusandae,
				consequatur quidem? Voluptatum, autem.{' '}
			</p>

			<p className={styles.text}> lorem ipsum dolor sit amet consectetur adipis</p>
			<Link href="/resources"> See all the UI Resources for Developers</Link>
		</div>
		</>
	);
}
```
3) Import the Head component to your pages and there you go, your site can rank up with SEO. 

[Learn more about the Head component from Next Js](https://nextjs.org/docs/api-reference/next/head)






To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.


