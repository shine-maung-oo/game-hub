import { FunctionComponent } from "react";
import { HStack, Icon } from "@chakra-ui/react";
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid,
} from "react-icons/fa"
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { IconType } from "react-icons";
import { Platform } from "../types/PlatformTypes";

interface PlatformIconListProps {
    platforms: Platform[]   
}
 
const PlatformIconList: FunctionComponent<PlatformIconListProps> = ({
    platforms
}) => {
    const iconMap: { [key: string]: IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        linux: FaLinux,
        andriod: FaAndroid,
        mac: FaApple,
        ios: MdPhoneIphone,
        web: BsGlobe,
        nintendo: SiNintendo
    }

    return (  
        <HStack marginY={1}>
            {
                platforms.map((platform, index) => (
                    <Icon key={index} as={iconMap[platform.slug]} color={'gray.500'}/>
                ))
            }
        </HStack>
    );
}
 
export default PlatformIconList;