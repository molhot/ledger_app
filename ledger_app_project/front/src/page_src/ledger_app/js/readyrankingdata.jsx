// import datas from '../test/test1.json';
// import DropDown from "../../component/js/selectmonth.jsx"

import React from 'react';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ReadyApiData from "./readyapidata.jsx"
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function GetMonthFromDate(date){
    date = new Date(date);
    return date.getMonth();
}

function GetDayFromDate(date){
    date = new Date(date);
    return date.getDate();
}

export function ReadyRankingGraph(){
    const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novenber", "Discenber"];
    const options = {
        responsive: true,
        plugins: {legend: {position: "top"},title: {display: true, text: "test char_js_2"}}
    };
    let ApiData = ReadyApiData()
    let DateMonthList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ApiData.map((data) => {
        DateMonthList[GetMonthFromDate(data.item_registday)] += data.item_price;
    })
    const data = {
        labels, // x軸のラベルの配列
        datasets: [
            {label: "Dataset 1", data: DateMonthList, backgroundColor: "rgba(255, 99, 132, 0.5)"}
        ]
    };
    return <Bar options={options} data={data} />;
};

export function ReadyMonthRankingGraph(month){
    console.log(month);
    let initialArray = [];
    const options = {
        responsive: true,
        plugins: {legend: {position: "top"},title: {display: true, text: "test char_js_2"}}
    };
    let ApiData = ReadyApiData()
    if (month - 1 === 2){
        initialArray = Array(28).fill(0);
    }
    else if (month - 1 in [2, 4, 6, 9, 11]){
        initialArray = Array(30).fill(0);
    } else {
        initialArray = Array(31).fill(0);
    }
    const labels = [];
    let day = 1
    initialArray.forEach(() => {
        labels.push(month["month"] + '/' + day);
        day += 1;
    })
    ApiData.map((data) => {
        if (GetMonthFromDate(data.item_registday) === month['month']){
            initialArray[GetDayFromDate(data.item_registday)] += data.item_price;
        }
    })
    const data = {
        labels, // x軸のラベルの配列
        datasets: [
            {label: "Dataset 1", data: initialArray, backgroundColor: "rgba(255, 99, 132, 0.5)"}
        ]
    };
    return <Bar options={options} data={data} />;
};  
