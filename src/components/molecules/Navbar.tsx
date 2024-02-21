import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartTotalItem = useSelector((state: any) => state.cart.totalItem);

  return (
    <nav>
      <Flex justifyContent={"space-between"} padding={5}>
        <Box>Navbar</Box>
        <Flex>
          <Text>{cartTotalItem}</Text>
          <FiShoppingCart />
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
