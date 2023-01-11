import React from "react"

const date =  new Date();

function Footer(){
    return <footer>
        Copyright © {date.getFullYear() + date.getMonth()}
    </footer>
}

export default Footer;