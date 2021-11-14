import { quoteData } from "./quoteData";

export const getRandomIndex = () => {
    return(Math.round(Math.random() * ((quoteData.length-1) - 0) + 0))
};