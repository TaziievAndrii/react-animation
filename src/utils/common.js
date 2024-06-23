import {MAIN_URL} from "./constans";

export const request = async (query) => {
    try {
        const result = await fetch(MAIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
            },
            body: JSON.stringify({query})
        })
        const {data} = await result.json();

        return data;
    } catch (e) {
        console.log(e)
    }
}

export const sortByDate = (arr) => {
    return arr.sort((a, b) => new Date(a.date) - new Date(b.date))
}

export const getLocaleDateString = (date,{month = 'numeric', day = 'numeric',year = 'numeric'}) => {
    return new Date(date).toLocaleDateString('cz-Cz', {
        month,
        day,
        year
    })
}