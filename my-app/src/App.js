import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Card
        productDetails={{
          productId: 1,
          productPic:
            "https://www.nikesb.com/assets/uploads/product/nikesb_airzoom_url.jpg",
          productName: "GARNIER",
          productDescription:
            "Garnier Pure Active Micellar Cleansing Water, 125 ml",
          Price: "60$",
          Rating: 4,
        }}
      />

      <Card
        productDetails={{
          productId: 2,
          productPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm-oaJ37swFqZjXFi0Gm4DQiEvpWP7ucGlQ&usqp=CAU",
          productName: "TITAN",
          productDescription: "Titan Pure Active Watch, 125 lorme lorem lumsum",
          Price: "60$",
          Rating: 4,
        }}
      />

      <Card
        productDetails={{
          productId: 3,
          productPic:
            "https://www.nikesb.com/assets/uploads/product/nikesb_airzoom_url.jpg",
          productName: "GARNIER",
          productDescription:
            "Garnier Pure Active Micellar Cleansing Water, 125 ml",
          Price: "60$",
          Rating: 4,
        }}
      />
      <Card
        productDetails={{
          productId: 4,
          productPic:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjm-oaJ37swFqZjXFi0Gm4DQiEvpWP7ucGlQ&usqp=CAU",
          productName: "TITAN",
          productDescription: "Titan Pure Active Watch, 125 lorme lorem lumsum",
          Price: "60$",
          Rating: 4,
        }}
      />

      <Card
        productDetails={{
          productId: 5,
          productPic:
            "https://www.nikesb.com/assets/uploads/product/nikesb_airzoom_url.jpg",
          productName: "GARNIER",
          productDescription:
            "Garnier Pure Active Micellar Cleansing Water, 125 ml",
          Price: "60$",
          Rating: 4,
        }}
      />
    </div>
  );
}

export default App;
