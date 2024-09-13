import {useSelector} from "react-redux";

export default function CounterValue() {
    const state = useSelector(state => state);

    const {countValue} = state;

    return (

        <>
            <div>
                Counter value is {countValue}
            </div>
        </>
    )
}