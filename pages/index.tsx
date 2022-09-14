import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import Users from './users';

const Home: NextPage = () => {
    const router = useRouter();

   const handleRedirect = () => {
      router.push('/product');
   };

   return (
      <div className={styles.container}>
         <Head>
            <title>Create Next App</title>
            <meta name='description' content='Generated by create next app' />
            <link rel='icon' href='/favicon.ico' />
         </Head>

         <Users />
         
         <Users />

         <main className={styles.main}>
            <div className='red'>Hello My First App</div>
            <Link href={'/product'}>Product</Link>
            <button onClick={handleRedirect}>Product</button>
         </main>
      </div>
   );
};

export default Home;
