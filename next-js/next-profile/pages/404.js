import Image from 'next/image';
import styles from '../styles/Error.module.css';
import Link from 'next/link';
const InfoError = () => {
	return (
		<div className={styles.center}>
			<Image src="/404.svg" alt="error illustration image" width={500} height={500} />
			<h1> UGH! Looks like you are lost</h1>
			<p>The page you are looking for can't be found.</p>
			<Link href="/">
				<a className={styles.btn}>Go back Home</a>
			</Link>
		</div>
	);
};

export default InfoError;
