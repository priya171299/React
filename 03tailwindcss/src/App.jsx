import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card
        placeName="Egypt"
        post="Egypt, country located in the northeastern corner of Africa."
        image="https://s.yimg.com/fz/api/res/1.2/WdQGWqnQ9sbB7375taFY0g--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD0zODQ7cT04MDt3PTUxMg--/https://s.yimg.com/am/365d/654bcfe2deab08801b4007690574e3b6"
      />
      <Card
        placeName="London"
        post="Capital and largest city of England and the United Kingdom"
        image="https://up.yimg.com/ib/th?asid=432345565109219518&id=OAUMA.A87BAABFBA96C715E135AC58BABDDA93_F4190A4784BAF4D3&pid=21.1&o=5&w=442&h=231&c=1&rs=1&qlt=95"
      />
      <Card />
    </>
  );
}

export default App;
