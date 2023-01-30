import axios from "axios";
import {syncAllProducts} from "./index";
const baseUrl = 'http://localhost:3000'

export const getAllProduct = (num)=>{
    const config = {
        method: 'post',
        url: baseUrl+'/api/products/get-all-product?limit=' + num,
        headers: {}
    };


    axios(config)
        .then(function (response) {

            console.log("a",JSON.stringify(response.data.data[0]))
            // let data = JSON.stringify(response.data.data).map((item)=>{id:item._id})
            syncAllProducts(response.data.data);
            return response.data.data
        })
        .catch(function (error) {
            console.log(error);
        });
}

