import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>;
export const getEntries = (): DiaryEntry[] => diaries;

export const findById = (id: Number): NonSensitiveInfoDiaryEntry  | undefined => {
    const entry = diaries.find(d => d.id === id);
    if(entry != null){
        const { comment, ...restOfDiary } = entry;
        return restOfDiary;
    };

    return undefined;
};

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({id, date, weather, visibility}) => {
        return{
            id,
            date,
            weather,
            visibility
        }
    });
};

export const addDarie = (nweDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const nweDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...nweDiaryEntry
    };

    diaries.push(nweDiary);
    return nweDiary;
};