import React from 'react';

import homepagecss from './HomePage.module.css'

function HomePage() {
    return (
        <>
            <div className={homepagecss.container}>
                <div className={homepagecss.subContainer1}>
                    <div className={homepagecss.colorFilter}></div>
                    <div className={homepagecss.inner}>
                        <h2 className={homepagecss.header2}>UNSLIC'D</h2>
                        <h3 className={homepagecss.header3}>Let's get this slice!</h3>
                        <p className={homepagecss.containerText}>Share you're favorite slices from your favorite spots!</p>
                    </div>
                </div>
                <div className={homepagecss.subContainer2}>
                    <div className={homepagecss.textContainer}>
                        <p>Welcome to Unslic'd! The premier website to check-in with your favorite slices at your favorite pizza spots.</p>
                        <p>Join Us Today!</p>
                    </div>
                </div>
                <div className={homepagecss.subContainer3}>
                    <h3>Features</h3>
                    <div className={homepagecss.features}>
                        <div className={homepagecss.card}>
                            <img src={"https://image.freepik.com/free-vector/flying-slice-pizza-cartoon-vector-illustration-fast-food-concept-isolated-vector-flat-cartoon-style_138676-1934.jpg"}
                                alt="slice" style={{ width: "100%" }} />
                            <div className={homepagecss.cardContainer}>
                                <p>Add Your Favorite Slice Types to Our Database!</p>
                            </div>
                        </div>
                        <div className={homepagecss.card}>
                            <img src={"https://image.freepik.com/free-vector/illustration-pizza-place_53876-43651.jpg"}
                                alt="store" style={{ width: "100%"}} />
                            <div className={homepagecss.cardContainer}>
                                <p>Add Your Favorite Local Pizza Spots!</p>
                            </div>
                        </div>
                        <div className={homepagecss.card}>
                            <img src={"https://image.freepik.com/free-vector/illustration-gps-telling-route_53876-37296.jpg"}
                                alt="checkin" style={{ width: "100%" }} />
                            <div className={homepagecss.cardContainer}>
                                <p>Check-in Whenever You Visit Your Favorite Spots to Grab Your Favorite Slices!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage;
