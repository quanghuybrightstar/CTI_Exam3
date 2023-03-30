import $axios from '@/src/service/axios';

const useApi = () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };

  return {
    getAccessToken: async (body?: ILoginData) => {
      const dataRes: IDataResLogin = {
        success: false,
        data: {},
      };
      await $axios
        .post('auth/login', body, config)
        .then((response) => {
          dataRes.success = true;
          dataRes.data = response.data;
          console.log(response.data);
        })
        .catch((error) => console.log(error));
      return dataRes;
    },
    getCategories: async () => {
      let data: string[] = [];
      await $axios
        .get('products/categories', config)
        .then((respone) => {
          data = respone.data;
        })
        .catch((error) => console.log(error));
      return data;
    },
    getProducts: async () => {
      let data: string[] = [];
      await $axios
        .get('products', config)
        .then((response) => {
          data = response.data.products;
        })
        .catch((error) => console.log(error));
      return data;
    },
    deleteProduct: async (productId: string) => {
      let success: boolean = false;
      await $axios
        .delete(`products/${productId}`)
        .then(() => {
          success = true;
        })
        .catch((error) => console.log(error));
      return success;
    },
    createProduct: async (body?: IBodyCreateProduct) => {
      let success: boolean = false;
      await $axios
        .post('product/add', body, config)
        .then(() => {
          success = true;
        })
        .catch((error) => console.log(error));
      return success;
    },
    updateProduct: async (body: IUpdateProduct, productID: string) => {
      let success: boolean = false;
      await $axios
        .put(`products/${productID}`, body, config)
        .then(() => {
          success = true;
        })
        .catch((error) => console.log(error));
      return success;
    },
  };
};

export { useApi };
