import React, { useState } from 'react';

function Header({ hideFilterItems, restartWords, setMainPage, page }) {
  return (
    <>
      <header>
        <ul>
          <li className='logo'>En</li>
          {page !== 1
            ? <li onClick={() => setMainPage()}>Главная</li>
            : <li onClick={() => setMainPage()} className='page-acitive'>Главная</li>
          }
          {page !== 2
            ? <li onClick={() => restartWords()}>Изучение слов</li>
            : <li onClick={() => restartWords()} className='page-acitive'>Изучение слов</li>
          }
          {page !== 3
            ? <li onClick={() => hideFilterItems()}>Таблица</li>
            : <li onClick={() => hideFilterItems()} className='page-acitive'>Таблица</li>
          }
        </ul>
      </header>
    </>
  )
}

export default Header;