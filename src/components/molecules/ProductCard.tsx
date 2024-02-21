import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ data }: { data: any }) => {
  return (
    <Box
      maxWidth={200}
      padding={10}
      boxShadow={"0px 1px 10px 1px lightgray"}
      borderRadius={10}
      cursor={"pointer"}
    >
      <Img src={data.img} />
      <Text>{data.title}</Text>
      <Text>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(data.price)}
      </Text>
    </Box>
  );
};

export default ProductCard;
