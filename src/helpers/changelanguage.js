import en from "./Language/en.json";
import so from "./Language/so.json";

export const changelanguage = (lang = 'so') => {
    localStorage.setItem('userLanguage', lang);
    if(lang == 'en'){
        return (en);
    }else{
        return (so); 
    }
}

export const getlanguage = () => {
    const language = localStorage.getItem('userLanguage');
    return (language !== null ? language : 'so')
};

export const getlanguagelist = () => {
    const language = getlanguage();
    return (language == 'so' ? so : en)
};