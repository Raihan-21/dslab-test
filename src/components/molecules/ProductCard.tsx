import { Box, Flex, Img, Text } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ data }: { data: any }) => {
  return (
    <Flex
      flexDirection={"column"}
      justifyContent={"space-between"}
      maxWidth={200}
      height={"100%"}
      paddingY={8}
      paddingX={5}
      boxShadow={"0px 1px 10px 1px lightgray"}
      borderRadius={10}
      background={"white"}
      cursor={"pointer"}
    >
      <Img src={data.img} marginBottom={5} />
      <Box>
        <Text>{data.title}</Text>
        <Text fontWeight={"bold"}>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(data.price)}
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductCard;
