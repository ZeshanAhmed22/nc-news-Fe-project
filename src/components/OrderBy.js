const Orderby = ({ setOrderBy }) => {
  const handleChange = (event) => {
    setOrderBy(event.target.value);
    console.log(event.target.value);
  };

  return (
    <select
      className="filter-order"
      onChange={handleChange}
      defaultValue={"DESC"}
    >
      <option className="options" value="ASC">
        Ascending
      </option>
      <option className="options" value="DESC">
        Descending
      </option>
    </select>
  );
};

export default Orderby;
