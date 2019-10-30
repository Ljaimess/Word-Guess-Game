import React from 'react';
import "./score.css";

// class Start extends Component {
//     state = {
//         button: false
//     }

//     isDisabled = () => {
//         this.setState({
//             button: true
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <div id="guesses" ></div>
//                 <div id="instruc" >
//                     <button id="button" onClick={this.isDisabled}
//                         disabled={this.state.button}
//                         className={this.state.button ? "btn disabled":"waves-effect waves-light btn"}>button</button>
//                 </div>
//                 <div id="badletters" ></div>
//             </div >
//         );
//     }
// }

// export default Start;

// function disableButton(event) {
//     event.preventDefault(); 
// };
// let randomWord =  props.randomizeWord
const Start = props => (
    <div>
        <div id="guesses" ></div>
        <div id="instruc" >
        <button id="button" onClick={props.handleClick}
                        disabled={props.button}
                        className={props.button ? "btn disabled":"waves-effect waves-light btn"}>button</button>
        </div>
        <div id="badletters" ></div>
    </div>
)
export default Start;