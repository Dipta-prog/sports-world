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
                console.log(data.leagues[0]);
            })
    }, [leagueId])

    //  strLogo,
    const { strFanart2, strBadge, strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strFacebook, strTwitter, strYoutube } = league;
    const bannerStyle = { backgroundImage: `url(${strFanart2})`, height: '62vh', backgroundRepeat: 'no-repeat', backgroundSize: '100% 450px', opacity: '1' };
    const marginPadding = { margin: '1px 0 1px 5px', padding: '1px 0 1px 5px' };

    let ConditionalGenderImage;
    if(strGender!=="Male"){
        console.log("Female:",strGender);
        ConditionalGenderImage = <img className="genderImage" src={female} alt="" />;
        
    }
    else{
        console.log("Male:",strGender);
        ConditionalGenderImage = <img className="genderImage" src={pic} alt="" />;
    }

    // console.log(strGender)

    return (
        <div>

            {/* style={bannerStyle} */}
            <div style={bannerStyle}>
                {/* logo over bg-img */}
                <div className="d-flex align-items-center justify-content-center img-fluid">
                    <img className="logoImg" src={strBadge} alt="" />
                </div>
            </div>


            <div className="container">
                <div className="leagueInfoDiv bg-primary row d-flex align-items-center justify-content-start" style={{ borderRadius: '10px'}}>
                    {/* league card */}
                    <div className="col-md-8 leagueInfo">
                        <h3 style={marginPadding}>League Name: {strLeague}</h3>
                        <p style={marginPadding}><FontAwesomeIcon icon={faMapMarker} /> Founded: {intFormedYear}</p>
                        <p style={marginPadding}><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p style={marginPadding}><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p style={marginPadding}><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="col-md-4 leagueInfoImg">
                        {/* <img className="genderImage" src={pic} alt="" /> */}
                        {
                            ConditionalGenderImage
                        }
                    </div>
                </div>
                <div className="descriptionText">
                    <p>{strDescriptionEN}</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur non assumenda esse. Officiis perferendis debitis natus accusamus corrupti a incidunt ratione qui ipsam doloribus. Unde eligendi harum et laborum, hic, assumenda consequuntur itaque, incidunt corrupti minima error vero delectus esse. Odio iusto, est nam esse sit iure nulla odit magnam provident vitae, fugiat facere a ad labore. Animi earum quidem hic dignissimos sunt placeat, incidunt recusandae ipsa nesciunt voluptatum blanditiis debitis iure reiciendis officiis delectus quaerat quisquam tempora amet laudantium error suscipit est perspiciatis. Sunt ad odit obcaecati unde optio, ratione nulla facere asperiores sed maxime hic, adipisci deserunt libero.</p>
                </div>
                <div className="d-flex align-items-center justify-content-center socialDiv">
                    {/* footer area logo */}
                    <div><a href={strTwitter} target="_blank"><img className="socialIcons" src={twitter} alt="" /></a></div>
                    <div><a href={strFacebook} target="_blank"><img className="socialIcons" src={facebook} alt="" /></a></div>
                    <div><a href={strYoutube} target="_blank"><img className="socialIcons" src={youTube} alt="" /></a></div>
                </div>
            </div>

            {/* <h3>This is Friend Detail Component: {leagueId}</h3> */}
        </div>
    );
};

export default LeagueDetail;