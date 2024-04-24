import { HStack, Image } from "@chakra-ui/react";
import logo from '../assets/logo.png'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { FunctionComponent } from "react";

interface Props {
    onSearch: (searchText: String) => void
}

const Navbar: FunctionComponent<Props> = ({
    onSearch
}) => {

    return (  
        <HStack p={2} spacing={5} justifyContent={'space-between'}>
            <Image src={logo} boxSize="50px" />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
}
 
export default Navbar;