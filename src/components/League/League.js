import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './League.css'

const League = (props) => {
    // console.log(props.league)
    //  strLeagueAlternate,
    const { idLeague, strLeague, strSport } = props.league;
    // console.log(idLeague)
    // const leagueStyle = {
    //     border: '1px solid purple',
    //     margin: '20px',
    //     padding: '20px',
    //     borderRadius: '20px'
    // }
    // className="leagueStyle"
    return (
        <div class="col">
            {/* new */}
            <div className="card mb-4">
                <img src="..." className="card-img-top" alt="..." />
                <div className="d-flex text-center">
                    <div className="card-body">
                        <h5>{strLeague}</h5>
                        <p>Sports type: {strSport}</p>
                        <button className="button"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/about/${idLeague}`}>Explore <FontAwesomeIcon icon={faArrowRight} /> </Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default League;