import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGifs(category)
            .then(setImages)
            .then(() => setLoading(false));
    }, [category]);

    return [images, loading];
}
