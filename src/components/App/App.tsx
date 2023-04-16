import React, {useEffect, useState} from 'react';
import {GridNumbers} from "../../types/data";
import TableNumbers from "../TableNumbers/TableNumbers";

const App: React.FC = () => {

    const [numbers, setNumbers] = useState<GridNumbers[]>([]);

    function generateNumbers (value: number) {
        const numberArr = []
        for (let i = 1; i <= value; i++) {
                numberArr.push({id: i, value: i})
        }
        return setNumbers(numberArr)
    }

    useEffect(() => {
        generateNumbers(50)
    },[])

  return (
    <div className="App">
        <div className="test-page-wrapper">
            <div className="test-page-header">
                <p className="test-page-header__timer">0.000</p>
                <p className="test-page-header__counter">1</p>
            </div>
            <div className="test-page-rules-title">
                <h3 className="test-page-rules-title__title">1 to 50</h3>
                <p className="test-page-rules-title__riles">Touching from 1 to 50 as fast as you can.</p>
                <button className="test-page-rules-title__restart-btn">Restart</button>
            </div>
            <div className="test-page-container">
                <div className="test-page-main-block">
                    <TableNumbers
                        numbers={numbers}
                    />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
