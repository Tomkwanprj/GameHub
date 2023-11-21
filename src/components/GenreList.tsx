import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error, isLoading, setData, setErrors, setIsLoading } =
    useGenres();

  return (
    <ul>
      {data.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
