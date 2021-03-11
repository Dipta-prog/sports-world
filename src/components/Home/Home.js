import React, { useEffect, useState } from 'react';
import League from '../League/League';
import './Home.css'

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
            .then(res => res.json())
            .then(data => setLeagues(data.leagues)) //setLeagues(data) console.log(data.leagues)
    }, [])
    const Imgurl= "https://www.rankuzz.com/images/4/7/0/los_estadios_de_futbol_mas_grandes_del_mundo_74_portada.webp";
    const bannerStyle = { backgroundImage: `url(${Imgurl})`, height: '62vh', backgroundRepeat: 'no-repeat', backgroundSize: '100% 450px', opacity: '1' };
    return (
        <div>
            {/* banner img with project name in center */}
            <div style={bannerStyle}>
            <div className="d-flex align-items-center justify-content-center img-fluid">
                <h5 style= {{color: 'white'}} className="text-center logoText">Project name in center</h5>
            </div>
            </div>
            <div className="container">
                <div id="leaguesGrid" className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        leagues.map(league => <League league={league}></League>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;