import "./Likes.scss"
import asian_elephants from "/NAZAR/IT/GitHub/react_project/src/components/Img/Asian elephants.jpg" 
import red_pandas from "/NAZAR/IT/GitHub/react_project/src/components/Img/28138502587_a0a020ae9a_k.jpeg"
import african_lions from "/NAZAR/IT/GitHub/react_project/src/components/Img/AfricanLionJasiri_resize2019.jpg"
import logo from "/NAZAR/IT/GitHub/react_project/src/components/Img/logo.jpg"
import daf from "/NAZAR/IT/GitHub/react_project/src/components/Img/1614752068-feeding_1_desktop.jpg"
import daf1 from "/NAZAR/IT/GitHub/react_project/src/components/Img/animal-feeding-elephant-listing-900x600.jpg"
import daf2 from "/NAZAR/IT/GitHub/react_project/src/components/Img/_111497983_sarah-janefeedingscarlettheredpandaparadiseparkcornwall.jpg"



export const Likes = () => {

    return(
        <div className="animals__osnova">

            <article className="article">
                <div>
                    <h1 className="anm__title">Meet our residents</h1>
                    <p className="anm__par">Amazing animals from different parts of the world live in our zoo - from mighty lions and tigers to graceful giraffes and playful monkeys. We have sections for savannas, rainforests, deserts and oceans so you can see animals in a close to natural environment.</p>
                </div>
                <div>
                    <img src={logo} alt="logo" className="logo_img"/>
                </div>
            </article>
            
            <ul>
                <h2 className="anm__second__title">Some of our favorites:</h2>
                <li className="li"></li>
                <li className="li">
                    <h3 className="anm__third__title">Asian elephants are the largest land animals, they amaze with their strength and intelligence.</h3>
                    <img src={asian_elephants} alt="Asian elephants" className="anm__img"/></li>
                <li className="li">
                    <h3 className="anm__third__title">Rare red pandas are charming inhabitants of tropical forests.</h3>
                    <img src={red_pandas} alt="Red pandas" className="anm__img"/>
                </li>
                <li className="li">
                    <h3 className="anm__third__title">African lions are the kings of the savannah, mesmerizing with their majesty.</h3>
                    <img src={african_lions} alt="African lions" className="anm__img"/>
                </li>
            </ul>
            <p className="anm__par">Don't miss our daily animal feeding and special shows where you can get up close and personal with our pets!</p>
            <article className="second__article">
                <img src={daf} alt="daf" className="daf"/>
                <img src={daf1} alt="daf" className="daf"/>
                <img src={daf2} alt="daf" className="daf"/>
            </article>
            <article className="thiird__article">
                <div>
                    <p className="anm__par">See the full list of animals and their activity schedule!</p>
                </div>
                <div>
                    <button className="anm_but">Full list</button>
                </div>
            </article>
        </div>
    )   
};