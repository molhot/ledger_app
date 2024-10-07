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

const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novenber", "Discenber"];
const data1 = [12, 11, 14, 52, 14, 32, 36];

const data = {
    labels, // x軸のラベルの配列
    datasets: [
        {
            label: "Dataset 1", // 凡例
            data: data1,        // データの配列(labelsと要素数同じ)
            backgroundColor: "rgba(255, 99, 132, 0.5)" // グラフの棒の色
        }
    ]
};

function switch_graphing(selected_month){
    if (selected_month["selectedmonth"] in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]){
        return <ReadyRankingGraph />
    } else {
        return (
            <div>
                <h1>全体図</h1>
                <Bar options={options} data={data} />
            </div>
        )
    } 
}

function Ranking(){
    const [selectedmonth, setselectedmonth] = useState(null);

    const handleMonthChange = (month) => {
        setselectedmonth(month);
    }

    return (
        <div>
            <DropDown onMonthChange={handleMonthChange}/>
            {switch_graphing({selectedmonth})}
        </div>
    );
};
  
export default Ranking;