import React from 'react';
import './Ratio.css'
import tab from "../../img/tab.svg";
import Tab from "../Statistic/Tab/Tab";
import TabArrow from "../shared/Tab/TabArrow";

const Ratio = () => {

    const arr = [
        {season: '2017/2016', games: 9, goals: 174, pas: 122},
        {season: '2018/2017', games: 7, goals: 157, pas: 145},
        {season: '2018/2019', games: 6, goals: 173, pas: 132},
        {season: '2020/2019', games: 5, goals: 252, pas: 98},
        {season: '2020/2021', games: 5, goals: 133, pas: 199},
    ]

    const [sortData, setSortData] = React.useState(arr);
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
                        <div className='button-block'>
                            <span>Формат</span>
                           <TabArrow />
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