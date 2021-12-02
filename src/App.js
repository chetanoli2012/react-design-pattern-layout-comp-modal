import { Modal } from "./Modal";
import { LargeProductListItem } from "./product/LargeProductListItem";

const product = {
  name: "Flat-Screen TV",
  price: "$300",
  description: "Huge LCD screen, a great deal",
  rating: 4.5,
};

function App() {
  return (
    <Modal>
      <LargeProductListItem product={product} />
    </Modal>
  );
}

export default App;
