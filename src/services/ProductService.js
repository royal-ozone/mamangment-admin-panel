import ApiService from "./ApiService";


class ProductService extends ApiService {
    constructor() {
        super();
        this.path = "api/admin/product";
    }

    async addProduct(data) {
        try {
            let res = await this.post(`${this.path}`, data, { 'Content-Type': 'multipart/form-data', ...this.bearer(await this.token()) });
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getProducts(data) {
        try {
            let res = await this.get(this.path, data)
            return res
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateProductStatus(data){
        try {
            let result =  await this.patch( this.path, data)
            return result
        } catch (error) {
            return error
        }
    }

    async addProductPicture(data) {
        try {
            let res = await this.post(`${this.path}/picture`, data, { 'Content-Type': 'multipart/form-data', ...this.bearer(await this.token()) })
            return res
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteProductPicture(data) {
        try {
            let res = await this.delete(`${this.path}/picture`, data)
            return res
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateSizeAndQuantity(data) {
        try {
            let res = await this.patch(`${this.path}/quantityandsize`, data)
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async updateDiscount(data) {
        try {
            let res = await this.patch(`${this.path}/discount`, data)
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async getSearchData(data){
      try {
          let res = await this.get(`${this.path}/searchData/${JSON.stringify(data)}`, null);
          return res;
      } catch (error) {
          throw new Error(error.message);
      }
    }
    async getProduct(data){
        try {
            let res = await this.get(`${this.path}/${data}`);
            return res
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async updateProduct(data){
        try {
            let res = await this.update(`${this.path}`, data);
            return res 
        } catch (error) {
            throw new Error(error.message);
        }
    }
    async deleteProduct(data) {
        try {
            let res = await this.delete(`${this.path}`, data)
            return res
        } catch (error) {
            throw new Error(error.message);
        }
    }
    

}

export default new ProductService();