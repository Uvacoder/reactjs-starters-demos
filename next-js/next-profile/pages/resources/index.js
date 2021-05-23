import Head from 'next/head'
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


const NinjaList = ({users}) => {
	return (
		<>
		<Head>
			<title>UI Resources | Resources</title>
			<meta name="keywords" content="UI resources, developer, design"/>
		</Head>
		<div>
			<h1>All the Design Resources</h1>
			{users.map(user =>(
				<Link href={`/resources/${user.id}`} key={user.id}>
					<a className={styles.single}>
						<h3>{user.name}</h3>
					</a>
				</Link>
			))}
		</div>
		</>
	);
};

export default NinjaList;
