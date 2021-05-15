import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div>
			<Navbar />
			<h1>Learning Next Js</h1>
			<h4>Let's get started</h4>
			<Footer />
		</div>
	);
}
