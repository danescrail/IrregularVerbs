import React, { useState } from 'react';
import Card from '../Card/Card';

function BlockEndGame({ restartCard, listKnowLength, listRememberLength }) {
  return (
    <>
      <div className='block__end_game'>
        <button className='restart_game__btn-restart' onClick={() => restartCard()}>Начать сначала</button>
        <p>Ответов знаю:
          <span>{listKnowLength}</span>
        </p>
        <p>Ответов не знаю:
          <span>{listRememberLength}</span>
        </p>
      </div>
    </>
  )
}

export default BlockEndGame;