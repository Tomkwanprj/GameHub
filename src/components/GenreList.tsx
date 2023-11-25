import {
  Button,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (name: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, error, isLoading, setData, setErrors, setIsLoading } =
    useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem paddingY={"5px"} key={genre.id}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Button
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
