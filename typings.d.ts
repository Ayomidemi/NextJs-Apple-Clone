interface Category {
    _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "category";
  slug: {
    _type: "slug";
    current: string;
  };
  title: string;   
}

interface Product {
  filter(arg0: (item: any) => any): unknown;
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: "product";
  title: string;
  price: number;
  slug: {
    _type: "slug";
    current: string;
  };
  description: string;
  category: {
    _type: "reference";
    _ref: string;
  };
  image: Image[];
}

interface Image {
  _key: string;
  _type: "image";
  asset: {
    _ref(_ref: any): unknown;
    url: string;
  };
}

interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}