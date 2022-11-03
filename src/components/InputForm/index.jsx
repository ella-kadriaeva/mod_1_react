export default function InputForm() {
  return (
    <div>
      <form>
        <label>
          <span>name</span>
          <input type="text" />
        </label>
        <label>
          <span>price</span>
          <input type="number" />
        </label>
        <button type="button">+add</button>
      </form>
    </div>
  );
}
