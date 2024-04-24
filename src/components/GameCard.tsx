import { FunctionComponent } from "react";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../types/GameTypes";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { getCroppedImageUrl } from "../services/image-urls";
import Emoji from "./Emoji";

interface GameCardProps {
    game: Game
}
 
const GameCard: FunctionComponent<GameCardProps> = ({
    game,
}) => {
    return (  
        <Card width="100%" borderRadius={10} overflow={"hidden"}>
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                <HStack justifyContent='space-between' marginY={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                <HStack>
                    <Heading fontSize={18} >{game.name}</Heading>
                    <Emoji rating={game.rating_top} />
                </HStack>
            </CardBody>
        </Card>
    );
}
 
export default GameCard;