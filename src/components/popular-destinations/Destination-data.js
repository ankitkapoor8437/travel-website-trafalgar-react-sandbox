import './Destination-Styles.css';
import { Component } from 'react';
import Mountain1 from '../../assets/1.jpg'
import Mountain2 from '../../assets/2.jpg'
import Mountain3 from '../../assets/3.jpg'
import Mountain4 from '../../assets/4.jpg'




// const DestinationData = () => {
//     return (
//         <div className="first-desc">
//             <div className="desc-text">
//                 <h2>Taal Volcano, Batangar</h2>
//                 <p>
//                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius minus ut recusandae reiciendis nobis at, doloremque aspernatur culpa labore dicta sequi mollitia eos earum!
//                 </p>
//             </div>
//             <div className="image">
//                 <img src={Mountain1} alt="image" />
//                 <img src={Mountain2} alt="image" />
//             </div>
//         </div>

//     )
// }


class DestinationData extends Component {
    render() {
        return (
            <div className={this.props.cName}>
                <div className="desc-text">
                    <h2>{this.props.heading}</h2>
                    <p>
                        {this.props.text}                    </p>
                </div>
                <div className="image">
                    <img src={this.props.image1} alt="image" />
                    <img src={this.props.image2} alt="image" />
                </div>
            </div>

        )
    }

}

export default DestinationData;