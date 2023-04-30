import React from "react";

interface ItemTableProps {
    id?: number,
    value?: number,
    startTimer: (id?: number) => void;
}

const ItemTable: React.FC<ItemTableProps> = (props) => {

    const {
        id,
        value,
        startTimer
    } = props;

    return (
        <div onClick={() => startTimer(id)} key={id} className="item-table">
            <p>{value}</p>
        </div>
    )
}
export default ItemTable;