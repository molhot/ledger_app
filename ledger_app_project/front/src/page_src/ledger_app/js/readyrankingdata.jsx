// import datas from '../test/test1.json';
// import DropDown from "../../component/js/selectmonth.jsx"

import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ReadyApiData from "./readyapidata.jsx"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ReadyRankingGraph(limit_month){
    let ApiData = ReadyApiData()
    console.log(ApiData);
    return (
            <div>
                {ApiData.map((data, index) => (
                    <div key={index}>
                        <p>Item Name: {data.item_name}</p>
                        <p>Item Price: {data.item_price}</p>
                        <p>Registration Date: {data.item_registday}</p>
                    </div>
                ))}
            </div>
);}
    // const labels = ["January", "February", "March", "April", "May", "June", "July"];
    // const data1 = [12, 11, 14, 52, 14, 32, 36];
    // const data2 = [22, 31, 17, 32, 24, 62, 66];

    // const options = {
    //     responsive: true,
    //     plugins: {
    //         legend: {position: "top"},
    //         title: {display: true, text: "test char_js_2"}
    //     }
    // };
    // const data = {
    //     labels, // x軸のラベルの配列
    //     datasets: [
    //         {label: "Dataset 1", data: data1, backgroundColor: "rgba(255, 99, 132, 0.5)"},
    //         {label: "Dataset 2", data: data2, backgroundColor: "rgba(53, 162, 235, 0.5)"}
    //     ]
    // };
    

export default ReadyRankingGraph;