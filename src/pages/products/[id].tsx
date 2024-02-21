import { addTotalItem } from "@/store/cartSlice";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const router = useRouter();
  const productDetail = useSelector((state: any) =>
    state.products.find((product: any) => product.id == router.query.id)
  );

  const dispatch = useDispatch();

  const [jumlah, setJumlah] = useState(1);

  return (
    <Box minHeight={"100vh"} padding={30}>
      {productDetail && (
        <Grid templateColumns={"repeat(4, 1fr)"} columnGap={10}>
          <GridItem colSpan={3}>
            <Flex>
              <Img src={productDetail.img} className="max-w-[400px]" />
              <Box>
                <Text fontWeight={"bold"} fontSize={"larger"} marginBottom={5}>
                  {productDetail.title}
                </Text>
                <Text
                  fontWeight={"bold"}
                  fontSize={"x-large"}
                  marginBottom={10}
                >
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(productDetail.price)}
                </Text>
                <Text>{productDetail.desc}</Text>
              </Box>
            </Flex>
          </GridItem>
          <GridItem>
            <Box border={"1px solid black"} borderRadius={10} padding={10}>
              <Flex marginBottom={10} columnGap={5}>
                <Button
                  background={"black"}
                  color={"white"}
                  onClick={() => {
                    if (jumlah === 1) return;
                    setJumlah((prevState) => prevState - 1);
                  }}
                >
                  -
                </Button>
                <Input
                  value={jumlah}
                  background={"white"}
                  onChange={(e) => setJumlah(Number(e.target.value))}
                  // className="!w-fit"
                />
                <Button
                  background={"black"}
                  color={"white"}
                  onClick={() => setJumlah((prevState) => prevState + 1)}
                >
                  +
                </Button>
              </Flex>
              <Flex justifyContent={"space-between"} marginBottom={5}>
                <Text> Subtotal: </Text>
                <Text fontWeight={"bold"}>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(productDetail.price * jumlah)}
                </Text>
              </Flex>
              <Button
                background={"black"}
                color={"white"}
                width={"100%"}
                marginBottom={3}
                onClick={() => dispatch(addTotalItem(jumlah))}
              >
                Tambah ke keranjang
              </Button>
              <Button width={"100%"}>Beli langsung</Button>
            </Box>
          </GridItem>
        </Grid>
      )}
    </Box>
  );
};

export default ProductDetail;
