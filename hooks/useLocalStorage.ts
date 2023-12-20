// import { useEffect, useState } from "react";

// export const useLocalStorage = (key: string) => {
//     const [data, setData] = useState<any>([]);

//     useEffect(() => {
//         const stored = localStorage.getItem(key);
//         console.log('stored :', stored);

//         if (!stored) {
//             localStorage.setItem(key, JSON.stringify([]));
//         } else {
//             setData(JSON.parse(stored));
//         }
//     }, [key]);

//     return [data]
// }

import { useEffect, useState } from "react";

export const useLocalStorage = (key: string) => {
    const [data, setData] = useState<any>(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(data));
    }, [key, data]);

    return [data, setData];
};