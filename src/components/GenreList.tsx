import { FunctionComponent } from "react";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import { getCroppedImageUrl } from "../services/image-urls";
import useGenres from "../hooks/useGenres";
import { Genre } from "../types/GenreTypes";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList: FunctionComponent<Props> = ({
  onSelectGenre,
  selectedGenre,
}) => {
  const { genres, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <List paddingX="10px">
      <Heading fontSize={25} marginBottom={5}>
        Genres
      </Heading>
      {genres.map((genre: Genre) => (
        <ListItem paddingY={"10px"} key={genre.id}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              objectFit={"cover"}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize={"md"}
              textAlign="left"
              whiteSpace="normal"
              variant="link"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : ""}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
