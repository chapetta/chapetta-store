export const ProductFilters = () => {
  return (
    <section className="flex justify-center items-center py-8">

      <label
      htmlFor="0"
      className="rounded-s-lg bg-slate-950 hover:bg-slate-800 text-sm text-slate-100 p-2 cursor-pointer"
      >Todos
        <input
          type="radio"
          name='filter-selection'
          className="hidden"
          id='filter-0'
        />
      </label>

      <label
      htmlFor="1"
      className="bg-slate-950 hover:bg-slate-800 text-sm text-slate-100 p-2 cursor-pointer"
      
      >Feminino
        <input
          type="radio"
          name='filter-selection'
          className="hidden"
          id='filter-1'
        />
      </label>

      <label
      htmlFor="2"
      className="rounded-s-lg bg-slate-950 hover:bg-slate-800 text-sm text-slate-100 p-2 cursor-pointer"
      dir="rtl"
      >Masculino
        <input
          type="radio"
          name='filter-selection'
          className="hidden"
          id='filter-2'
        />
      </label>

    </section>
  );
};