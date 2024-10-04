import datas from '../test/test1.json';

function Ranking() {
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {datas.map((data) => (
                <li key={data.id}>
                    {data.item_name}: {data.item_price}yen
                </li>
                ))}
            </ul>
        </div>
    )
}
  
  export default Ranking;