import React, { useEffect, useState } from 'react';
import CouponValidity from 'Src/components/couponValidity';
import './App.scss';
import request from '../service/request';

export interface CouponInfo {
  description: string;
  money: number;
  status: string;
  restTime?: number;
  time: number[];
  title: string;
}

interface IProps {}

function App(props: IProps) {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    const res: any = await request({
      method: 'get',
    });
    setList(res.list);
  };
  return (
    <div className='app'>
      {list.map((item: CouponInfo) => {
        return (
          <div className='card'>
            <div className='discount'>
              {item.money}
              <span className='yuan'>元</span>
            </div>
            <div className='description'>
              <div className='title'>{item.title}</div>
              <div className='description'>{item.description}</div>
              <div>
                <CouponValidity {...item} />
              </div>
            </div>
            <div className='status'>{item.status}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
