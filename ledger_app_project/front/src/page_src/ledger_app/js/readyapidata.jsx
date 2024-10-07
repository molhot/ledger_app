import items from '../test/test1.json';

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

function ReadyApiData() {
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

export default ReadyApiData;