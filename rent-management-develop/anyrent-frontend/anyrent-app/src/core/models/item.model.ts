export interface IItem {
    _id: any;
    id: string;
    title: string;
    description: string;
    category: [
        {
            id: string;
            name: string;
        }
    ];
    address?: string;
    rating?: number;
    price: number;
    cover?: string[];
    views?: number;
    creationDate: Date;
    owner?: {
        id: string;
        name: string;
        surname: string;
        rating: number;
        avatar: string;
    };
    reviews?: IReviews[];
}

interface IReviews {
    authorId?: string;
    name?: string;
    surname?: string;
    text?: string;
    date?: Date;
    rating?: number;
}
