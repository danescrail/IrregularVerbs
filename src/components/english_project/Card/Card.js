import React, { useState } from 'react';
import BlockEnd from '../BlockEnd/BlockEnd';
import BlockHappyEnd from '../BlockHappyEnd/BlockHappyEnd';

function Card({ words, count, translate, wordTranslate, showTranslate, createNextCard, addInArrRemember, restartCard, listKnowLength, listRememberLength, restartWords }) {
  return (
    <>
      {count !== words.length - 1
        ? <div className={!translate ? 'card-items' : 'card-items-animation'}>
          <div>
            <h3>infinitive</h3>
            <span>{words[count].infinitive}</span>
          </div>
          <div>
            <h3>past simple</h3>
            <span>{words[count].past_simple}</span>
          </div>
          <div>
            <h3>past participle</h3>
            <span>{words[count].past_participle}</span>
          </div>
          <div>
            <span>{translate ? wordTranslate : ''}</span>
            <>
              {
                !translate
                  ? <>
                    <button className='items__btn-know' onClick={() => createNextCard()}>Знаю</button>
                    <button className='items__btn-remember' onClick={() => showTranslate()}>Не знаю</button>
                  </>
                  : <button className='items__btn-remember' onClick={() => addInArrRemember()}>Дальше</button>
              }
            </>
          </div>
        </div>
        : (
          <>
            {listRememberLength !== 0
              ? <div>
                <BlockEnd
                  restartCard={restartCard}
                  listKnowLength={listKnowLength}
                  listRememberLength={listRememberLength}
                />
              </div>
              : <>
                <BlockHappyEnd
                  restartWords={restartWords}
                />
              </>
            }
          </>
        )
      }
    </>
  )
}

export default Card;