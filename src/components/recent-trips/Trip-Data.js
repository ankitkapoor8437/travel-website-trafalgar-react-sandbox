import { Component } from "react";
import './Trip-Styles.css'


class TripData extends Component {
    render() {
        return (
            <div className="t-cards">
                <div className="t-image">
                    <img src={this.props.image} alt="image" />
                </div>
                <h4>{this.props.heading}</h4>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default TripData;