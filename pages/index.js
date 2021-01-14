import Head from 'next/head';
import Image from 'next/image'
import { Toolbar } from '../components/toolbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return(
    
    <div className='page-container'>
      <Toolbar />
      <div className={styles.main}>
        <div className='logo'>< Image 
        src="/logo.png" 
        layout="fixed" 
        width={100} 
        height={100}
        alt="logo"/>
        </div>
        <h1>Next News App</h1>

        <h3>The best place for the latest news articles
        </h3>
      </div>
    </div>
 );
}
