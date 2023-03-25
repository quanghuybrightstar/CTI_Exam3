import axios from "axios"

//Get
export const getAllProductCategories =  () => {
    return axios.get('https://dummyjson.com/products/categories');
};

const instance = axios.create({
    baseURL: 'https://dummyjson.com/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  instance
    .get('products/category', {
        params: {
            id: 1,
        }
    })
    .then((res : object) => console.log(JSON.stringify(res))
    )


