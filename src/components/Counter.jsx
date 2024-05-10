// import {useState} from "react";
import Button from "./Button";
import Count from "./Count";

export default function Counter({count, onIncrement, onDecrement}){
    return (
        <div>
            <Count count={count}/>
            <div>
                <Button handler={onIncrement}>
                    Increment
                </Button>
                <Button handler={onDecrement}>
                    Decrement
                </Button>
            </div>
        </div>
    )
}