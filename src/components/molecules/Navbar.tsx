import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartTotalItem = useSelector((state: any) => state.cart.totalItem);
  const isLoggedIn = useSelector((state: any) => state.profile.isLoggedIn);

  return (
    <nav>
      <Flex justifyContent={"space-between"} alignItems={"center"} padding={5}>
        <Link href={"/"}>
          <Box>
            <Text fontWeight={"bold"} fontSize={"larger"}>
              Sepatoe
            </Text>
          </Box>
        </Link>
        <Flex columnGap={5}>
          {!isLoggedIn ? (
            <>
              <Link href={"/login"}>
                <Button background={"black"} color={"white"}>
                  Masuk
                </Button>
              </Link>
              <Link href={"/register"}>
                <Button variant={"nostyle"}>Daftar</Button>
              </Link>
            </>
          ) : (
            <>
              <Box position={"relative"}>
                <Text position={"absolute"} top={-5} right={-2}>
                  {cartTotalItem}
                </Text>
                <Link href={"/cart"}>
                  <FiShoppingCart />
                </Link>
              </Box>
              <FaUser />
            </>
          )}
        </Flex>
      </Flex>
    </nav>
  );
};

export default Navbar;
