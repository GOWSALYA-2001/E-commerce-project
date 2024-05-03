import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { CartProvider } from './CartContext';
import { SearchBar } from './Searchbar';
import ItemDetail from './ItemDetail';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';
import { LikedItemsProvider } from './LikedItemsContext';
import LikedItems from './LikedItems';
import ConfirmationPage from './ConfirmationPage';
import ProfilePage from './ProfilePage';
function App() {
    const [username, setUsername] = useState('');
    
    const [cartItems, setCartItems] = useState([]);
    const [products] = useState([
        { id: "1", title: "DenimDivine", image: "./images/jean1.webp", price: 500 },
                { id: "2", title: "ChicFit", image: "./images/jean2.webp", price: 1300 },
                { id: "3", title: "BlueBelle", image: "./images/jean3.webp", price: 1500 },
                { id: "4", title: "JeanGenie", image: "./images/jean4.webp", price: 1400 },
                { id: "5", title: "ClassicDenim", image: "./images/jean5.webp", price: 800 },
                { id: "6", title: "UrbanFlex", image: "./images/jean6.jpeg", price: 700 },
                { id: "7", title: "TrueStitch", image: "./images/jean7.jpeg", price: 900 },
                { id: "8", title: "DenimDynamo", image: "./images/jean8.jpeg", price: 1200 },
        
                { id: "9", title: "ClearVision", image: "./images/glass1.jpeg", price: 2500 },
                { id: "10", title: "SpectraShade", image: "./images/glass2.webp", price: 1500 },
                { id: "11", title: "EyeElegance", image: "./images/glass3.webp", price: 3500 },
                { id: "12", title: "VisionVogue", image: "./images/glass4.jpeg", price: 4500 },
                { id: "13", title: "FrameFinesse", image: "./images/glass5.webp", price: 500 },
                { id: "14", title: "SpectraChic", image: "./images/glass6.webp", price: 700 },
                { id: "15", title: "SightSense", image: "./images/glass7.jpeg", price: 800 },

                { id: "16", title: "RoyalSplendor", image: "./images/lehanga1.webp", price: 5500 },
                { id: "17", title: "EnchantedElegance", image: "./images/lehanga2.webp", price: 3500 },
                { id: "18", title: "PrincessCharm", image: "./images/lehanga3.webp", price: 7500 },
                { id: "19", title: "FairyTaleFlair", image: "./images/lehanga4.webp", price: 6500 },
                { id: "20", title: "JewelGlow", image: "./images/lehanga5.webp", price: 8500 },

                { id: "21", title: "TimeMaster", image: "./images/watch1.webp", price: 800 },
                { id: "22", title: "ChronoLux", image: "./images/watch2.jpeg", price: 1500 },
                { id: "23", title: "EleganceTime", image: "./images/watch3.webp", price: 2500 },
                { id: "24", title: "PrestigeWatch", image: "./images/watch4.webp", price: 5500 },

                { id: "25", title: "ClassicElegance", image: "./images/formalshirts1.jpeg", price: 1500 },
                { id: "26", title: "RegalAura", image: "./images/formalshirts2.webp", price: 1700 },
                { id: "27", title: "NobleGentleman", image: "./images/formalshirts3.webp", price: 1800 },
                { id: "28", title: "SophisticatedStyle", image: "./images/formalshirts4.webp", price: 2000 },
                { id: "29", title: "DapperCharm", image: "./images/formalshirts5.webp", price: 900 },
                { id: "30", title: "TimelessClass", image: "./images/formalshirts6.webp", price: 800 },
                { id: "31", title: "RefinedGrace", image: "./images/formalshirts7.jpeg", price: 700 },

        { id: "32", title: "tshit1", image: "./images/tshit1.webp", price: 9500 },
        { id: "33", title: "tshit2", image: "./images/tshit2.webp", price: 9500 },
        { id: "34", title: "tshit3", image: "./images/tshit3.webp", price: 9500 },
        { id: "35", title: "tshit4", image: "./images/tshit4.jpeg", price: 9500 },
        { id: "36", title: "tshit5", image: "./images/tshit5.webp", price: 9500 },
        { id: "37", title: "tshit6", image: "./images/tshit6.webp", price: 9500 },
        { id: "38", title: "tshit7", image: "./images/tshit7.webp", price: 9500 },
        { id: "39", title: "tshit8", image: "./images/tshit8.jpeg", price: 9500 },

        { id: "40", title: "shoe1", image: "./images/shoe1.webp", price: 9500 },
        { id: "41", title: "shoe2", image: "./images/shoe2.jpeg", price: 9500 },
        { id: "42", title: "shoe3", image: "./images/shoe3.webp", price: 9500 },
        { id: "43", title: "shoe4", image: "./images/shoe4.jpeg", price: 9500 },
        { id: "44", title: "shoe5", image: "./images/shoe5.webp", price: 9500 },
        { id: "45", title: "shoe6", image: "./images/shoe6.webp", price: 9500 },
        { id: "46", title: "shoe7", image: "./images/shoe7.jpeg", price: 9500 },
        { id: "47", title: "shoe8", image: "./images/shoe8.webp", price: 9500 },
        { id: "48", title: "shoe9", image: "./images/shoe9.webp", price: 9500 },
        { id: "49", title: "shoe10", image: "./images/shoe10.webp", price: 9500 },
        { id: "50", title: "shoe11", image: "./images/shoe11.jpeg", price: 9500 },
        { id: "51", title: "shoe12", image: "./images/shoe12.jpeg", price: 9500 },
        { id: "52", title: "shoe13", image: "./images/shoe13.webp", price: 9500 },
        { id: "53", title: "shoe14", image: "./images/shoe14.webp", price: 9500 },
        
    ]);

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

    const addToCart = (product) => {
        console.log("Adding to cart:", product);
        const exists = cartItems.find(item => item.id === product.id);
        if (exists) {
            setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
        } else {
            // Ensure quantity is initialized to 1 when adding a new item to the cart
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    

    const placeOrder = () => {
        console.log('Order has been placed!');
        alert("Thank you for your order!");
        setCartItems([]);
    };

    return (
        <Router>
            <CartProvider>
                <LikedItemsProvider>
                    <div className="App">
                        <header className="App-header">
                             <SearchBar username={username} />
                        </header>
                        <Routes>
                            <Route path="/" element={<Home products={products} />} />
                            <Route path="/item/:id" element={<ItemDetail products={products} addToCart={addToCart} />} />
                            <Route path="/liked-items" element={<LikedItems products={products} />} />
                            <Route path="/cart" element={<CartPage />} />
                            {/* Pass the total price to the CheckoutPage */}
                            <Route path="/checkout" element={<CheckoutPage total={totalPrice} placeOrder={placeOrder} />} />
                            <Route path="/confirmation" element={<ConfirmationPage />} />
                            {/* Pass the user object to the UserProfile component */}
                            <Route path="/profile" element={<ProfilePage setUsername={setUsername} />} />
                        </Routes>
                    </div>
                </LikedItemsProvider>
            </CartProvider>
        </Router>
    );
}

export default App;