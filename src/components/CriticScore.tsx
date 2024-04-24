import { Badge } from "@chakra-ui/react";
import { FunctionComponent } from "react";

interface CriticScoreProps {
    score: number
}
 
const CriticScore: FunctionComponent<CriticScoreProps> = ({
    score,
}) => {
    const color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''

    return (  
        <Badge colorScheme={color} paddingX={2} fontSize='14px' >
            {score}
        </Badge>
    );
}
 
export default CriticScore;