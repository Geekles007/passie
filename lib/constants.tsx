import {
  ChartBar,
  CirclePlus,
  House,
  Plus,
  Settings,
  Star,
} from 'lucide-react';

export const menuSlide = {
  initial: {
    x: 'calc(100% + 100px)',
  },
  show: {
    x: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
  hide: {
    x: 'calc(100% + 100px)',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: {
    x: '80px',
  },
  show: (i: number) => ({
    x: '0%',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  hide: (i: number) => ({
    x: '80px',
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], day: 0.05 * i },
  }),
};

export const headers = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Our works',
    href: '/works',
  },
  {
    title: 'Who are we?',
    href: '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const iconSize = 18;

export const NAV_ITEMS = [
  {
    key: 'home',
    title: 'Home',
    icon: <House size={iconSize} />,
  },
  {
    key: 'stats',
    title: 'Stats',
    icon: <ChartBar size={iconSize} />,
  },
  {
    key: 'add',
    title: 'Add',
    icon: <Plus size={iconSize} />,
  },
  {
    key: 'favorites',
    title: 'Favorites',
    icon: <Star size={iconSize} />,
  },
  {
    key: 'settings',
    title: 'Settings',
    icon: <Settings size={iconSize} />,
  },
];

export const LINK_LIST = [
  {
    group: 'Group 1',
    links: [
      {
        title: 'Home Page',
        key: 'home',
        href: 'https://www.example.com/home',
        icon: '<Home />',
      },
      {
        title: 'About Us',
        key: 'about',
        href: 'https://www.example.com/about',
        icon: '<Info />',
      },
      {
        title: 'Our Blog',
        key: 'blog',
        href: 'https://www.example.com/blog',
        icon: '<BookOpen />',
      },
    ],
  },
  {
    group: 'Group 2',
    links: [
      {
        title: 'Our Services',
        key: 'services',
        href: 'https://www.example.com/services',
        icon: '<Settings />',
      },
      {
        title: 'Contact Us',
        key: 'contact',
        href: 'https://www.example.com/contact',
        icon: '<Mail />',
      },
      {
        title: 'Frequently Asked Questions',
        key: 'faq',
        href: 'https://www.example.com/faq',
        icon: '<HelpCircle />',
      },
      {
        title: 'Customer Support',
        key: 'support',
        href: 'https://www.example.com/support',
        icon: '<LifeBuoy />',
      },
      {
        title: 'Career Opportunities',
        key: 'careers',
        href: 'https://www.example.com/careers',
        icon: '<Briefcase />',
      },
    ],
  },
];

export const colors = [
  '#FF5733',
  '#33FF57',
  '#3357FF',
  '#EB8317',
  '#FF6500',
  '#433878',
  '#FAF7F0',
  '#D2FF72',
  '#15B392',
  '#EE66A6',
  '#FF8A8A',
  '#7C00FE',
];

export const BIRTHDAYS = [
  {
    month: 'January',
    people: [
      {
        name: 'Alice',
        age: 30,
        birthday: '1994-01-15',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_1.png',
        gifts: [
          { name: 'Book', price: 15 },
          { name: 'Watch', price: 120 },
        ],
      },
      {
        name: 'Bob',
        age: 25,
        birthday: '1999-01-22',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_2.png',
        gifts: [
          { name: 'Headphones', price: 80 },
          { name: 'Backpack', price: 50 },
        ],
      },
    ],
  },
  {
    month: 'February',
    people: [
      {
        name: 'Charlie',
        age: 28,
        birthday: '1996-02-10',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_3.png',
        gifts: [
          { name: 'Shoes', price: 60 },
          { name: 'Sunglasses', price: 100 },
        ],
      },
      {
        name: 'Diana',
        age: 32,
        birthday: '1992-02-25',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_4.png',
        gifts: [
          { name: 'Perfume', price: 70 },
          { name: 'Handbag', price: 150 },
        ],
      },
      {
        name: 'Ethan',
        age: 29,
        birthday: '1995-02-14',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_5.png',
        gifts: [
          { name: 'Watch', price: 200 },
          { name: 'Wallet', price: 50 },
        ],
      },
      {
        name: 'Fiona',
        age: 27,
        birthday: '1997-02-08',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_6.png',
        gifts: [
          { name: 'Necklace', price: 120 },
          { name: 'Earrings', price: 80 },
        ],
      },
      {
        name: 'George',
        age: 31,
        birthday: '1993-02-20',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_7.png',
        gifts: [
          { name: 'Backpack', price: 70 },
          { name: 'Travel Kit', price: 40 },
        ],
      },
      {
        name: 'Hannah',
        age: 26,
        birthday: '1998-02-28',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_8.png',
        gifts: [
          { name: 'Fitness Tracker', price: 100 },
          { name: 'Yoga Mat', price: 30 },
        ],
      },
    ],
  },
  {
    month: 'March',
    people: [
      {
        name: 'Eve',
        age: 27,
        birthday: '1997-03-05',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_5.png',
        gifts: [
          { name: 'Laptop', price: 1000 },
          { name: 'Notebook', price: 20 },
        ],
      },
      {
        name: 'Frank',
        age: 29,
        birthday: '1995-03-18',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_6.png',
        gifts: [
          { name: 'Camera', price: 500 },
          { name: 'Tripod', price: 80 },
        ],
      },
    ],
  },
  {
    month: 'April',
    people: [
      {
        name: 'Grace',
        age: 26,
        birthday: '1998-04-12',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_7.png',
        gifts: [
          { name: 'Tablet', price: 300 },
          { name: 'Stylus', price: 30 },
        ],
      },
      {
        name: 'Henry',
        age: 31,
        birthday: '1993-04-27',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_8.png',
        gifts: [
          { name: 'Smartwatch', price: 200 },
          { name: 'Fitness Tracker', price: 100 },
        ],
      },
    ],
  },
  {
    month: 'May',
    people: [
      {
        name: 'Ivy',
        age: 24,
        birthday: '2000-05-03',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_9.png',
        gifts: [
          { name: 'E-reader', price: 120 },
          { name: 'Books', price: 40 },
        ],
      },
      {
        name: 'Jack',
        age: 27,
        birthday: '1997-05-19',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_10.png',
        gifts: [
          { name: 'Gaming Console', price: 400 },
          { name: 'Games', price: 60 },
        ],
      },
    ],
  },
  {
    month: 'June',
    people: [
      {
        name: 'Kate',
        age: 29,
        birthday: '1995-06-07',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_11.png',
        gifts: [
          { name: 'Bicycle', price: 500 },
          { name: 'Helmet', price: 50 },
        ],
      },
      {
        name: 'Leo',
        age: 33,
        birthday: '1991-06-23',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_12.png',
        gifts: [
          { name: 'Guitar', price: 300 },
          { name: 'Music Lessons', price: 100 },
        ],
      },
    ],
  },
  {
    month: 'July',
    people: [
      {
        name: 'Mia',
        age: 28,
        birthday: '1996-07-14',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_13.png',
        gifts: [
          { name: 'Camera', price: 500 },
          { name: 'Photo Album', price: 30 },
        ],
      },
      {
        name: 'Noah',
        age: 26,
        birthday: '1998-07-29',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_14.png',
        gifts: [
          { name: 'Drone', price: 800 },
          { name: 'Accessories', price: 100 },
        ],
      },
      {
        name: 'Olivia',
        age: 25,
        birthday: '1999-07-11',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_15.png',
        gifts: [
          { name: 'Smartphone', price: 700 },
          { name: 'Case', price: 20 },
        ],
      },
      {
        name: 'Paul',
        age: 30,
        birthday: '1994-07-26',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_16.png',
        gifts: [
          { name: 'Watch', price: 150 },
          { name: 'Wallet', price: 50 },
        ],
      },
      {
        name: 'Quinn',
        age: 27,
        birthday: '1997-07-09',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png',
        gifts: [
          { name: 'Backpack', price: 60 },
          { name: 'Travel Kit', price: 40 },
        ],
      },
    ],
  },
  {
    month: 'August',
    people: [
      {
        name: 'Olivia',
        age: 25,
        birthday: '1999-08-11',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_15.png',
        gifts: [
          { name: 'Smartphone', price: 700 },
          { name: 'Case', price: 20 },
        ],
      },
      {
        name: 'Paul',
        age: 30,
        birthday: '1994-08-26',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_16.png',
        gifts: [
          { name: 'Watch', price: 150 },
          { name: 'Wallet', price: 50 },
        ],
      },
    ],
  },
  {
    month: 'September',
    people: [
      {
        name: 'Quinn',
        age: 27,
        birthday: '1997-09-09',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_17.png',
        gifts: [
          { name: 'Backpack', price: 60 },
          { name: 'Travel Kit', price: 40 },
        ],
      },
      {
        name: 'Rachel',
        age: 32,
        birthday: '1992-09-21',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_18.png',
        gifts: [
          { name: 'Jewelry', price: 200 },
          { name: 'Scarf', price: 30 },
        ],
      },
    ],
  },
  {
    month: 'October',
    people: [
      {
        name: 'Sam',
        age: 28,
        birthday: '1996-10-05',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_19.png',
        gifts: [
          { name: 'Tablet', price: 300 },
          { name: 'Keyboard', price: 50 },
        ],
      },
      {
        name: 'Tina',
        age: 31,
        birthday: '1993-10-18',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_20.png',
        gifts: [
          { name: 'Cookware', price: 100 },
          { name: 'Recipe Book', price: 20 },
        ],
      },
    ],
  },
  {
    month: 'November',
    people: [
      {
        name: 'Uma',
        age: 29,
        birthday: '1995-11-12',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_21.png',
        gifts: [
          { name: 'Fitness Gear', price: 50 },
          { name: 'Yoga Mat', price: 30 },
        ],
      },
      {
        name: 'Victor',
        age: 34,
        birthday: '1990-11-27',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_22.png',
        gifts: [
          { name: 'Tool Set', price: 100 },
          { name: 'DIY Kit', price: 40 },
        ],
      },
      {
        name: 'Wanda',
        age: 28,
        birthday: '1996-11-05',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_23.png',
        gifts: [
          { name: 'Art Supplies', price: 60 },
          { name: 'Sketchbook', price: 20 },
        ],
      },
    ],
  },
  {
    month: 'December',
    people: [
      {
        name: 'Wendy',
        age: 26,
        birthday: '1998-12-03',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_24.png',
        gifts: [
          { name: 'Winter Coat', price: 120 },
          { name: 'Boots', price: 80 },
        ],
      },
      {
        name: 'Xander',
        age: 28,
        birthday: '1996-12-19',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_25.png',
        gifts: [
          { name: 'Ski Gear', price: 200 },
          { name: 'Goggles', price: 50 },
        ],
      },
      {
        name: 'Yara',
        age: 27,
        birthday: '1997-12-10',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_26.png',
        gifts: [
          { name: 'Scarf', price: 30 },
          { name: 'Gloves', price: 20 },
        ],
      },
      {
        name: 'Zane',
        age: 31,
        birthday: '1993-12-25',
        avatar: 'https://cdn.jsdelivr.net/gh/alohe/memojis/png/memo_27.png',
        gifts: [
          { name: 'Smart Speaker', price: 100 },
          { name: 'Headphones', price: 80 },
        ],
      },
    ],
  },
];
