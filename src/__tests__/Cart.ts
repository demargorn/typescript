import { Cart } from '../Cart';
import { Movie } from '../Movie';

const cart = new Cart();
const matrix = new Movie('The Matrix', 2000, 'USA', 'sjhljsc', 'fantasy', '03:12');
const hitman = new Movie('Hitman', 2000, 'USA', 'sjhljsc', 'drama', '03:20');

test('test Car add method with %o items', () => {
   cart.add(matrix);
   expect(cart.getAll()).toEqual([matrix]);
});

test('test Car add getAll', () => {
   expect(cart.getAll()).toEqual([matrix]);
});
