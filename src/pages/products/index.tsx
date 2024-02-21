import ProductCard from "@/components/molecules/ProductCard";
import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state: any) => state.products);
  return (
    <Box minHeight={"100vh"}>
      <Flex columnGap={10}>
        {products.length &&
          products.map((product: any) => (
            <Link href={`/products/${product.id}`}>
              <ProductCard data={product} />
            </Link>
          ))}
      </Flex>
    </Box>
  );
};

export default Products;
