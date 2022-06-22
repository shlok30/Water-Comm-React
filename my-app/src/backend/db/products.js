import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "You Can WIN",
    author: "Shiv Khera",
    price: "5000",
    categoryName: "non-fiction",
    rating : "3",
    thumbnail : "https://res.cloudinary.com/bloomsbury-atlas/image/upload/w_568,c_scale/jackets/9781472965882.jpg"
  },
  {
    _id: uuid(),
    title: "The Exorcist",
    author: "William Peter",
    price: "3000",
    categoryName: "horror",
    rating : "2",
    thumbnail : "https://images-na.ssl-images-amazon.com/images/I/81q-n+f7cKL.jpg"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "1000",
    categoryName: "fiction",
    rating : "4",
    thumbnail : "https://images-na.ssl-images-amazon.com/images/I/71AdHA+qqwL.jpg"
  },
  {
    _id: uuid(),
    title: "Batman - Year 1",
    author: "Frank Miller",
    price: "1500",
    categoryName: "fiction",
    rating : "5",
    thumbnail : "https://images-na.ssl-images-amazon.com/images/I/71NaQHQCo0L.jpg"
  },
  {
    _id: uuid(),
    title: "The Secret",
    author: "Rhonda Byrne",
    price: "1750",
    categoryName: "non-fiction",
    rating : "5",
    thumbnail : "https://images-na.ssl-images-amazon.com/images/I/81MArWaiw1L.jpg"
  },
  {
    _id: uuid(),
    title: "Think like a Monk",
    author: "Jay Shetty",
    price: "2340",
    categoryName: "non-fiction",
    rating : "3",
    thumbnail : "https://images-na.ssl-images-amazon.com/images/I/81s6DUyQCZL.jpg"
  },
  {
    _id: uuid(),
    title: "Goosebumps",
    author: "R.L Stine",
    price: "5340",
    categoryName: "horror",
    rating : "3.5",
    thumbnail : "https://images-na.ssl-images-amazon.com/images/I/510MH1VDTJL.jpg"
  },
  {
    _id: uuid(),
    title: "Atomic Habits",
    author: "Shahrukh Khan",
    price: "3640",
    categoryName: "non-fiction",
    rating : "2",
    thumbnail : "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
  },
  {
    _id: uuid(),
    title: "The Amazing Spiderman",
    author: "Stan Lee",
    price: "1200",
    categoryName: "fiction",
    rating : "4",
    thumbnail : "https://m.media-amazon.com/images/M/MV5BMjMyOTM4MDMxNV5BMl5BanBnXkFtZTcwNjIyNzExOA@@._V1_FMjpg_UX1000_.jpg"
  },
];
