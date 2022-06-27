import React, { useEffect, Component, useState } from 'react';
import dayjs from 'dayjs';
import CountDown from '../countDown';
import './index.scss';

const myformat = 'MM-DD HH:mm';

function CouponValidity(props: any) {
  const { restTime, time } = props || {};

  const simpleRender = () => {
    if (restTime) {
      return <div>{<CountDown endTime={restTime} />}</div>;
    } else {
      return (
        <div className='expiryDate'>
          有效期：{dayjs(time[0]).format(myformat) + '-' + dayjs(time[1]).format(myformat)}
        </div>
      );
    }
  };

  return <div className='wraper'>{simpleRender()}</div>;
}

export default CouponValidity;
