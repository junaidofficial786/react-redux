import {useDispatch} from "react-redux";
import {handleIncreaseCountAction} from "../store/slices/counter.js";

export default function CounterButton() {

    const dispatch = useDispatch()

    function handleClick() {
        dispatch(handleIncreaseCountAction({
            id: 1,
            name: "Junaid"
        }))
    }

    return (
        <>
            <button onClick={handleClick} className="bg-gray-800 text-white">
                Increase count
            </button>
        </>
    )
}