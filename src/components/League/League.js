import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './League.css'

const League = (props) => {
    const { idLeague, strLeague, strSport } = props.league;
    const [eachLeague, setEachLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${props.league.idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setEachLeague(data.leagues[0]);
            })
    }, [props.league.idLeague]);
    const { strBadge } = eachLeague;

    return (
        <div class="col">
            <div className="card mb-4 shadow rounded">
                <div className="d-flex text-center" style={{paddingTop: "20px"}}>
                    <div>
                        <img className='d-flex text-center' src={strBadge} style={{ width: '50%' }} className="card-img-top" alt="..." />
                    </div>
                </div>
                <div className="d-flex text-center">
                    <div className="card-body">
                        <h5 style={{ fontWeight: '700' }}>{strLeague}</h5>
                        <p style={{ color: 'IndianRed' }}>Sports type: {strSport}</p>
                        <button className="button"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/about/${idLeague}`}>Explore <FontAwesomeIcon icon={faArrowRight} /> </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default League;