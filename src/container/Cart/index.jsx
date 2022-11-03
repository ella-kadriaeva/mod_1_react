import InputForm from "../../components/InputForm";
import Loader from "../../components/Loader";
import TotalAmount from "../../components/TotalAmount";
import CartList from "../../components/CartList";

const initialState = [
  { id: "id_1", name: "pillow", price: 20, count: 2 },
  { id: "id_2", name: "towel", price: 3, count: 20 },
  { id: "id_3", name: "plaid", price: 12, count: 8 },
  { id: "id_4", name: "bed sheet", price: 9, count: 17 },
  { id: "id_5", name: "blanket", price: 6, count: 11 },
];

export default function Cart() {
  return (
    <div>
      <InputForm />
      <Loader />
      <CartList items={initialState} />
      <TotalAmount items={initialState} />
    </div>
  );
}
