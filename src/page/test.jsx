import { reloadClientsList } from "../store/clients";
import {
	Transition,
	CSSTransition,
	SwitchTransition,
	TransitionGroup,
} from "react-transition-group";
import "../style/custom.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {
	hostApiServer,
	pathNameUploadFile,
	pathNameUploadFolder,
} from "../api/config";

import InputImageUpload from "../component/UIKit/form/inputImageUpload";
import { SwitchFade } from "../component/animation";

export default function Test() {
	const dispatch = useDispatch();
	const [stateAvatart, setStateAvatart] = useState({
		url: "",
		statusUpload: null,
	});
	const handleUpload = (e) => {
		e.preventDefault();
		document.getElementById("inputUpload").click();
	};

	/* ANIMATE */
	const duration = 300;

	const defaultStyle = {
		transition: `${duration}ms ease-in-out`,
		opacity: 0,
		display: "flex",
		backgroundColor: "#b3d0ff",
	};

	const transitionStyles = {
		entering: {
			opacity: 0,
			background: "green",
			visibility: "hidden",
			width: "0px",
			height: "0px",
		},
		entered: {
			opacity: 1,
			background: "red",
			visibility: "initial",
			width: "initial",
			height: "initial",
		},

		exiting: {
			// opacity: 1,
			// background: "red",
			// visibility: "initial",
			// width: "initial",
			// height: "initial",
			// padding: 20,
		},
		exited: {
			opacity: 0,
			background: "green",
			visibility: "hidden",
			// width: "0px",
			// height: "0px",
		},
	};
	const [inProp, setInProp] = useState(false);

	return (
		<>
			{/* <button onClick={() => setInProp(!inProp)}>Show</button> */}
			{/* <Transition in={inProp}>
				{(state) => {
					console.log(state);
					return (
						<div style={{ ...defaultStyle, ...transitionStyles[state] }}>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
							consectetur dolore deserunt cum ex quis illo quo minima iure
							rerum. Ex modi optio vero laborum aperiam odio, repellat earum
							harum.
						</div>
					);
				}}
			</Transition> */}
			{/* 			<CSSTransition
				in={inProp}
				timeout={1000}
				classNames="example"
				unmountOnExit
			>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
					culpa libero laborum consequuntur pariatur animi eum repellat veniam,
					illum ducimus quidem dolorum vitae et molestiae, vero, rerum quisquam
					maiores natus!
				</p>
			</CSSTransition> */}
			{/* <SwitchTransition mode="out-in">
				<CSSTransition
					classNames="fade"
					key={inProp ? "YESS" : "NOOO!"}
					addEndListener={(node, done) => {
						console.log("node", node, "done", done);
						node.addEventListener("transitionend", done, false);
					}}
				>
					<p>Children</p>
				</CSSTransition>
			</SwitchTransition> */}
		</>
	);
}
