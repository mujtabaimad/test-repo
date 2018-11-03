
import axios from 'axios';


export function test_api(){
    var result = axios.get("https://jsonplaceholder.typicode.com/todos/1");
    // console.log(result);
    return result;
}