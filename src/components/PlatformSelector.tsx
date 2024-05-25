import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { FunctionComponent } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../types/PlatformTypes";

interface Props {
  onSelectPlatform: (playform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatFormSelector: FunctionComponent<Props> = ({
  onSelectPlatform,
  selectedPlatform,
}) => {
  const { platforms } = usePlatforms();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        {selectedPlatform ? selectedPlatform.name : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            onClick={() => {
              onSelectPlatform(platform);
            }}
            value={platform.id}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatFormSelector;
