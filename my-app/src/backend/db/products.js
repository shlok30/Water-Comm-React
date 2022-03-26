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
    rating : "3"
  },
  {
    _id: uuid(),
    title: "You are Winner",
    author: "Junaid Qureshi",
    price: "3000",
    categoryName: "horror",
    rating : "2"
  },
  {
    _id: uuid(),
    title: "Think and Grow Rich",
    author: "Shiv Khera",
    price: "1000",
    categoryName: "fiction",
    rating : "4"
  },
  {
    _id: uuid(),
    title: "Batman - Year 1",
    author: "Frank Miller",
    price: "1500",
    categoryName: "fiction",
    rating : "5"
  },
  {
    _id: uuid(),
    title: "The Secret",
    author: "Rhonda Byrne",
    price: "1750",
    categoryName: "non-fiction",
    rating : "5"
  },
  {
    _id: uuid(),
    title: "Think like a Monk",
    author: "Jay Shetty",
    price: "2340",
    categoryName: "non-fiction",
    rating : "3"
  },
  {
    _id: uuid(),
    title: "Goosebumps",
    author: "R.L Stine",
    price: "5340",
    categoryName: "horror",
    rating : "3.5"
  },
  {
    _id: uuid(),
    title: "Atomic Habits",
    author: "Shahrukh Khan",
    price: "3640",
    categoryName: "non-fiction",
    rating : "2"
  },
  {
    _id: uuid(),
    title: "The Spectacular Spiderman",
    author: "Stan Lee",
    price: "1200",
    categoryName: "fiction",
    rating : "4"
  },
];
