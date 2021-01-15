import { IGenre } from './IGenre';
import { IProductionCompany } from "./IProductionCompany";
import { IProductionCountry } from "./IProductionCountry";
import { ISpokenLanguage } from "./ISpokenLanguage";

export interface IMovie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: OriginalLanguage;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
    belongs_to_collection: null;
    budget:                number;
    genres:                IGenre[];
    homepage:              string;
    imdb_id:               string;
    production_companies:  IProductionCompany[];
    production_countries:  IProductionCountry[];
    revenue:               number;
    runtime:               number;
    spoken_languages:      ISpokenLanguage[];
    status:                string;
    tagline:               string;
}

export enum OriginalLanguage {
    De = "de",
    En = "en",
    No = "no",
    Ru = "ru",
}
