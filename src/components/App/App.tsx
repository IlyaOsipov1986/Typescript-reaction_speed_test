import React, {useEffect, useState} from 'react';
import {GridNumbers} from "../../types/data";
import TableNumbers from "../TableNumbers/TableNumbers";

const App: React.FC = () => {

    const [numbers, setNumbers] = useState<GridNumbers[]>([]);
    const [isTableItems, setTableItems] = useState<GridNumbers[]>([]);
    const [isTableItemsSecond, setTableItemsSecond] = useState<GridNumbers[]>([]);
    const [isTimer, setTimer] = useState(false);
    const [isSecondsTimer, setSecondsTimer] = useState(0);
    const [isCountTimer, setCountTimer] = useState(1);

    const generateNumbers  = (value: number) => {
        const numberArr = []
        for (let i = 1; i <= value; i++) {
                numberArr.push({id: i, value: i})
        }
        return setNumbers(numberArr)
    }

    useEffect(() => {
        let isMounted = true;
            isMounted && generateNumbers(50)
        return () => {
            isMounted = false;
        }
    },[])

    const deleteItemsTable = (id?: number) => {
        const filteredItems = isTableItems.filter(el => el?.id !== id)
        setTableItems(filteredItems);
    }

    const onHandleGetItemSecondHalf = () => {
        const itemTableSecond: GridNumbers | undefined = isTableItemsSecond.shift()
        console.log(itemTableSecond)
        isTableItems.push({id: itemTableSecond?.id, value: itemTableSecond?.value})
    }

    const setRandomSortFirstHalf = (arrayNumbers: GridNumbers[]) => {
        setTableItems(arrayNumbers);
    }

    const setRandomSortSecondHalf = (arrayNumbers: GridNumbers[]) => {
        setTableItemsSecond(arrayNumbers);
    }

    const startTimer = (id?: number) => {
        const findFirstNumbers = numbers.find(el => el.id === id)
        if (!isTimer && findFirstNumbers?.id === 1) {
            setTimer(true)
            setCountTimer(isCountTimer + 1)
            deleteItemsTable(id)
            onHandleGetItemSecondHalf()
        } else if(isCountTimer === findFirstNumbers?.id) {
            setCountTimer(isCountTimer + 1)
            deleteItemsTable(id)
            onHandleGetItemSecondHalf()
        }
    }

    const stopTimer = () => {
        if (isTimer) {
            setTimer(false)
            setSecondsTimer(0);
            setCountTimer(1);
            generateNumbers(50);
        }
    }

    useEffect(() => {
        let isMounted = true;
        if (isTimer) {
            const timer = setInterval(() => {
                isMounted && setSecondsTimer(isSecondsTimer + 1)
            }, 100);
            return () => clearInterval(timer);
        }
        return () => {
            isMounted = false;
        }
    },[isTimer, isSecondsTimer])

    useEffect(() => {
        let isMounted = true;
        if (isCountTimer === 26) {
            isMounted && stopTimer()
        }
        return () => {
            isMounted = false;
        }
    },[isCountTimer])

  return (
    <div className="App">
        <div className="test-page-wrapper">
            <div className="test-page-header">
                <p className="test-page-header__timer">{isSecondsTimer}</p>
                <p className="test-page-header__counter">{isCountTimer}</p>
            </div>
            <div className="test-page-rules-title">
                <h3 className="test-page-rules-title__title">1 to 50</h3>
                <p className="test-page-rules-title__riles">Touching from 1 to 50 as fast as you can.</p>
                <button onClick={stopTimer} className="test-page-rules-title__restart-btn">Restart</button>
            </div>
            <div className="test-page-container">
                <div className="test-page-main-block">
                    <TableNumbers
                        isTableItems={isTableItems}
                        setRandomSortFirstHalf={setRandomSortFirstHalf}
                        setRandomSortSecondHalf={setRandomSortSecondHalf}
                        startTimer={startTimer}
                        numbers={numbers}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
