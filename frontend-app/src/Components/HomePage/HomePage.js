import React, {useEffect, useState} from 'react'
import './HomePage.css'
import HomePageMenu from "./Home PageMenu/HomePageMenu";
import Teams from "./Teams/Teams";
import RecentlyViews from "./RecentlyViews/RecentlyViews";
import PersonalBoards from "./PersonalBoards/PersonalBoards";
import Navbar from "../Navbar/Navbar";

const HomePage = props => {

    const [recentlyBoards, setRecentlyBoards] = useState("");
    const [ownerBoards, setOwnerBoards] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch("http://localhost/api/board?_start=0&_limit=2" , {
            method: "GET",
            mode: "cors",
            headers: {
                'Authorization': `Bearer ${token}`,
                "content-type": "application/json",
            }})
            .then(responseBoard => responseBoard.json())  //leer el JSon
            .then(pinFormResponse => { //Caracteristicas de la respuesta
                //pinFormResponse.sort((a, b) => parseFloat(a.lastView) - parseFloat(b.lastView));
                setOwnerBoards(pinFormResponse);
            });
    }, [])

    return(
        <div>
            <Navbar className="header-container-navbar" background-color="transparent" personalBoards={ownerBoards} />

            <div className={"container home-page"}>
                <div className={"home-page-left"}>
                    <HomePageMenu/>
                    <Teams/>
                </div>
                <div className={"home-page-right"}>
                    { recentlyBoards && <RecentlyViews recentlyBoards={recentlyBoards}/>}
                    { ownerBoards && <PersonalBoards personalBoards={ownerBoards}/>}
                </div>
            </div>
        </div>

    )
}

export default HomePage;