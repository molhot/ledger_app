import React, { useEffect, useState } from 'react';
import Select from 'react-select';

function DropDown ({onMonthChange}) {
    const [selectedmonth, setSelectedmonth] = useState(1);
    useEffect(() => {
        setSelectedmonth(1);
      }, []);
    const month_options = [
        {value:1, label:"January"},
        {value:2, label:"February"},
        {value:3, label:"March"},
        {value:4, label:"April"},
        {value:5, label:"May"},
        {value:6, label:"June"},
        {value:7, label:"July"},
        {value:8, label:"August"},
        {value:9, label:"September"},
        {value:10, label:"October"},
        {value:11, label:"November"},
        {value:12, label:"December"},
    ]

    const handleMonthChange = (selectedOption) => {
        onMonthChange(selectedOption.value);
    };

    return (
        <div>
            <Select
                options={month_options}
                // // defaultValue = {1}
                // value={month_options.find(option => option.value === selectedmonth)}
                // // onChange = {SelectedMonthEvent}
                onChange = {handleMonthChange}
            />
        </div>
    );
};

export default DropDown;
// export default DropDown();

// import React, { useEffect, useState } from 'react';
// import Select from 'react-select';

// const DropDown = () => {
//     const [selectedMonth, setSelectedMonth] = useState(1);

//     useEffect(() => {
//         setSelectedMonth(1);
//     }, []);

//     const monthOptions = [
//         { value: 1, label: "January" },
//         { value: 2, label: "February" },
//         { value: 3, label: "March" },
//         { value: 4, label: "April" },
//         { value: 5, label: "May" },
//         { value: 6, label: "June" },
//         { value: 7, label: "July" },
//         { value: 8, label: "August" },
//         { value: 9, label: "September" },
//         { value: 10, label: "October" },
//         { value: 11, label: "November" },
//         { value: 12, label: "December" },
//     ];

//     const handleMonthChange = (selectedOption) => {
//         setSelectedMonth(selectedOption.value);
//     };

//     return (
//         <div>
//             <Select
//                 options={monthOptions}
//                 value={monthOptions.find(option => option.value === selectedMonth)}
//                 onChange={handleMonthChange}
//             />
//         </div>
//     );
// };

// export default DropDown;

