import DropDown from "../../component/js/selectmonth.jsx"
import ReadyRankingGraph from './readyrankingdata.jsx';

import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top"
        },
        title: {
            display: true,
            text: "test char_js_2"
        }
    }
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const data1 = [12, 11, 14, 52, 14, 32, 36];
const data2 = [22, 31, 17, 32, 24, 62, 66];

const data = {
    labels, // x軸のラベルの配列
    datasets: [
        {
            label: "Dataset 1", // 凡例
            data: data1,        // データの配列(labelsと要素数同じ)
            backgroundColor: "rgba(255, 99, 132, 0.5)" // グラフの棒の色
        },
        {
            label: "Dataset 2",
            data: data2,
            backgroundColor: "rgba(53, 162, 235, 0.5)"
        }
    ]
};

    function Ranking(){
        const [selectedmonth, setselectedmonth] = useState(null);

        const handleMonthChange = (month) => {
            setselectedmonth(month);
        }

        return (
            <div>
                <DropDown onMonthChange={handleMonthChange}/>
                <Bar options={options} data={data} />
                <ReadyRankingGraph />
                <div>
                    {labels[selectedmonth]}
                </div>
            </div>
        );
};

// function Ranking() {
//     return (
//         <div>
//             <h1>User List</h1>
//             <ul>
//                 {datas.map((data) => (
//                 <li key={data.id}>
//                     {data.item_name}: {data.item_price}yen
//                 </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }
  
export default Ranking;