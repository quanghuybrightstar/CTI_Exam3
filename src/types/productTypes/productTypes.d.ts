interface IDataProduct {
  id: string;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}

interface IUpdateProduct {
  title?: string;
  description?: string;
  price?: string;
  category?: string;
}
