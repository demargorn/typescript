import { IMovie } from './interfaces/IMovie';
import { Movie } from './Movie';
import { Cart } from './Cart';

const cart = new Cart()
const avengers = new Movie('Avengers', 2015, 'USA', 'Avengers Aussome', 'fantasy', '02:12');

cart.add(avengers)

console.log(avengers.showMovie);
console.log(avengers.showMovie);
console.log(cart);
