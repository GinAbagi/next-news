import Image from 'next/image';
import { Toolbar } from '../components/toolbar';
import styles from '../styles/Home.module.css';

//Home page tab and toolbar import and logo 
export default function Home() {
  return(

    <div className='page-container'>
      <Toolbar /> 
      <div className={styles.main}>
        <div className='Next-Logo'>< Image 
        src="/logo.png" 
        layout="" 
        width={250} 
        height={250}
        margin={100}
        alt="logo"/>
        </div>
        <h1>Next News App</h1>

        <h3>The best place for the latest news articles</h3>
      </div>
    </div>
 );
}
