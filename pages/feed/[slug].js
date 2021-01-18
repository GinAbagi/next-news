import styles from '../../styles/Feed.module.css';
import { Toolbar } from '../../components/toolbar';
import { useRouter } from 'next/router';

//feed navigation and API info fetch 
//page-container fetches article url on title and pic of article
//if clicked on page selector, scroll back up and skip to next page
//when page is above 5 or less than 1 disable the click

export const Feed = ({ pageNumber, articles}) => {
    const router = useRouter();

    return (
        <div className='page-container'>
            <Toolbar/>
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post}>
                    <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                    <p>{article.description}</p>
                {!!article.urlToImage && <img src={article.urlToImage} />}
            </div>
            ))}
        </div>
        <div className={styles.paginator}>
            <div 
            onClick={() =>{
                if (pageNumber > 1){
                    router.push(`/feed/${pageNumber - 1}`).then (() => window.scrollTo(0,0));
                }
            }}
            
            className={pageNumber === 1 ? styles.disabled : styles.active}>Previous Page
            </div>
            
            <div>{pageNumber}</div>
            
            <div 
            onClick={() =>{
                if (pageNumber < 5){
                    router.push(`/feed/${pageNumber + 1}`).then (() => window.scrollTo(0,0));
                }
            }}
            
            className={pageNumber === 5 ? styles.disabled : styles.active}>Next Page
            </div>
        </div>
        </div>
    );
};
        
//if page is less than 1 or more than 5 disable the click
export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
        return {
            props: {
                articles: [],
                pageNumber: 1
            }
        }
    }
    //API fetch
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=nl&pageSize=5&page=${pageNumber}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
          },
        },
    );

    const apiJson = await apiResponse.json();

    const { articles } = apiJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
};

export default Feed;