import React from 'react';
import './Ratio.css'
import tab from "../../img/tab.svg";

const Ratio = () => {
    return (
        <div className='Ratio'>
            <div className="Ratio__wrapper">
                <div className="Ratio__format">
                    <div className='Ratio__button'>
                        <div className='button-block'>
                            <span>Формат</span>
                            <div>
                                <img src={tab} alt="tab"/>
                            </div>
                        </div>
                    </div>
                </div>
                <table className='Table'>
                    <tr className='tableHeader'>
                        <th className='Table-season'>Сезон</th>
                        <th>И</th>
                        <th>Г</th>
                        <th>П</th>
                    </tr>
                    <tr>
                        <td>Сезон 2021/2020</td>
                        <td>5</td>
                        <td>218</td>
                        <td>146</td>
                    </tr>
                    <tr>
                        <td>Сезон 2020/2019</td>
                        <td>5</td>
                        <td>242</td>
                        <td>122</td>
                    </tr>
                    <tr>
                        <td>Сезон 2019/2018</td>
                        <td>6</td>
                        <td>173</td>
                        <td>164</td>
                    </tr>
                    <tr>
                        <td>Сезон 2018/2017</td>
                        <td>7</td>
                        <td>157</td>
                        <td>145</td>
                    </tr>
                    <tr>
                        <td>Сезон 2017/2016</td>
                        <td>9</td>
                        <td>174</td>
                        <td>102</td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default Ratio;