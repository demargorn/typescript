import { IMovie } from './interfaces/IMovie';

class Cart {
   constructor(private items: IMovie[] = []) {}

   add(item: IMovie): void {
      this.items.push(item);
   }

   getAll(): IMovie[] {
      return [...this.items];
   }
}

export { Cart };
