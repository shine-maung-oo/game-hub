import { Heading } from "@chakra-ui/react";
import {FunctionComponent} from "react"
import { GameQueryParams } from "../types/GameTypes";

interface GameHeadingProps {
    gameQueryParams: GameQueryParams
}
 
const GameHeading: FunctionComponent<GameHeadingProps> = ({
    gameQueryParams
}) => {
    const heading = `${gameQueryParams.platform?.name || ""} ${gameQueryParams.genre?.name || ""} Games`
    return (  
        <Heading marginBottom={10} fontSize={25}>
            {heading}
        </Heading>
    );
}
 
export default GameHeading;