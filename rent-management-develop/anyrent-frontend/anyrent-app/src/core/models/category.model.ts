export interface ICategory {
    id: string;
    title: string;
    name: string;
    parent: string | null;
    description: string;
    imageURL: string;
    mainColor: string;
    displayPlace: string[];
    allowedForRoles: string[];
}

export interface IBurgerCategory {
    id: string;
    name: string;
    subCategories: IBurgerCategory[];
}
