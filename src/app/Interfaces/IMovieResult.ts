import { Dates } from "./IDates";
import { IMovie } from "./IMovie";

export interface IMovieResult {
    dates:         Dates;
    page:          number;
    results:       IMovie[];
    total_pages:   number;
    total_results: number;
}

