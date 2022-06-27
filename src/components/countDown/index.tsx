import React, { Component } from 'react';
import './index.scss';
export default class CountDown extends Component<any, any> {
  timer: any;
  state = {
    hour: 0,
    minute: 0,
    second: 0,
  };
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const { endTime } = this.props || {};
    if (endTime) {
      this.countFun(endTime);
      let { hour, minute, second } = this.getInitTimeSate(endTime);
      console.log(hour, minute, second, 233);

      this.setState({
        hour: hour < 10 ? '0' + hour : hour,
        minute: minute < 10 ? '0' + minute : minute,
        second: second < 10 ? '0' + second : second,
      });
    }
  }
  // 组件卸载取消倒计时
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  getInitTimeSate(time: number) {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time - Math.floor(hour) * 3600) / 60);
    const second = Math.floor(time - (hour * 3600 + minute * 60));
    return { hour, minute, second };
  }

  countFun = (endTime: string) => {
    clearInterval(this.timer);
    let { hour, minute, second } = this.getInitTimeSate(endTime);

    this.timer = setInterval(() => {
      if (hour === 0) {
        if (minute !== 0 && second === 0) {
          this.setState({
            second: 59,
            minute: (this.state.minute -= 1),
          });
        } else if (minute === 0 && second === 0) {
          this.setState({
            second: 0,
          });
          clearInterval(this.timer);
        } else {
          this.setState({
            second: (this.state.second -= 1),
          });
        }
      } else {
        if (minute !== 0 && this.state.second === 0) {
          this.setState({
            second: 59,
            minute: (this.state.minute -= 1),
          });
        } else if (this.state.minute === 0 && this.state.second === 0) {
          this.setState({
            hour: (this.state.hour -= 1),
            second: 59,
            minute: 59,
          });
        } else {
          this.setState({
            second: (this.state.second -= 1),
          });
        }
      }
    }, 1000);
  };

  render() {
    return (
      <div className='expiryDate'>
        距结束：
        <span className='hour'>{this.state.hour}</span>:<span className='minute'>{this.state.minute}</span>:
        <span className='second'>{this.state.second}</span>
      </div>
    );
  }
}
