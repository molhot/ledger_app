import DropDown from "../../component/js/selectmonth.jsx"
import { ReadyRankingGraph, ReadyMonthRankingGraph } from './readyrankingdata.jsx';

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function switch_graphing(selected_month){
    if (selected_month["selectedmonth"] in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]){
        let month = 0;
        month = selected_month["selectedmonth"];
        return <ReadyMonthRankingGraph month = {month}></ReadyMonthRankingGraph>
    } else {
        return <ReadyRankingGraph />
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