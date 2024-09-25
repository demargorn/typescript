import { Movie } from '../Movie';

const matrix = new Movie('The Matrix', 2000, 'USA', 'sjhljsc', 'fantasy', '03:12');

test('test Movie showMovie getter ', () => {
   expect(matrix.showMovie).toEqual(matrix);
});
