import React, { useState } from 'react';
import data from "../words/words";

function GetTable({ listKnow, listRemember, items, buttonFilter, showFilterItems, hideFilterItems }) {
  return (
    <>
      <div className='block__filter-block'>
        <div className='filter-block__remember-block'>
          <span>Показать последние ответы "знаю" и "не знаю"</span>
          {buttonFilter
            ? <>
              <button onClick={() => showFilterItems()} className='remember-block__btn-remember'>Показать</button>
            </>
            : <>
              <button onClick={() => hideFilterItems()} className='remember-block__btn-remember'>Спрятать</button>
            </>
          }
        </div>
      </div>
      <div className='table__container'>
        <table>
          <thead>
            <tr>
              <td>infinitive</td>
              <td>past simple</td>
              <td>past participle</td>
              <td>translate</td>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default GetTable;