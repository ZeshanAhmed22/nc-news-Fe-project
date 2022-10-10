const Sortby = ({ setSortBy }) => {
  const handleChange = (event) => {
    setSortBy(event.target.value);
    console.log(event.target.value);
  };

  return (
    <select onChange={handleChange} defaultValue={"created_at"}>
      <option value="created_at">Date</option>
      <option value="comment_count">Comment Count</option>
      <option value="votes">Votes</option>
    </select>
  );
};

export default Sortby;
