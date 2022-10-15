const Sortby = ({ setSortBy }) => {
  const handleChange = (event) => {
    setSortBy(event.target.value);
    console.log(event.target.value);
  };

  return (
    <select
      className="filter-sort"
      onChange={handleChange}
      defaultValue={"created_at"}
    >
      <option className="options" value="created_at">
        Date
      </option>
      <option className="options" value="comment_count">
        Comment Count
      </option>
      <option className="options" value="votes">
        Votes
      </option>
    </select>
  );
};

export default Sortby;
