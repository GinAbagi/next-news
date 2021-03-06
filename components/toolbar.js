import { useRouter } from 'next/router';
import styles from '../styles/Toolbar.module.css';

// Toolbar navigation
export const Toolbar = () => {
    const router = useRouter();

    return(
        <div className={styles.main}>
            <div onClick={() => router.push('/')}>Home</div>
            <div onClick={() => router.push('/feed/1')}>Feed</div>
            <div onClick={() => router.push('/EOM')}>Creator</div>
            <div onClick={() => window.location.href = 'https://twitter.com/NextNews17'}>Twitter</div>
        </div>
    )
};