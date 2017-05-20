import { Episode } from './episode.model';
import { MangaSurvBase } from "../mangasurvbase.model";

export class Anime extends MangaSurvBase {
    episodes: Episode[];
}