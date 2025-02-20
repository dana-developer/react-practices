import React, {useState, useEffect} from 'react';
import Main from "./component/Main";
import Gallery from "./component/Gallery";
import Guestbook from "./component/Guestbook";



const Router = () => {
    return null;
};




export default function App() {

    const clickHandler = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <ul>
                <li><a href={'/'} onClick={clickHandler}>[Main]</a></li>
                <li><a href={'/gallery'} onClick={clickHandler}>[Gallery]</a></li>
                <li><a href={'/guestbook'} onClick={clickHandler}>[Guestbook]</a></li>
            </ul>
            <Router />
        </div>
    )
}