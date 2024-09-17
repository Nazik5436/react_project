import "./Cart.scss"

export const Cart = () => {

    return(
        <div className="contacts">
            <h1 className="title">Plan your visit !</h1>
            <p className="con__par">Our zoo is open to visitors every day from 9:00 a.m. to 6:00 p.m. We are located in a picturesque park where cafes, souvenir shops and playgrounds are available for you. We offer convenient parking and excellent public transport to make your visit comfortable and pleasant.</p>
            <p className="con__par">Address: Prirodna Street, 123, City, Country</p>
            <p className="con__par">How to find us: We are located only a 10-minute drive from the city center. You can reach us by car or bus #45.</p>
            <ul>
                <li className="li">Phone: (123) 456-7890</li>
                <li className="li">Email: info@zoo.com</li>
            </ul>
            <h2 className="second__title">Call to Action: Contact us to book a tour or with any questions. We look forward to seeing you!</h2>
            <button className="cont_but">Contact us</button>
        </div>
    )   
};