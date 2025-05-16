import { useState } from 'react';

export const usePost = (url, responseHandler) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (body) => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            responseHandler(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { postData, loading, error };
};
