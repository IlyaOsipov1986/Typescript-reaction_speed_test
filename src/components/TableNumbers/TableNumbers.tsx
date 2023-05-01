import React, {useEffect, useState} from 'react';
import {GridNumbers} from "../../types/data";
import ItemTable from "../ItemTable/ItemTable";

interface TableNumberProps {
    startTimer: (id?: number) => void;
    numbers: GridNumbers[],
    isTableItems: GridNumbers[],
    isCountTimer: number,
    setRandomSortFirstHalf: ([]) => void,
    setRandomSortSecondHalf: ([]) => void
}

const TableNumbers: React.FC<TableNumberProps> = (props) => {

    const {
        numbers,
        startTimer,
        isTableItems,
        isCountTimer,
        setRandomSortFirstHalf,
        setRandomSortSecondHalf
    } = props;

    const firstHalfNumbers = numbers.slice(0, 25);
    const secondHalfNumber = numbers.slice(25);

    const randomSortFirstHalfNumbers = () => {
        let size : number = 24
        const pool = [];
        for(let i = 0; i <= size; i++) {
            let value: any =  firstHalfNumbers.splice(Math.floor(Math.random() * ((size - i) - 1) + 1),1);
            pool.push(value.pop());
        }
        return setRandomSortFirstHalf(pool);
    }

    const randomSortSecondHalfNumbers = () => {
        let size : number = 24
        const pool = [];
        for(let i = 0; i <= size; i++) {
            let value: any =  secondHalfNumber.splice(Math.floor(Math.random() * ((size - i) - 1) + 1),1);
            pool.push(value.pop());
        }
        return setRandomSortSecondHalf(pool);
    }

    useEffect(() => {
        let isMounted = true;
            isMounted && randomSortFirstHalfNumbers()
            isMounted && randomSortSecondHalfNumbers()
        return () => {
            isMounted = false;
            }
        },[numbers])

    return (
        <div className="table-numbers">
            {isTableItems.map((el, i) => {
                return (
                    <div key={i}>
                        <ItemTable
                            id={el?.id}
                            value={el?.value}
                            isCountTimer={isCountTimer}
                            startTimer={startTimer}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default TableNumbers;