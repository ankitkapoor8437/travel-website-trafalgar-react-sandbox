import React from "react";
import '../popular-destinations/Destination-Styles.css';
import DestinationData from "./Destination-data";
import Mountain1 from '../../assets/1.jpg'
import Mountain2 from '../../assets/2.jpg'
import Mountain3 from '../../assets/3.jpg'
import Mountain4 from '../../assets/4.jpg'

const Destination = () => {
    return (
        <div className="destination">
            <h1>Popular Destination</h1>
            <p>Tours give you Opportunity</p>


            <DestinationData
                cName="first-desc"
                heading="Taal Volcano, Batangar"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus ut recusandae reiciendis nobis at, doloremque aspernatur culpa labore dicta sequi mollitia eos earum!"
                image1={Mountain1}
                image2={Mountain2}
            />

            <DestinationData
                cName="second-desc"
                heading="Mt.Daguldal, Batangas"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus ut recusandae reiciendis nobis at, doloremque aspernatur culpa labore dicta sequi mollitia eos earum!"
                image1={Mountain3}
                image2={Mountain4}
            />


        </div>

    );
}

export default Destination;