import image from "/NAZAR/IT/GitHub/react_project/src/components/Img/image.png"
import giraffe from "/NAZAR/IT/GitHub/react_project/src/components/Img/hyj6beweijqoj0wo4jzk.png"
import rhinoceros from "/NAZAR/IT/GitHub/react_project/src/components/Img/Humane-Zoos.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHippo } from '@fortawesome/free-solid-svg-icons' 
import "./Home.scss"

export const Home = () => {

    return(
        <div className="osnova">
            <h1 className="title"><span className="hipo"><FontAwesomeIcon icon={faHippo}/></span> Shaherezada zoo</h1>
            
            <article className="first__article">

                <div className="left__article">
                    <p className="par">Our zoo is a place where nature and man meet. We are proud to represent over 300 species of animals from around the world, including rare and endangered species. Come and enjoy walks among the spectacular fauna, learn more about nature conservation and support our mission of wildlife conservation. We have special programs for children, family activities and exciting guided tours.</p>
                </div>

                <div className="right__article">
                    <img src={giraffe} alt="giraffe" className="right__article__img__1"/>
                    <img src={rhinoceros} alt="rhinoceros" className="right__article__img"/>
                </div>

            </article>

            <p className="footer__par">Plan your visit today and discover the world of wildlife !!!</p>
            <button className="home_but">Contact us</button>
        </div>
        
    );   
};