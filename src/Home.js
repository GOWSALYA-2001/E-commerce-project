
import Card from './Card';
import { useCart } from './CartContext';
import React, { useState } from 'react';

import './nav.css';

function ProductTitle({ title, onNext, onPrev }) {
    return (
        <div className="product-title">
            <h2 className="category-title">{title}</h2>
            <div className="title-navigation">
                <button onClick={onPrev} className="nav-button">{"<"}</button>
                <button onClick={onNext} className="nav-button">{">"}</button>
            </div>
        </div>
    );
}

function Home() {
    const { addToCart } = useCart();

    const categories = [
        {
            title: "Jeans",
            products: [
                { id: "1", title: "DenimDivine", image: "./images/jean1.webp", price: 500 },
                { id: "2", title: "ChicFit", image: "./images/jean2.webp", price: 1300 },
                { id: "3", title: "BlueBelle", image: "./images/jean3.webp", price: 1500 },
                { id: "4", title: "JeanGenie", image: "./images/jean4.webp", price: 1400 },
                { id: "5", title: "ClassicDenim", image: "./images/jean5.webp", price: 800 },
                { id: "6", title: "UrbanFlex", image: "./images/jean6.jpeg", price: 700 },
                { id: "7", title: "TrueStitch", image: "./images/jean7.jpeg", price: 900 },
                { id: "8", title: "DenimDynamo", image: "./images/jean8.jpeg", price: 1200 },
            ]
        },
        {
            title: "Glasses",
            products: [
                { id: "9", title: "ClearVision", image: "./images/glass1.jpeg", price: 2500 },
                { id: "10", title: "SpectraShade", image: "./images/glass2.webp", price: 1500 },
                { id: "11", title: "EyeElegance", image: "./images/glass3.webp", price: 3500 },
                { id: "12", title: "VisionVogue", image: "./images/glass4.jpeg", price: 4500 },
                { id: "13", title: "FrameFinesse", image: "./images/glass5.webp", price: 500 },
                { id: "14", title: "SpectraChic", image: "./images/glass6.webp", price: 700 },
                { id: "15", title: "SightSense", image: "./images/glass7.jpeg", price: 800 },
            ]
        },
        {
            title: "Lehanga",
            products: [
                { id: "16", title: "RoyalSplendor", image: "./images/lehanga1.webp", price: 5500 },
                { id: "17", title: "EnchantedElegance", image: "./images/lehanga2.webp", price: 3500 },
                { id: "18", title: "PrincessCharm", image: "./images/lehanga3.webp", price: 7500 },
                { id: "19", title: "FairyTaleFlair", image: "./images/lehanga4.webp", price: 6500 },
                { id: "20", title: "JewelGlow", image: "./images/lehanga5.webp", price: 8500 },
            ]
        },
        {
            title: "Watches",
            products: [
                { id: "21", title: "TimeMaster", image: "./images/watch1.webp", price: 800 },
                { id: "22", title: "ChronoLux", image: "./images/watch2.jpeg", price: 1500 },
                { id: "23", title: "EleganceTime", image: "./images/watch3.webp", price: 2500 },
                { id: "24", title: "PrestigeWatch", image: "./images/watch4.webp", price: 5500 },
            ]
        },
        {
            title: "Formal shirts",
            products: [
                { id: "25", title: "ClassicElegance", image: "./images/formalshirts1.jpeg", price: 1500 },
                { id: "26", title: "RegalAura", image: "./images/formalshirts2.webp", price: 1700 },
                { id: "27", title: "NobleGentleman", image: "./images/formalshirts3.webp", price: 1800 },
                { id: "28", title: "SophisticatedStyle", image: "./images/formalshirts4.webp", price: 2000 },
                { id: "29", title: "DapperCharm", image: "./images/formalshirts5.webp", price: 900 },
                { id: "30", title: "TimelessClass", image: "./images/formalshirts6.webp", price: 800 },
                { id: "31", title: "RefinedGrace", image: "./images/formalshirts7.jpeg", price: 700 },
            ]
        },

        {
            title: "T-shirts",
            products: [
                { id: "32", title: "FloralBloom", image: "./images/tshit1.webp", price: 600 },
                { id: "33", title: "RainbowBliss", image: "./images/tshit2.webp", price: 700 },
                { id: "34", title: "StarlightDream", image: "./images/tshit3.webp", price: 900 },
                { id: "35", title: "SweetPea", image: "./images/tshit4.jpeg", price: 1200 },
                { id: "36", title: "UrbanEdge", image: "./images/tshit5.webp", price: 1400 },
                { id: "37", title: "BohoChic", image: "./images/tshit6.webp", price: 1300 },
                { id: "38", title: "ButterflyWhimsy", image: "./images/tshit7.webp", price: 800 },
                { id: "39", title: "CandyCraze", image: "./images/tshit8.jpeg", price: 500 },
            ]
        },

        {
            title: "Shoes",
            products: [
                { id: "40", title: "PowerStride", image: "./images/shoe1.webp", price: 500 },
                { id: "41", title: "AdventureTrek", image: "./images/shoe2.jpeg", price: 1500 },
                { id: "42", title: "BlossomBreeze", image: "./images/shoe3.webp", price: 2500 },
                { id: "43", title: "DreamDancer", image: "./images/shoe4.jpeg", price: 9500 },
                { id: "44", title: "HighJump", image: "./images/shoe5.webp", price: 9500 },
                { id: "45", title: "TrailBlazer", image: "./images/shoe6.webp", price: 1677 },
                { id: "46", title: "GracefulGlide", image: "./images/shoe7.jpeg", price: 1200 },
                { id: "47", title: "ElegantStroll", image: "./images/shoe8.webp", price: 3500 },
                { id: "48", title: "SprintRunner", image: "./images/shoe9.webp", price: 1980 },
                { id: "49", title: "SparkleStep", image: "./images/shoe10.webp", price: 1890 },
                { id: "50", title: "MaxFlex", image: "./images/shoe11.jpeg", price: 900 },
                { id: "51", title: "DynamicStride", image: "./images/shoe12.jpeg", price: 900 },
                { id: "52", title: "SportyStride", image: "./images/shoe13.webp", price: 900 },
                { id: "53", title: "UrbanExplorer", image: "./images/shoe14.webp", price: 2000 },
            ]
        },



    ];
// State to manage the start index for each category
const [startIndex, setStartIndex] = useState({});

// Initialize start index for each category
const initializeStartIndex = () => {
    const indexObject = {};
    categories.forEach(category => {
        indexObject[category.title] = 0;
    });
    return indexObject;
};

// Initialize start index for each category
if (Object.keys(startIndex).length === 0) {
    setStartIndex(initializeStartIndex());
}

// Function to handle moving to the next set of products for a specific category
const nextProducts = (categoryTitle) => {
    setStartIndex(prevIndex => ({
        ...prevIndex,
        [categoryTitle]: Math.min(prevIndex[categoryTitle] + 3, categories.find(cat => cat.title === categoryTitle).products.length - 1)
    }));
};

// Function to handle moving to the previous set of products for a specific category
const prevProducts = (categoryTitle) => {
    setStartIndex(prevIndex => ({
        ...prevIndex,
        [categoryTitle]: Math.max(prevIndex[categoryTitle] - 3, 0)
    }));
};

return (
    <main className="container">
        {categories.map((category, index) => (
            <div key={category.title} className="category-section">
                <ProductTitle
                    title={category.title}
                    onNext={() => nextProducts(category.title)}
                    onPrev={() => prevProducts(category.title)}
                />
                <div className="category-products">
                    {category.products.slice(startIndex[category.title], startIndex[category.title] + 3).map((product) => (
                        <div key={product.id} className="product-container">
                            <Card productData={product} onAddToCart={addToCart} />
                        </div>
                    ))}
                </div>
                {index !== categories.length - 1 && <div className="category-divider"></div>}
            </div>
        ))}
    </main>
);
}

export default Home;