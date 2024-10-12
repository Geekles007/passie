export interface Birthday {
  month: string;
  people: People[];
}

export interface People {
  name: string;
  age: number;
  birthday: string;
  avatar: string;
  gifts: Gift[];
}

export interface Gift {
  name: string;
  price: number;
}
