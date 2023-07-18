import React from "react";
import { currentYear } from "../helpers";
export function Footer(){
    return(
        <div>
            <footer>
                <p>&copy;{currentYear} </p>
            </footer>
        </div>
    )
}