import React, { useState } from 'react';
import data from './components/english_project/words/words';
import './components/english_project/Card/ItemsCard.css';
import Card from './components/english_project/Card/Card';
import './components/english_project/BlockEnd/BlockEnd.css';
import BlockEnd from './components/english_project/BlockEnd/BlockEnd';
import './components/english_project/GetTable/GetTable.css';
import GetTable from './components/english_project/GetTable/GetTable';
import './components/english_project/BlockHappyEnd/BlockHappyEnd.css';
import Header from './components/english_project/Header/Header';
import './components/english_project/Header/Header.css';
import Main from './components/english_project/Main/Main';
import './components/english_project/Main/Main.css';
import Footer from './components/english_project/Footer/Footer'
import './components/english_project/Footer/Footer.css';


function App() {
  const [words, setWords] = useState(data);
  const [listKnow, setListKnow] = useState([]);
  const [listRemember, setListRemember] = useState([]);
  const [count, setCount] = useState(-1);
  const [items, setItems] = useState()
  const [translate, setTranslate] = useState(false);
  const [wordTranslate, setWordTranslate] = useState('');
  const [buttonFilter, setButtonFilter] = useState(true);
  const [page, setPage] = useState(1);

  const getRandomInt = (n, arr) => {
    return arr
      .map(x => ({ x, r: Math.random() }))
      .sort((a, b) => a.r - b.r)
      .map(a => a.x)
      .slice(0, n);
  }

  function showFilterItems() {
    let indexRemember = 0;
    let indexKnow = 0;
    let result = data.map((elem, index) => {
      if (Number(index) === listRemember[indexRemember] && index !== data.length - 1) {
        indexRemember++;
        return <tr key={index}>
          <td className='items__item-remember-active'>{elem.infinitive}</td>
          <td className='items__item-remember-active'>{elem.past_simple}</td>
          <td className='items__item-remember-active'>{elem.past_participle}</td>
          <td className='items__item-remember-active'>{elem.translate}</td>
        </tr>
      } else if (Number(index) === listKnow[indexKnow] && index !== data.length - 1) {
        indexKnow++;
        return <tr key={index}>
          <td className='items__item-know-active'>{elem.infinitive}</td>
          <td className='items__item-know-active'>{elem.past_simple}</td>
          <td className='items__item-know-active'>{elem.past_participle}</td>
          <td className='items__item-know-active'>{elem.translate}</td>
        </tr>
      } else if (index !== data.length - 1){
        return <tr key={index}>
          <td>{elem.infinitive}</td>
          <td>{elem.past_simple}</td>
          <td>{elem.past_participle}</td>
          <td>{elem.translate}</td>
        </tr>
      }
    });

    setButtonFilter(false);
    setItems(result);
    return <>
      {items}
    </>
  }

  function hideFilterItems() {
    setPage(3);
    let result = data.map((elem, index) => {
      if (index !== data.length - 1) {
        return <tr key={index}>
          <td>{elem.infinitive}</td>
          <td>{elem.past_simple}</td>
          <td>{elem.past_participle}</td>
          <td>{elem.translate}</td>
        </tr>
      }
    });

    setButtonFilter(true);
    setItems(result);
    return <>
      {items}
    </>
  }

  function shuffleArray(arrKnow, arrRemember) {
    let arr = Object.assign([], arrRemember);
    let percentElemsArrKnow = getRandomInt(4, arrKnow)

    for (let elem of percentElemsArrKnow) {
      arr.push(elem);
    }

    let result = [];
    for (let elem of arr) {
      result.push(words[elem])
    }

    return result;
  }

  function showTranslate() {
    setTranslate(true);

    return <>
      <Card
        words={words}
        count={count}
        translate={translate}
        wordTranslate={wordTranslate}
        showTranslate={showTranslate}
        createNextCard={createNextCard}
        addInArrRemember={addInArrRemember}
        restartCard={restartCard}
        restartWords={restartWords}
        listKnowLength={listKnow.length}
        listRememberLength={listRemember.length}
      />
    </>;
  }

  function createNextCard() {
    let res = count + 1;
    listKnow.push(res - 1);

    if (count < words.length) {
      setCount(res);
    }

    setTranslate(false);
    setWordTranslate(words[count + 1].translate);

    return <>
      <Card
        words={words}
        count={count + 1}
        translate={translate}
        wordTranslate={wordTranslate}
        showTranslate={showTranslate}
        createNextCard={createNextCard}
        addInArrRemember={addInArrRemember}
        restartCard={restartCard}
        restartWords={restartWords}
        listKnowLength={listKnow.length}
        listRememberLength={listRemember.length}
      />
    </>;
  }

  function addInArrRemember() {
    let res = count + 1;
    listRemember.push(res - 1);

    if (count < words.length) {
      setCount(res);
    }

    setTranslate(false);
    setWordTranslate(words[count + 1].translate);

    return <>
      <Card
        words={words}
        count={count + 1}
        translate={translate}
        wordTranslate={wordTranslate}
        showTranslate={showTranslate}
        createNextCard={createNextCard}
        addInArrRemember={addInArrRemember}
        restartCard={restartCard}
        restartWords={restartWords}
        listKnowLength={listKnow.length}
        listRememberLength={listRemember.length}
      />
    </>;
  }

  function restartWords() {
    setPage(2);
    setCount(0);
    setWords(data);
    setListKnow([]);
    setListRemember([]);

    return (
      <Card
        words={words}
        count={count}
        translate={translate}
        wordTranslate={wordTranslate}
        showTranslate={showTranslate}
        createNextCard={createNextCard}
        addInArrRemember={addInArrRemember}
        restartCard={restartCard}
        restartWords={restartWords}
        listKnowLength={listKnow.length}
        listRememberLength={listRemember.length}
      />
    )
  }

  function restartCard() {
    setCount(0);
    setWords(shuffleArray(listKnow, listRemember));
    setListKnow([]);
    setListRemember([]);
    return <>
      <Card
        words={words}
        count={count}
        translate={translate}
        wordTranslate={wordTranslate}
        showTranslate={showTranslate}
        createNextCard={createNextCard}
        addInArrRemember={addInArrRemember}
        restartCard={restartCard}
        restartWords={restartWords}
        listKnowLength={listKnow.length}
        listRememberLength={listRemember.length}
      />
    </>;
  }

  function setMainPage() {
    setPage(1);
  }

  return (
    <>
      <div className='header__container'>
        <Header
          hideFilterItems={hideFilterItems}
          restartWords={restartWords}
          setMainPage={setMainPage}
          page={page}
        />
      </div>

      {page === 3
        ? <GetTable
          listKnow={listKnow}
          listRemember={listRemember}
          items={items}
          buttonFilter={buttonFilter}
          hideFilterItems={hideFilterItems}
          showFilterItems={showFilterItems}
        />
        : ''
      }
      {page === 2
        ? (<div className='card__container'><>
          <Card
            words={words}
            count={count}
            translate={translate}
            wordTranslate={wordTranslate}
            showTranslate={showTranslate}
            createNextCard={createNextCard}
            addInArrRemember={addInArrRemember}
            restartCard={restartCard}
            restartWords={restartWords}
            listKnowLength={listKnow.length}
            listRememberLength={listRemember.length}
          />
        </>
        </div>)

        : ''
      }

      {page === 1
        ? <Main
        />
        : ''
      }
      <Footer />
    </>
  )

}

export default App;