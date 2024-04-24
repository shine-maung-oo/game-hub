import { Icon } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { IconType } from "react-icons";
import { BsFillEmojiSmileFill, BsFillEmojiLaughingFill, BsFillEmojiHeartEyesFill } from 'react-icons/bs';

interface EmojiProps {
    rating: number
}
 
const Emoji: FunctionComponent<EmojiProps> = ({
    rating
}) => {
    const emojies: {[key: number]: IconType} = {
        3: BsFillEmojiSmileFill,
        4: BsFillEmojiLaughingFill,
        5: BsFillEmojiHeartEyesFill
    }

    return (  
        <Icon as={emojies[rating]} color={"#F79327"} fontSize={20} />
    );
}
 
export default Emoji;