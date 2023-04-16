import React, {useEffect, useState} from 'react';
import {GridNumbers} from "../../types/data";
import ItemTable from "../ItemTable/ItemTable";

interface TableNumberProps {
    numbers: GridNumbers[]
}

const TableNumbers: React.FC<TableNumberProps> = (props) => {

    const {
        numbers
    } = props;

    const firstHalfNumbers = numbers.slice(0, 25);
    const [isTableItems, setTableItems] = useState<GridNumbers[]>([]);

    const randomSortFirstHalfNumbers = () => {
        let size : number = 24
        const pool = [];
        for(let i = 0; i <= size; i++) {
            let value: any =  firstHalfNumbers.splice(Math.floor(Math.random() * ((size - i) - 1) + 1),1);
            pool.push(value.pop());
        }
        return setTableItems(pool);
    }


    useEffect(() => {
        randomSortFirstHalfNumbers()
        },[numbers])


    console.log(isTableItems)

    return (
        <div className="table-numbers">
            {isTableItems.map((el, i) => {
                return (
                    <div key={i}>
                        <ItemTable
                            id={el?.id}
                            value={el?.value}
                        />
                    </div>
                )
            })}
        </div>
    )
}
export default TableNumbers;