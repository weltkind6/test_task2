import React from 'react';
import './Ratio.css'
import TabArrow from "../shared/TabArrow/TabArrow";
import useRotate from "../hooks/useRotate";
import state from "../state";

const Ratio = () => {

    const [rotateTab, getRotateTab] = useRotate(false)


    const [sortData, setSortData] = React.useState(state.arr);
    const [toggle, setToggle] = React.useState(false);



    const sortDataHandler = field => {
        setToggle(!toggle);
        if (toggle) {
            setSortData([...sortData.sort((a, b) => a[field] - b[field])]);
        } else setSortData([...sortData.sort((a, b) => b[field] - a[field])]);
    }

    return (
        <div className='Ratio'>
            <div className="Ratio__wrapper">
                <div className="Ratio__format">
                    <div className='Ratio__button'>
                        <div className='button-block' onClick={getRotateTab}>
                            <span>Формат</span>
                           <TabArrow rotateTab={rotateTab}/>
                        </div>
                    </div>
                </div>
                <table className='Table'>
                    <tr className='tableHeader'>
                        <th onClick={() => {
                            sortDataHandler('seasons')
                        }} className='Table-season'>Сезон
                        </th>
                        <th onClick={() => {
                            sortDataHandler('games')
                        }}>И
                        </th>
                        <th onClick={() => {
                            sortDataHandler('goals')
                        }}>Г
                        </th>
                        <th onClick={() => {
                            sortDataHandler('pas')
                        }}>П
                        </th>
                    </tr>
                    {sortData.map((i, index) =>
                        <tr>
                            <td>{i.season}</td>
                            <td>{i.games}</td>
                            <td>{i.goals}</td>
                            <td>{i.pas}</td>
                        </tr>)}
                </table>
            </div>
        </div>
    );
};

export default Ratio;