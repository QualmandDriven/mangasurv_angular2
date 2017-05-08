import { Chapter } from './chapter.model';
import { MangaSurvBase } from "../mangasurvbase.model";

export class Manga extends MangaSurvBase{
    chapters: Chapter[];
}