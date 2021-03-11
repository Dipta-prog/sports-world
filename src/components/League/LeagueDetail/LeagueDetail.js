import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router';
import './LeagueDetail.css';
import pic from '../../../resources/Photo/Rectangle_28.png';
import female from '../../../resources/Photo/female.png'
import twitter from '../../../resources/Icon/Twitter.png';
import facebook from '../../../resources/Icon/Facebook.png';
import youTube from '../../../resources/Icon/YouTube.png';

const LeagueDetail = () => {
    const { leagueId } = useParams();
    const [league, setLeague] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLeague(data.leagues[0]);
            })
    }, [leagueId])

    const { strFanart2, strBadge, strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube } = league;
    const bannerStyle = { backgroundImage: `url(${strFanart2})`, height: '62vh', backgroundRepeat: 'no-repeat', backgroundSize: '100% 450px', opacity: '1' };

    let ConditionalGenderImage;
    if (strGender !== "Male") {
        ConditionalGenderImage = <img className="genderImage" src={female} alt="" />;

    }
    else {
        console.log("Male:", strGender);
        ConditionalGenderImage = <img className="genderImage" src={pic} alt="" />;
    }

    return (
        <div>
            <div style={bannerStyle}>
                <div className="d-flex align-items-center justify-content-center img-fluid">
                    <img className="logoImg" src={strBadge} alt="" />
                </div>
            </div>

            <div className="container">
                <div className="leagueInfoDiv row d-flex align-items-center justify-content-start" style={{ borderRadius: '10px' }}>
                    <div className="col-md-8 leagueInfo">
                        <h3 className="leagueDetailStyle">League Name: {strLeague}</h3>
                        <p className="leagueDetailStyle"><FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</p>
                        <p className="leagueDetailStyle"><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p className="leagueDetailStyle"><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p className="leagueDetailStyle"><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="col-md-4 leagueInfoImg">
                        {
                            ConditionalGenderImage
                        }
                    </div>
                </div>
                <div className="descriptionText shadow rounded">
                    <p>{strDescriptionEN}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur non assumenda esse. Officiis perferendis debitis natus accusamus corrupti a incidunt ratione qui ipsam doloribus. Unde eligendi harum et laborum, hic, assumenda consequuntur itaque, incidunt corrupti minima error vero delectus esse. Odio iusto, est nam esse sit iure nulla odit magnam provident vitae, fugiat facere a ad labore. Animi earum quidem hic dignissimos sunt placeat, incidunt recusandae ipsa nesciunt voluptatum blanditiis debitis iure reiciendis officiis delectus quaerat quisquam tempora amet laudantium error suscipit est perspiciatis. Sunt ad odit obcaecati unde optio, ratione nulla facere asperiores sed maxime hic, adipisci deserunt libero.</p>
                </div>
                <div className="d-flex align-items-center justify-content-center socialDiv">
                    <div><a href={strTwitter} target="_blank"><img id="twitter" className="socialIcons" src={twitter} alt="" /></a></div>
                    <div><a href={strFacebook} target="_blank"><img id="facebook" className="socialIcons" src={facebook} alt="" /></a></div>
                    <div><a href={strYoutube} target="_blank"><img id="youTube" className="socialIcons" src={youTube} alt="" /></a></div>
                </div>
                <footer className="text-center footer"><small>Sports Valley © 2021. All rights not reserved</small></footer>
            </div>
        </div>
    );
};

export default LeagueDetail;