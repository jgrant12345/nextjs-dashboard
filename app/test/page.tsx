"use client"
import { useRef } from "react";
import "./styles.css"
export default function page() {
    const input1 = useRef<HTMLInputElement>(null);

    function onSub(e : any){
        e.preventDefault()
        console.log("yay, submitted");
    }
function autofocus(){
    input1.current?.focus();
}

    return (
        <div><form onSubmit={onSub} className="formhere">
            <label>Name  <input type="email" ref={input1} ></input></label>
            <button type="submit">hello</button>
        </form>
        <button onClick={autofocus}>autofocus</button>
        </div>
    )
}