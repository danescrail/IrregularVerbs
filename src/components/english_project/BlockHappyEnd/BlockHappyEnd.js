import React, { useState } from 'react';
import Card from '../Card/Card';

function BlockHappyEnd({ restartWords}) {
  return (
    <>
      <div className='block__happy_end'>
        <p>Молодец все знаешь, 
          <br />
          задавать вам больше нечего</p>
        <button className='restart_game__btn-restart' onClick={() => restartWords()}>Сбросить все результаты</button>
      </div>
    </>
  )
}

export default BlockHappyEnd;