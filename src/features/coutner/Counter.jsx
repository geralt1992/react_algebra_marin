import styles from './Counter.module.css'
import { decrement , incrament, reset} from '../coutner/counterSlice'
import { useDispatch, useSelector } from 'react-redux';

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    function subtractOne() {
        dispatch(decrement());
    }

    function addOne() {
        dispatch(incrament());
    }

    function resetCounter() {
        dispatch(reset());
    }


    return <> 
    <div className={styles.app}>
        <div>
            <button onClick={subtractOne}>-</button>
            <span className={styles.text}>{count}</span>
            <button onClick={addOne}>+</button>
        </div>
        <button onClick={resetCounter}>Reset</button>
    </div>
    </>
}

export default Counter;