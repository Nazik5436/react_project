import { useState } from "react"

export const Cond = () => {
    const [isLogged, setIsLogged] = useState(false)

    return(
        <div>
            <h2>Вітаю</h2>
            {isLogged ?
            (
                <div>
                    <p>Ви ввійшли в систему</p>
                    <button onClick={() => setIsLogged(false)}>Вийти</button>
                </div>
            ) :
            (
                <div>
                    <p>Ви не ввійшли в систему</p>
                    <button onClick={() => setIsLogged(true)}>Ввійти</button>
                </div>
            )
            }
        </div>
    )
}