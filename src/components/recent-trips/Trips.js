import React from "react";
import TripData from "./Trip-Data";
import './Trip-Styles.css'

import TripImg1 from '../../assets/10.jpg'
import TripImg2 from '../../assets/9.jpg'
import TripImg3 from '../../assets/11.jpg'

const RecentTrips = () => {
    return (
        <div className="trip">
            <h2>Recent Trips</h2>
            <p>You can discover unique destinations using Google Maps.</p>

            <div className="tripCards">
                <TripData
                    heading="Trip in Indonesia"
                    text=">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis laboriosam incidunt neque quia distinctio perspiciatis voluptatum odit excepturi, ducimus voluptatibus quaerat, animi officia, repudiandae vitae? Hic, adipisci minus neque optio rerum totam fugiat cum ipsum assumenda quasi quis obcaecati enim similique aspernatur ratione unde dolore quaerat? Ipsa maiores cupiditate excepturi."
                    image={TripImg1} />

                <TripData
                    heading="Trip in Malaysia"
                    text=">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis laboriosam incidunt neque quia distinctio perspiciatis voluptatum odit excepturi, ducimus voluptatibus quaerat, animi officia, repudiandae vitae? Hic, adipisci minus neque optio rerum totam fugiat cum ipsum assumenda quasi quis obcaecati enim similique aspernatur ratione unde dolore quaerat? Ipsa maiores cupiditate excepturi."
                    image={TripImg2} />

                <TripData
                    heading="Trip in Bali"
                    text=">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis laboriosam incidunt neque quia distinctio perspiciatis voluptatum odit excepturi, ducimus voluptatibus quaerat, animi officia, repudiandae vitae? Hic, adipisci minus neque optio rerum totam fugiat cum ipsum assumenda quasi quis obcaecati enim similique aspernatur ratione unde dolore quaerat? Ipsa maiores cupiditate excepturi."
                    image={TripImg3} />
            </div>
        </div>
    );
}

export default RecentTrips;