export const Greet = (props) => {

    return(
        <div>
            <h1>Привіт {props.user.name}!</h1>
            <p>Вік {props.user.age}</p>
        </div>
        
    )
}