import React, { useState } from 'react';
import '../css/cart.css'; // Assuming you have a CSS file for styling
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faShoppingCart,
//     faUser,
//     faSearch,
// } from "@fortawesome/free-solid-svg-icons";
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

// import Autoscroller from './Autoscroller';
import Category  from './Category';
// faUser
const ProductCart = ({ products, onAddToCart }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
    };

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        onAddToCart(product); // Call the onAddToCart function here
    };

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    const productImages = [
        'https://cdn.pixabay.com/photo/2019/06/15/16/06/online-4275963_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/11/23/14/56/bazaar-1853361_1280.jpg',
        // Add more image URLs as needed
    ];

    return (
        <>
            <div>
                <div className="navbar">
                    <div className="logo">
                        <h1>My Logo</h1>
                    </div>
                    <div className="searchinput">
                        <input
                            type="text"
                            placeholder="Search for a product..."
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        {/* <FontAwesomeIcon className="icon" id="search" icon={faSearch} /> */}
                    </div>
                    <div className="icons">
                      <a href="Category.jsx">Cat</a>
                        <button className="cart-icon" onClick={toggleCart}>
                            {/* <FontAwesomeIcon className="icon" icon={faShoppingCart} /> */}
                            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
                        </button>
                        <div className="user-icon">
                            {/* <FontAwesomeIcon className="icon" icon={faUser} /> */}
                        </div>
                    </div>
                </div>
                {/* <React.StrictMode>
                    <Autoscroller productImages={productImages} />
                </React.StrictMode> */}
                <div className="product-list">
                    {filteredProducts.map((product, index) => (
                        <div className="product" key={index}>
                            <img src={product.image} alt={product.name} />
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                                <button id='addtocart' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                                <button id='buynow' onClick={() => alert('Product bought')}>Buy Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showCart && (
                <div className="cart">
                    <h2>Cart</h2>
                    <ul>
                        {cart.map((product, index) => (
                            <li key={index}>{product.name} - ${product.price}</li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};
const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => [...prevCart, product]);
    };

  const products = [
    {
      name: 'T-Shirt',
      description: 'A comfortable cotton t-shirt.',
      price: 15.99,
      image: 'https://contents.mediadecathlon.com/p2567760/06cf21e3f5a8a75af7ac0659729255e7/p2567760.jpg',
    },
    {
      name: 'Pants',
      description: 'Casual denim jeans.',
      price: 29.99,
      image: 'https://assets.ajio.com/medias/sys_master/root/20231103/WhmD/6543f7e8afa4cf41f5713f34/-473Wx593H-466590266-black-MODEL.jpg',
    },
    {
      name: 'Shoes',
      description: 'Sporty running shoes.',
      price: 49.99,
      image: 'https://media.finishline.com/i/finishline/DV3975_100_P2?$default$&w=670&h=670&bg=rgb(237,237,237)',
    },
    {
      name: 'Hat',
      description: 'Stylish baseball cap.',
      price: 9.99,
      image: 'https://i5.walmartimages.com/seo/CoCopeaunt-HT3587-Panama-Hat-Summer-Sun-Hats-for-Women-Men-Wide-Brim-Straw-Hat-Male-Female-Anti-UV-Travel-Cap-Black-Band-Beach-Hat-Fedoras_c9dd0b15-880c-47ad-801d-509ccabc4eb2.814ae6d2bba4fd1f095e5f28d518ba84.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    },
    {
        name: 'Striped Polo Shirt',
        description: 'Classic striped polo shirt.',
        price: 99.99,
        image: 'https://thehouseofrare.com/cdn/shop/files/EDEETPURPLE00674HERO_765x.jpg?v=1699616085',
      },
      {
        name: 'Slim Fit Chinos',
        description: 'Modern slim fit chinos for a sleek look.',
        price: 34.99,
        image: 'https://www.beyoung.in/api/cache/catalog/products/new_chinos_update_image_23_9_2022/sage_green_chinos_for_men_base_05_06_2023_700x933.jpg',
      },
      {
        name: 'Running Shorts',
        description: 'Lightweight running shorts with moisture-wicking fabric.',
        price: 24.99,
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/680801/01/mod01/fnd/IND/fmt/png/ACTIVE-Interlock-Men',
      },
      {
        name: 'V-Neck Sweater',
        description: 'Soft and cozy v-neck sweater for casual outings.',
        price: 39.99,
        image: 'https://imagescdn.peterengland.com/img/app/product/9/929775-11775753.jpg?q=75&auto=format&w=342',
      },
      {
        name: 'Leather Jacket',
        description: 'Classic leather jacket with a rugged yet stylish design.',
        price: 99.99,
        image: 'https://m.media-amazon.com/images/I/51wimwplasL.jpg',
      },
      // Add more products to reach 50
      {
        name: 'Denim Jacket',
        description: 'Versatile denim jacket with button-up closure.',
        price: 59.99,
        image: 'https://images.bestsellerclothing.in/data/JJ/3-aug-2023/280182301_g1.jpg?width=415&height=550&mode=fill&fill=blur&format=auto',
      },
      {
        name: 'Cargo Pants',
        description: 'Cargo pants with multiple pockets for convenient storage.',
        price: 44.99,
        image: 'https://images.bewakoof.com/t1080/men-s-black-baggy-cargo-jeans-624262-1707221692-1.jpg',
      },
      {
        name: 'Hooded Sweatshirt',
        description: 'Warm and comfortable hooded sweatshirt for chilly days.',
        price: 29.99,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS5cJYSNdYbzJRq_5PluqFvPvkKTs1lbWXRHcbcDFg5jM8-gqTH_r6ahj4ww9cYW-4LdKgyi3dHh7m2-gJK_XKzRVlhYD77Mdj0GZ3F8E4',
      },
      {
        name: 'Casual Sneakers',
        description: 'Casual sneakers for everyday wear with a modern design.',
        price: 54.99,
        image: 'https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1700150459_8923890.jpg?w=480&dpr=1.3',
      },
      {
        name: 'Formal Shirt',
        description: 'Formal shirt made of high-quality cotton.',
        price: 49.99,
        image: 'https://thehouseofrare.com/cdn/shop/products/HERO_a85c6ad7-ac39-487c-a6b6-4ab525b24104_765x.jpg?v=1671020797',
      },
      {
        name: 'Hiking Boots',
        description: 'Sturdy hiking boots with waterproofing.',
        price: 79.99,
        image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/25575790/2023/10/23/fa843258-00c5-4879-9ddd-3fe59c1f83ed1698061962184baccabucciMenHikingBoots1.jpg',
      },
      {
        name: 'Summer Dress',
        description: 'Lightweight summer dress with floral print for a feminine look.',
        price: 39.99,
        image: 'https://i.etsystatic.com/29312542/r/il/117b2e/3666082496/il_570xN.3666082496_ot99.jpg',
      },
      {
        name: 'Swim Shorts',
        description: 'Quick-drying swim shorts with an adjustable drawstring waist.',
        price: 29.99,
        image: 'https://m.media-amazon.com/images/I/71hcAL0iu-L._AC_UY350_.jpg',
      },
      {
        name: 'Evening Gown',
        description: 'Elegant evening gown with sequin ',
        price: 129.99,
        image: 'https://dressrent.in/cdn/shop/products/Wine2-Copy_1200x1200.jpg?v=1606113633',
      },
      {
        name: 'Leather Belt',
        description: 'Classic leather belt with a polished buckle.',
        price: 24.99,
        image: 'https://imagescdn.thecollective.in/img/app/product/8/861519-10178499.jpg?',
      },
      {
        name: 'Sweatpants',
        description: 'Relaxed-fit sweatpants for lounging or casual wear.',
        price: 34.99,
        image: 'https://www.bolf.eu/eng_pl_Mens-Sweatpants-Grey-Bolf-XW01-69359_15.jpg',
      },
      {
        name: 'Puffer Jacket',
        description: 'Warm and insulated puffer jacket for cold weather.',
        price: 89.99,
        image: 'https://images.bestsellerclothing.in/data/only/12-sep-2023/238507001_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto',
      },
      {
        name: 'Summer Hat',
        description: 'Wide-brimmed straw hat for sun protection during summer.',
        price: 19.99,
        image: 'https://m.media-amazon.com/images/I/61cf2FNiy0L._AC_UY1100_.jpg',
      },
      {
        name: 'Denim Shorts',
        description: 'Casual denim shorts with frayed edges for a laid-back look.',
        price: 27.99,
        image: 'https://m.media-amazon.com/images/I/71muTp0tXZL._AC_UY1100_.jpg',
      },
      {
        name: 'Formal Blazer',
        description: 'Tailored formal blazer with a single-button closure.',
        price: 199.99,
        image: 'https://imagescdn.planetfashion.in/img/app/product/6/676229-7069253.jpg?auto=format&w=494.40000000000003',
      },
  ];
  return (
    <div>
      <ProductCart products={products} onAddToCart={addToCart} />
            {/* <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {cart.map((product, index) => (
                        <li key={index}>{product.name} - ${product.price}</li>
                    ))}
                </ul>
            </div> */}
   </div>
  );
};

export default App;
