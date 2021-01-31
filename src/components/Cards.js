import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Glimpse of our services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Process-1-How to go about ? how we handle everything with utmost care.'
              label='Medical-1'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Process-2-How to go about ? how we handle everything with utmost care.'
              label='Medical-2'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Process-3-How to go about ? how we handle everything with utmost care.'
              label='MMedical-3'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Process-4-How to go about ? how we handle everything with utmost care.'
              label='Medical-4'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Process-5-How to go about ? how we handle everything with utmost care.'
              label='Medical-5'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
