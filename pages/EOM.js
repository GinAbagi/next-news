import { Toolbar } from '../components/toolbar';
import styles from '../styles/EOM.module.css';

//Creator tab fetch and toolbar import
export const EOM = ({ employee }) => {
    console.log(employee);
    return(
        <div className= 'page-container'>
            <Toolbar />
            <div className={styles.main}>
                <h1>Next News creator</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image}/>
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    );
};

//fetch and show creator info from my.json server

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/GinAbagi/next-news/employeeOfTheMonth/'
    );

    const employee = await apiResponse.json();

    return{
        props:{
            employee
        }
    }
};

export default EOM;