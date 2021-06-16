import React from "react";
import Table from "../components/Table";

import "../styles/list.css"

const HomeList = () =>{
    return (
        <div className="wrapper">
        <div className="item">
            <h1 className="tittle">Home List</h1> 
             <nav className="menu">
            <li className="menulist">Sing out</li>
        </nav> </div>
        <div className="item"></div>
        <div className="item">
            <Table/>
        </div>
        <div className="item"><button>Prev</button> <h2>Page 1/80</h2> <button>Next</button></div>
    </div>
    )
};

export default HomeList;