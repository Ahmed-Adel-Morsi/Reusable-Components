import { useState } from "react";
import StarRating from "./StarRating";

export default function App() {
  const [rating, setRating] = useState(3);

  return (
    <div className="App">
      <StarRating
        onSetRating={setRating}
        maxRating={10}
        size={60}
        color="#fcc419"
        messages={[]}
        defaultRating={3}
      />
    </div>
  );
}
