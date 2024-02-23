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