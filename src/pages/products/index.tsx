import ProductCard from "@/components/molecules/ProductCard";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state: any) => state.products);
  return (
    <Box minHeight={"100vh"} padding={[10, 20]}>
      <Text fontWeight={"bold"} fontSize={"x-large"} marginBottom={5}>
        Katalog
      </Text>
      <Flex columnGap={10} rowGap={10} flexWrap={"wrap"}>
        {products.length &&
          products.map((product: any, i: number) => (
            <Link href={`/products/${product.id}`} key={i}>
              <ProductCard data={product} />
            </Link>
          ))}
      </Flex>
    </Box>
  );
};

export default Products;
