
/*import { useCounter } from "../Hooks/useCounter"

export function Counter() {
    const { count, increaseCount, dicreaseCount } = useCounter()

    return (
        <div className="card">
            <p> Count: {count}</p>
            <button onClick={increaseCount}>
                +
            </button>

            <button onClick={dicreaseCount}>
                -
            </button>
        </div>
    );
}*/

import { useCounter } from "../Hooks/useCounter"

export function Counter() {
    const { count, increaseCount, decreaseCount, FAVORITE_NUMBER } = useCounter();

    return (
        <div className="card">
            <p>Count: {count}</p>

            {/* Contenedor de los botones */}
            <div className="button-container">
                <button className="btn" onClick={increaseCount}>+</button>
                <button className="btn" onClick={decreaseCount}>-</button>
            </div>

            {count === FAVORITE_NUMBER && (
                <p className="favorite-msg"> ¡Este es mi número favorito! :)</p>
            )}
        </div>

    )
}


