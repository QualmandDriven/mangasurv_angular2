import { Episode } from './episode.model';
import { MangaSurvBase } from "../mangasurvbase.model";

export class Anime extends MangaSurvBase{
    episode: Episode[];
}