export interface Id {
    uuid: string;
    fullName: string;
}

export interface Note {
    createdAt: number;
    note: string;
    id?: string;
}

export interface Post {
    notes: Note[];
    createdAt: any;
    id: string[];
}

export interface ShoppingCartUser {
    uuid: string;
    fullName: string;
    email: string;
    id: Idproducts;
}

export interface Idproducts {
    beer: boolean;
    galletas: boolean;
    cereals: boolean;
    chips: boolean;
    fruit: boolean;
    milk: boolean;
    potatoes: boolean;
    tomatobrick: boolean;
    water: boolean;
    yogourt: boolean;
    butter: boolean;
    coldcuts: boolean;
    eggs: boolean;
    eggplant: boolean;
    macaroni: boolean;
    mushrooms: boolean;
    olives: boolean;
    sausages: boolean;
    spaghetti: boolean;
    squash: boolean;
    apples: boolean;
    celery: boolean;
    cleaningsupplies: boolean;
    melon: boolean;
    onions: boolean;
    parchmentpaper: boolean;
    pears: boolean;
    pizza: boolean;
    strawberries: boolean;
    zucchini: boolean;
    bananas: boolean;
    bottledwater: boolean;
    cherry: boolean;
    coffee: boolean;
    deodorant: boolean;
    glasscleaner: boolean;
    orangejuice: boolean;
    redwine: boolean;
    toiletpaper: boolean;
    watermelon: boolean;
    notes: string;
}