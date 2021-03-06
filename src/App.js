import React, { Component } from 'react';
import './App.css';

// import ScrollBox from './ScrollBox.js';
//import IterationSample from './IterationSample.js';
//import LifeCycleSample from './LifeCycleSample.js';
//import MyScssComponent from './MyScssComponent';
//import Button from './components/Button';
import StyledButton from './components/StyledButton';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  };
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  };
  render() {
    return (
      <div>
        {/* <ScrollBox ref={ref => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button> */}
        {/* 
        <MyScssComponent /> */}
        {/* <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCycleSample color={this.state.color} /> */}
        {/* <Button>버튼</Button> */}
        <StyledButton big>버튼</StyledButton>
      </div>
    );
  }
}

export default App;
