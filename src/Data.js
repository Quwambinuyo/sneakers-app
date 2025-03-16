import Thumbnail1 from "./assets/images/image-product-1-thumbnail.jpg";
import Thumbnail2 from "./assets/images/image-product-2-thumbnail.jpg";
import Thumbnail3 from "./assets/images/image-product-3-thumbnail.jpg";
import Thumbnail4 from "./assets/images/image-product-4-thumbnail.jpg";

import Sneakers1 from "./assets/images/image-product-1.jpg";
import Sneakers2 from "./assets/images/image-product-2.jpg";
import Sneakers3 from "./assets/images/image-product-3.jpg";
import Sneakers4 from "./assets/images/image-product-4.jpg";

const Data = [
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    price: 105,
    discount: 50,
    quantity: 3,
    images: {
      img: Sneakers1,
      thumbnail: Thumbnail1,
    },
  },
  {
    id: 2,
    name: "Snow Limited Edition Sneakers",
    price: 412,
    discount: 30,
    quantity: 3,
    images: {
      img: Sneakers2,
      thumbnail: Thumbnail2,
    },
  },
  {
    id: 3,
    name: "Summer Limited Edition Sneakers",
    price: 530,
    discount: 60,
    quantity: 3,
    images: {
      img: Sneakers3,
      thumbnail: Thumbnail3,
    },
  },
  {
    id: 4,
    name: "Spring Limited Edition Sneakers",
    price: 805,
    discount: 70,
    quantity: 3,
    images: {
      img: Sneakers4,
      thumbnail: Thumbnail4,
    },
  },
];

export default Data;
