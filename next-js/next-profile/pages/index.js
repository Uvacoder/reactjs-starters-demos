import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
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
	);
}
