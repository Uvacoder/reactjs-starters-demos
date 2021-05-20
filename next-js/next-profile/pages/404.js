import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Error.module.css';
import Link from 'next/link';
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
