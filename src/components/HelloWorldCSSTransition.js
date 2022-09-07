import React from "react";
import { CSSTransition } from "react-transition-group";
import "./HelloWorldCSSTransition.css";
class HelloWorldCSSTransition extends React.Component {
  constructor(props) {
    super(props);
    this.duration = 2000;
    this.state = {
      inProp: true,
    };
    setInterval(() => {
      this.setState((state, props) => {
        let newState = {
          inProp: !state.inProp,
        };
        return newState;
      });
    }, 3000);
  }
  render() {
    return (
      <CSSTransition
        in={this.state.inProp}
        timeout={this.duration}
        classNames="hello"
      >
        <div>
          <h1>Hello World!</h1>
        </div>
      </CSSTransition>
    );
  }
}
export default HelloWorldCSSTransition;

// TransitionGroup is a container component, which manages multiple transition component
// in a list. For example, while each item in a list use CSSTransition,
{
  /* <TransitionGroup>
  {items.map(({ id, text }) => (
    <CSSTransition key={id} timeout={500} classNames="item">
      <Button
        onClick={() =>
          setItems((items) => items.filter((item) => item.id !== id))
        }
      >
        &times;
      </Button>
      {text}
    </CSSTransition>
  ))}
</TransitionGroup>; */
}
