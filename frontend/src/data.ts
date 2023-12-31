import { Food } from './app/shared/models/Food';
import { Tag } from './app/shared/models/Tag';

export const sample_foods: Food[] = [
    {
        id:'1',
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: 'assets/food-1.jpg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
      {
        id:'2',
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: 'assets/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id:'3',
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: 'assets/food-3.jpg',
        tags: ['fastfood', 'Hamburger'],
      },
      {
        id:'4',
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: 'assets/food-4.jpg',
        tags: ['fastfood', 'Fry'],
      },
      {
        id:'5',
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: 'assets/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id:'6',
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: 'assets/food-6.jpg',
        tags: ['fastfood', 'Pizza', 'Lunch'],
      },
      {
        id: '7',
        name: 'Sushi',
        price: 15,
        cookTime: '25-35',
        favorite: true,
        origins: ['japan'],
        stars: 4.8,
        imageUrl: 'assets/food-7.jpg',
        tags: ['Sushi', 'Dinner','Japanese'],
    },
    {
        id: '8',
        name: 'Pasta Carbonara',
        price: 12,
        cookTime: '20-25',
        favorite: false,
        origins: ['italy'],
        stars: 4.2,
        imageUrl: 'assets/food-8.jpg',
        tags: ['Italian', 'Dinner'],
    },
    {
      id: '9',
      name: 'Tacos',
      price: 8,
      cookTime: '15-20',
      favorite: true,
      origins: ['mexico'],
      stars: 4.5,
      imageUrl: 'assets/food-9.jpg',
      tags: ['Mexican', 'Dinner'],
  },

  {
      id: '10',
      name: 'Sushi Rolls',
      price: 14,
      cookTime: '30-40',
      favorite: false,
      origins: ['japan'],
      stars: 4.7,
      imageUrl: 'assets/food-10.jpg',
      tags: ['Sushi', 'Dinner', 'Japanese'],
  },

  {
      id: '11',
      name: 'Pancakes',
      price: 6,
      cookTime: '10-15',
      favorite: true,
      origins: ['us'],
      stars: 4.0,
      imageUrl: 'assets/food-11.jpg',
      tags: ['Breakfast'],
  },

  {
      id: '12',
      name: 'Spaghetti Bolognese',
      price: 11,
      cookTime: '25-30',
      favorite: false,
      origins: ['italy'],
      stars: 4.3,
      imageUrl: 'assets/food-12.jpg',
      tags: ['Italian', 'Dinner'],
  },

  {
      id: '13',
      name: 'Sashimi',
      price: 18,
      cookTime: '20-25',
      favorite: true,
      origins: ['japan'],
      stars: 4.9,
      imageUrl: 'assets/food-13.jpg',
      tags: ['Sushi', 'Dinner','Japanese'],
  },

  {
      id: '14',
      name: 'Burrito',
      price: 9,
      cookTime: '15-20',
      favorite: false,
      origins: ['mexico'],
      stars: 4.2,
      imageUrl: 'assets/food-14.jpg',
      tags: ['Mexican', 'Lunch'],
  },

  {
      id: '15',
      name: 'Omelette',
      price: 7,
      cookTime: '10-15',
      favorite: true,
      origins: ['various'],
      stars: 4.1,
      imageUrl: 'assets/food-15.jpg',
      tags: ['Breakfast'],
  },
  {
    id: '16',
    name: 'Ramen',
    price: 9,
    cookTime: '15-20',
    favorite: true,
    origins: ['japan'],
    stars: 4.6,
    imageUrl: 'assets/food-16.jpg',
    tags: ['Japanese', 'Dinner'],
},
{
    id: '17',
    name: 'Cesar Salad',
    price: 8,
    cookTime: '10-15',
    favorite: false,
    origins: ['mexico', 'us'],
    stars: 3.8,
    imageUrl: 'assets/food-17.jpg',
    tags: ['Salad', 'Lunch'],
},
{
    id: '18',
    name: 'Croissant',
    price: 3,
    cookTime: '10-12',
    favorite: true,
    origins: ['france'],
    stars: 4.2,
    imageUrl: 'assets/food-18.jpg',
    tags: ['French', 'Breakfast'],
},
{
    id: '19',
    name: 'Tofu Stir-Fry',
    price: 10,
    cookTime: '20-25',
    favorite: false,
    origins: ['china'],
    stars: 3.9,
    imageUrl: 'assets/food-19.jpg',
    tags: ['Asian', 'Dinner'],
},
{
    id: '20',
    name: 'Fajitas',
    price: 12,
    cookTime: '25-30',
    favorite: true,
    origins: ['mexico'],
    stars: 4.4,
    imageUrl: 'assets/food-20.jpg',
    tags: ['Mexican', 'Dinner'],
    
},
{
  id: '21',
  name: 'Cheeseburger',
  price: 8,
  cookTime: '10-15',
  favorite: true,
  origins: ['us'],
  stars: 4.5,
  imageUrl: 'assets/food-21.jpg',
  tags: ['fastfood', 'Hamburger', 'Lunch'],
},
{
  id: '22',
  name: 'Philly Cheesesteak',
  price: 11,
  cookTime: '15-20',
  favorite: false,
  origins: ['us'],
  stars: 4.2,
  imageUrl: 'assets/food-22.jpg',
  tags: ['fastfood', 'Dinner'],
},
{
  id: '23',
  name: 'Miso Ramen',
  price: 10,
  cookTime: '20-25',
  favorite: true,
  origins: ['japan'],
  stars: 4.6,
  imageUrl: 'assets/food-23.jpg',
  tags: ['Japanese', 'Dinner', 'Soup'],
},
{
  id: '24',
  name: 'Churros',
  price: 4,
  cookTime: '10-12',
  favorite: false,
  origins: ['spain'],
  stars: 3.8,
  imageUrl: 'assets/food-24.jpg',
  tags: ['Mexican'],
},
{
  id: '25',
  name: 'Tuna Salad',
  price: 9,
  cookTime: '10-15',
  favorite: true,
  origins: ['various'],
  stars: 4.1,
  imageUrl: 'assets/food-25.jpg',
  tags: ['Salad', 'Lunch'],
},
{
  id: '26',
  name: 'Gyoza',
  price: 7,
  cookTime: '15-20',
  favorite: false,
  origins: ['japan'],
  stars: 4.3,
  imageUrl: 'assets/food-26.jpg',
  tags: ['Japanese', 'Dinner'],
},
{
  id: '27',
  name: 'Scone',
  price: 3,
  cookTime: '10-12',
  favorite: true,
  origins: ['uk'],
  stars: 3.9,
  imageUrl: 'assets/food-27.jpg',
  tags: ['Breakfast'],
},
{
  id: '28',
  name: 'Veggie Wrap',
  price: 6,
  cookTime: '15-20',
  favorite: false,
  origins: ['various'],
  stars: 3.6,
  imageUrl: 'assets/food-28.jpg',
  tags: ['Lunch'],
},
{
  id: '29',
  name: 'Kimchi Fried Rice',
  price: 11,
  cookTime: '20-25',
  favorite: true,
  origins: ['korea'],
  stars: 4.5,
  imageUrl: 'assets/food-29.jpg',
  tags: ['Dinner', 'Asian'],
},
{
  id: '30',
  name: 'Pancetta Pasta',
  price: 12,
  cookTime: '25-30',
  favorite: false,
  origins: ['italy'],
  stars: 4.0,
  imageUrl: 'assets/food-30.jpg',
  tags: ['Italian', 'Dinner'],
},

    ];

    export const sample_tags: Tag[] = [
      { name: 'All', count: 0 },
      { name: 'fastfood', count: 0 },
      { name: 'Pizza', count: 0 },
      { name: 'Lunch', count: 0 },
      { name: 'SlowFood', count: 0 }, 
      { name: 'Hamburger', count: 0 },
      { name: 'Fry', count: 0 },
      { name: 'Soup', count: 0 },
      { name: 'Dinner', count: 0 }, 
      { name: 'Italian', count: 0 },
      { name: 'Mexican', count: 0 },
      { name: 'Breakfast', count: 0 }, 
      { name: 'Sushi', count: 0 }, 
      { name: 'Japanese', count: 0 },
      { name: 'Salad', count: 0 },
      { name: 'French', count: 0 },
      { name: 'Asian', count: 0 },
  ];

  for (const tag of sample_tags) {
    tag.count = sample_foods.reduce((count, food) => {
      return count + (food.tags?.includes(tag.name) ? 1 : 0);
    }, 0);
  }
  
  const allTagCount = sample_foods.length;
  sample_tags[0].count = allTagCount;
  
  