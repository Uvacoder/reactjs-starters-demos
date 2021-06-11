import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Image from 'next/image';
const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export const getStaticPaths = async () => {
	const res = await client.getEntries({
		content_type: 'recipe'
	});
	const paths = res.items.map((item) => {
		return {
			params: { slug: item.fields.slug } //[{params{slug}}{}{}]
		};
	});
	return {
		paths,
		fallback: false
	};
};

export async function getStaticProps({ params }) {
	const { items } = await client.getEntries({
		content_type: 'recipe',
		'fields.slug': params.slug
	});

	return {
		props: {
			recipe: items[0]
		}
	};
}

export default function RecipeDetails({ recipe }) {
	console.log(recipe);
	const {featuredImage, title, method, ingredients, cookingTime} = recipe.fields;
	return <>
		<div>
			<Image src={`http:${featuredImage.fields.file.url}`}  height={featuredImage.fields.file.details.image.height}  width={featuredImage.fields.file.details.image.width} alt={featuredImage.fields.description}/>
		<h2 className="banner">{title}</h2>
		<div className="info">
			<p>Take about {cookingTime} mins to cook</p>
			<h3>Ingredients :</h3>
			{ingredients.map(ing =>(
				<span key={ing}>{ing}</span>
			))}
		</div>
		<div className="method">
			<h3>Method: </h3>
			<div>{documentToReactComponents(method) }</div>
		</div>
		</div>
		<style jsx>{`
			h2,h3 {
          text-transform: uppercase;
        }
        .banner h2 {
          margin: 0;
          background: #fff;
          display: inline-block;
          padding: 20px;
          position: relative;
          top: -60px;
          left: -10px;
          transform: rotateZ(-1deg);
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
        }
        .info p {
          margin: 0;
        }
        .info span::after {
          content: ", ";
        }
        .info span:last-child::after {
          content: ".";
        }

			`}
		</style>
	</>;
}
