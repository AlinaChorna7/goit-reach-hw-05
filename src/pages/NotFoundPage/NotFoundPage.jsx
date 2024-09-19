import {Link }from "react-router-dom";

export default function NotFoundPage(){
    return(
        <div>
            <h1>Page not founded</h1>
            <Link to="/">Go back to home</Link>
        </div>
    )
}

