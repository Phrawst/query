export interface QProductList{
    id: String;
    brand: String;
    model: String;
    price: Number;
    discount: String;
    discounted_price: Number;
    color: String;
    storage: String;
    spec: {
      display: String;
      screen_width: String;
      screen_height: String;
    };
}