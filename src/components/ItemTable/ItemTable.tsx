import React from "react";

interface ItemTableProps {
    id?: number,
    value?: number,
    isCountTimer: number,
    startTimer: (id?: number) => void;
}

const ItemTable: React.FC<ItemTableProps> = (props) => {

    const {
        id,
        value,
        isCountTimer,
        startTimer
    } = props;

    return (
        <div onClick={() => startTimer(id)}
             key={id}
             className={id === isCountTimer ? "item-table-active" : "item-table"}>
            <p>{value}</p>
        </div>
    )
}
export default ItemTable;