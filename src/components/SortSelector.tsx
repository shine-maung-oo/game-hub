import { FunctionComponent } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronBarDown } from "react-icons/bs";

interface SortSelectorProps {
    onSelectSort: (sort: String) => void,
    selectedSort: String | null
}

const sortQuery = [
    {label: "Relevence", value: "relevence"},
    {label: "Date added", value: "-added"},
    {label: "Name", value: "name"},
    {label: "Release date", value: "-released"},
    {label: "Popularity", value: "popularity"},
    {label: "Average rating", value: "rating"},
]
 
const SortSelector: FunctionComponent<SortSelectorProps> = ({
    onSelectSort,
    selectedSort
}) => {

    const selectedSortLabel: string = sortQuery.filter(sort => sort.value === selectedSort)[0]?.label

    return (  
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
                {selectedSortLabel || "Sort By"}
            </MenuButton>
            <MenuList>
                {
                    sortQuery.map(sort => (
                        <MenuItem key={sort.value} onClick={() => onSelectSort(sort.value)}>{sort.label}</MenuItem>
                    ))
                }
            </MenuList>
        </Menu>
    );
}
 
export default SortSelector;