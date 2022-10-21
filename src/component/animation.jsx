import {
	Transition,
	CSSTransition,
	SwitchTransition,
	TransitionGroup,
} from "react-transition-group";

export function SwitchFade({ stateValue, children }) {
	return (
		<SwitchTransition mode="out-in">
			<CSSTransition
				key={stateValue}
				addEndListener={(node, done) => {
					node.addEventListener("transitionend", done, false);
				}}
				classNames="fade"
			>
				{children}
			</CSSTransition>
		</SwitchTransition>
	);
}
