import { useState } from "react";
import "./Menu.scss";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("starters");

  const menuItems = {
    starters: [
      {
        name: "Truffle Arancini",
        description: "Crispy risotto balls with black truffle and mozzarella",
        price: "$14",
        image:
          "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        name: "Beef Tartare",
        description: "Hand-cut beef with capers, shallots, and quail egg",
        price: "$16",
        image:
          "https://images.unsplash.com/photo-1719787770688-4a2955555a4c?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Burrata",
        description: "Creamy burrata with heirloom tomatoes and basil oil",
        price: "$15",
        image:
          "https://media.istockphoto.com/id/2219851021/photo/easter-brunch-salad-smoked-salmon-buratta-cheese-tomato-olive-oil-lemon-dressing-salad-on.jpg?s=1024x1024&w=is&k=20&c=8BAWkq35bLNsaCx-awn53rmrxs8OpaCqhWYgAZNkBlY=",
      },
    ],
    mains: [
      {
        name: "Herb-Crusted Salmon",
        description:
          "Atlantic salmon with seasonal vegetables and lemon butter sauce",
        price: "$28",
        image:
          "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      },
      {
        name: "Filet Mignon",
        description:
          "8oz grass-fed beef with truffle mashed potatoes and red wine reduction",
        price: "$36",
        image:
          "https://plus.unsplash.com/premium_photo-1663855532450-54fba8b39844?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Wild Mushroom Risotto",
        description: "Arborio rice with wild mushrooms and parmesan",
        price: "$24",
        image:
          "https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
    desserts: [
      {
        name: "Chocolate Soufflé",
        description: "Warm chocolate soufflé with vanilla ice cream",
        price: "$12",
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1089&q=80",
      },
      {
        name: "Crème Brûlée",
        description: "Classic vanilla bean custard with caramelized sugar",
        price: "$10",
        image:
          "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1124&q=80",
      },
      {
        name: "Seasonal Fruit Tart",
        description:
          "Buttery crust with pastry cream and fresh seasonal fruits",
        price: "$11",
        image:
          "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
    ],
    drinks: [
      {
        name: "Signature Cocktails",
        description:
          "Handcrafted cocktails with premium spirits and fresh ingredients",
        price: "$14",
        image:
          "https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      },
      {
        name: "Wine Selection",
        description:
          "Curated wines from around the world, available by glass or bottle",
        price: "$10-$60",
        image:
          "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      },
      {
        name: "Orange Juice",
        description: "Local and international orange juice on tap and bottled",
        price: "$8",
        image:
          "https://plus.unsplash.com/premium_photo-1675667381451-be2fc08a122e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRyaW5rfGVufDB8fDB8fHww",
      },
    ],
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="menu-header">
          <h2>Our Menu</h2>
          <p>Carefully crafted dishes using the finest ingredients</p>
        </div>

        <div className="menu-categories">
          <button
            className={activeCategory === "starters" ? "active" : ""}
            onClick={() => setActiveCategory("starters")}
          >
            Starters
          </button>
          <button
            className={activeCategory === "mains" ? "active" : ""}
            onClick={() => setActiveCategory("mains")}
          >
            Main Courses
          </button>
          <button
            className={activeCategory === "desserts" ? "active" : ""}
            onClick={() => setActiveCategory("desserts")}
          >
            Desserts
          </button>
          <button
            className={activeCategory === "drinks" ? "active" : ""}
            onClick={() => setActiveCategory("drinks")}
          >
            Drinks
          </button>
        </div>

        <div className="menu-items">
          {menuItems[activeCategory].map((item, index) => (
            <div key={index} className="menu-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
                <div className="item-overlay"></div>
              </div>
              <div className="item-content">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="item-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-footer">
          <p>
            ** Ask your server about our daily specials and pairing suggestions
            **
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;
