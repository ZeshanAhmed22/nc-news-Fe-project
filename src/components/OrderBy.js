const Orderby = ({ setOrderBy }) => {
  const handleChange = (event) => {
    setOrderBy(event.target.value);
    console.log(event.target.value);
  };

  return (
    <select onChange={handleChange} defaultValue={"DESC"}>
      <option value="ASC">Ascending</option>
      <option value="DESC">Descending</option>
    </select>
  );
};

export default Orderby;
