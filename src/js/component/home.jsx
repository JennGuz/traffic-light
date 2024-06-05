import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component



const TrafficLight = () => {

	const [color, setColor] = useState("red");
	const [intervalId, setIntervalId] = useState(null);

	const changeColor = () => {

		if(intervalId === null) {

			const newIntervalId = setInterval(() => {

				setColor(currentColor => {
					
					if(currentColor === 'red') {
						return 'yellow';

					}else if(currentColor === 'yellow') {
						return 'green';

					}else if(currentColor === 'green') {
						return 'red';
					}

				});

			}, 1000);

			setIntervalId(newIntervalId);

		}else {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	}
	
	console.log(color);
	
	return (
		<>
			<div className="trafficLight">
				<div className="trafficTop">h</div>
				<div className="container">
					<div className={color === 'red' ? 'red active' : 'red'}>

					</div>
					<div className={color === 'yellow' ? 'yellow active' : 'yellow'} >
						
					</div>
					<div className={color === 'green' ? 'green active' : 'green'}>
						
					</div>
				</div>
				<button className="button" onClick={changeColor}>On/Off</button>
			</div>warning: You appear to have cloned an empty repository.

		</>
	);
};

export default TrafficLight;
