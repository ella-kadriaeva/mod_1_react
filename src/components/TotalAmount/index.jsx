export default function TotalAmount({ items }) {
  const total = items.reduce((acc, item) => acc + item.count * item.price, 0);
  return (
    <div>
      <span>total amount:</span>
      <span>{total}$</span>
    </div>
  );
}
