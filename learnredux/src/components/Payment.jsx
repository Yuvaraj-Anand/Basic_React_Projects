import React from "react";
import { updatewallet } from "../Store";
import { useSelector, useDispatch } from "react-redux";

export default function Payment(){
    const data = useSelector(state =>state.user);
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(updatewallet(5000));
    }
    return (
        <div> 
            <h1>{data.username}, {data.balance}</h1>
            <button onClick={handleClick}>Pay</button>
        </div>
    )
}