export const InputSearch = () => {
  return (
    <label htmlFor="search" className="flex  justify-center m-20">
      <input
        type="text"
        placeholder="Pesquiste um produto"
        id="search"
        name="search"
        className="text-center border-2" />
    </label>
  );
};