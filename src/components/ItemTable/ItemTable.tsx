import React from "react";
import {GridNumbers} from "../../types/data";

interface ItemTableProps {
    id: number,
    value: number
}

const ItemTable: React.FC<ItemTableProps> = (props) => {

    const {
        id,
        value
    } = props;

    return (
        <div key={id} className="item-table">
            <p>{value}</p>
        </div>
    )
}
export default ItemTable;