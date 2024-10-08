import items from '../test/test1.json';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ArrangeDataFormat(date){
    date = new Date(date);
    // console.log(date);
    if(date.getMinutes() < 10){
        date = date.getFullYear()+"/"+(date.getMonth()%12+1)+"/"+date.getDate()+" "+date.getHours()+":0"+date.getMinutes()
    } else {
        date = date.getFullYear()+"/"+(date.getMonth()%12+1)+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()
    }

    return date;
}

export function ReadyApiData() {
    let data_dict = []
    items.forEach((item) => {
        let item_name = item.item_name;
        let item_price = item.item_price;
        let item_regist_date = item.item_regist_data
        ArrangeDataFormat(item.item_regist_data)
        data_dict.push({
                "item_name":item_name,
                "item_price":item_price,
                "item_registday":ArrangeDataFormat(item_regist_date)
            })
        }
    )
    return  data_dict
};

export const Content = () => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/item/`)
            .then(res => {
                console.log(res.data);
                setUserInfo(res.data);
            });
    }, []);

    return (
        <div>
            <div>
                {userInfo.map(user => (
                    <div key={user.user_id}>
                        {user.user_id}
                    </div>
                ))}
            </div>
        </div>
    );
};