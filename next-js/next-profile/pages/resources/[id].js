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
export async function getStaticProps(context) {
	const id = context.params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
	const data = await res.json();

	return {
		props: { user: data }
	};
}
const Details = ({ user }) => {
	return (
		<div>
			<h1>Name: {user.name}</h1>
			<p>Username: {user.username}</p>
			<p>Email: {user.email}</p>
			<p>Steet: {user.address.street}</p>
			<p>City: {user.address.city}</p>
		</div>
	);
};

export default Details;
