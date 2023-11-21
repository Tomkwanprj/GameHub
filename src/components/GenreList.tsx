import { HStack, Icon, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading, setData, setErrors, setIsLoading } =
    useGenres();

  return (
    <List>
      {data.map(({ id, name, image_background }) => (
        <ListItem paddingY={"5px"} key={id}>
          <HStack>
            <Image
              src={getCroppedImageUrl(image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize={"lg"}>{name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
