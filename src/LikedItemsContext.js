import React, { createContext, useContext, useEffect, useState } from 'react';
import './nav.css'; // Import CSS file

const LikedItemsContext = createContext();

export const LikedItemsProvider = ({ children }) => {
    const [likedItems, setLikedItems] = useState([]);

    useEffect(() => {
        const storedLikedItems = localStorage.getItem('likedItems');
        if (storedLikedItems) {
            setLikedItems(JSON.parse(storedLikedItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('likedItems', JSON.stringify(likedItems));
    }, [likedItems]);

    const toggleLikedItem = (item) => {
        if (likedItems.some(likedItem => likedItem.id === item.id)) {
            setLikedItems(likedItems.filter(likedItem => likedItem.id !== item.id));
        } else {
            setLikedItems([...likedItems, item]);
        }
    };

    return (
        <LikedItemsContext.Provider value={{ likedItems, toggleLikedItem }}>
            {children}
        </LikedItemsContext.Provider>
    );
};

export const useLikedItems = () => useContext(LikedItemsContext);
