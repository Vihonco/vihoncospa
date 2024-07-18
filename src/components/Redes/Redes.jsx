import React from 'react';
import Face from '../../assets/redes/face.png';
import insta from '../../assets/redes/insta.png';
import tik from '../../assets/redes/tik.png';
import x from '../../assets/redes/x.png';
import './redes.css';

export default function Redes() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-auto'>
          <img src={Face} alt='Facebook' className='img-fluid redes-icon' />
        </div>
        <div className='col-auto'>
          <img src={insta} alt='Instagram' className='img-fluid redes-icon' />
        </div>
        <div className='col-auto'>
          <img src={tik} alt='TikTok' className='img-fluid redes-icon' />
        </div>
        <div className='col-auto'>
          <img src={x} alt='X' className='img-fluid redes-icon' />
        </div>
      </div>
    </div>
  );
}
