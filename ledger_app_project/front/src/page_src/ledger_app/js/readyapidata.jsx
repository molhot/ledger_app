import items from '../test/test1.json';

function ReadyApiData() {
    let data_dict = []
    items.forEach((item) => (
        data_dict.push({
                "item_name":item.item_name,
                "item_price":item.item_price,
                "item_registday":item.item_regist_data
            })
        )
    )
    return  data_dict
};

export default ReadyApiData;