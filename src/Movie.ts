import { IMovie } from './interfaces/IMovie';

class Movie {
   constructor(
      readonly name: string,
      readonly year: number,
      readonly country: string,
      readonly slogan: string,
      readonly genre: string,
      readonly time: string
   ) {}

   get showMovie(): IMovie {
      return this;
   }
}

export { Movie };
