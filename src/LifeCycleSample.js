/* eslint-disable react/sort-comp */
import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shuldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log(' 업데이트 되기 전 색상 : ', snapshot);
    }
  }
  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };

    return (
      <div>
        <h1 style={style} ref={ref => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
        <p>컴포넌트 라이프사이클 메서드 순서</p>
        <span>
          마운트 : constructor - getDerivedStateFromProps - render -
          componentDidMount
        </span>
        <br />
        <span>
          업데이트 : Prop변경 또는 부모 리렌더링 - getDerivedStateFromProps -
          setState - shuldComponentUpdate - false = (end) || true - render -
          getSnapshotBeforeUpdate - componentDidMount
        </span>
        <br />
        <span>언마운트 : componentWillUnmount</span>
      </div>
    );
  }
}

export default LifeCycleSample;
