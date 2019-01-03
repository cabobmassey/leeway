export interface Apartment {
    id?: string;
    name?: string;
    owner?: string;
    address?: string;
    city?: string;
    state?: string;
    price?: number;
    squareFeet?: number;
    imgURL?: string;
    bathrooms?: number;
    bedrooms?: number;
    amenities?: string[];
    description?: string;
}