import Link from 'next/link'
import Image from 'next/image'
export default function RecipeCard({recipe}) {
	const {slug,title,cookingTime, thumbnail} = recipe.fields;
	return (<> 
  
    <div className="card">
			<div className="featured">
				<Image src={`https:${thumbnail.fields.file.url}`} width={thumbnail.fields.file.details.image.width} height={thumbnail.fields.file.details.image.height}/>
			</div>
			
			<div className="content">
				<div className="info">
					<h3>{title}</h3>
			<h4>
				<span role="img" alt="clock emoji">⏲</span>
				{cookingTime} min
				</h4>
			<div className="actions">
				<Link href={`/recipes/${slug}`}>
				<a>Cook this</a>
			</Link>
			</div>
				</div>
			</div>
		</div>
  </>);
}
