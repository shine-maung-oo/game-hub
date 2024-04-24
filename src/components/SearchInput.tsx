import {FunctionComponent, useRef} from "react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiSearchAlt } from 'react-icons/bi';

interface SearchInputProps {
    onSearch: (searchText: String) => void
}
 
const SearchInput: FunctionComponent<SearchInputProps> = ({
    onSearch
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return ( 
        <form onSubmit={(event) => {
            event.preventDefault();
            if (inputRef.current) onSearch(inputRef.current.value)
        }} style={{width: "100%"}}>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <BiSearchAlt color='gray.300' />
                </InputLeftElement>
                <Input ref={inputRef} type='text' placeholder='Search game' />
            </InputGroup>
        </form>
    );
}
 
export default SearchInput;