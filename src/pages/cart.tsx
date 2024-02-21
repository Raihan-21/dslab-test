import { addItem, addTotalItem, reduceTotalItem } from "@/store/cartSlice";
import { Box, Flex, Img, Text, Button, Input } from "@chakra-ui/react";
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const [jumlah, setJumlah] = useState(0);

  const addToCart = useCallback(() => {
    dispatch(addTotalItem(jumlah));
    // dispatch(addItem({ ...productDetail, jumlah }));
  }, [jumlah]);

  return (
    <Flex padding={20} minHeight={"100vh"} columnGap={10}>
      <Box borderRadius={20} background={"white"} padding={10}>
        {cartItems.length &&
          cartItems.map((item: any) => (
            <Flex justifyContent={"space-between"}>
              <Flex columnGap={10}>
                <Img src={item.img} maxWidth={100} />
                <Box>
                  <Text>{item.title}</Text>
                </Box>
              </Flex>
              <Box>
                <Text fontWeight={"bold"} marginBottom={5}>
                  {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  }).format(item.price)}
                </Text>
                <Flex marginBottom={10} columnGap={5}>
                  <Button
                    background={"black"}
                    color={"white"}
                    onClick={() => {
                      if (jumlah === 1) return;
                      dispatch(reduceTotalItem(1));
                      setJumlah((prevState) => prevState - 1);
                    }}
                  >
                    -
                  </Button>
                  <Box
                    // value={jumlah}
                    // background={"white"}
                    // onChange={(e) => setJumlah(Number(e.target.value))}
                    className="!w-[80px]"
                  >
                    {item.jumlah}
                  </Box>
                  <Button
                    background={"black"}
                    color={"white"}
                    onClick={() => {
                      dispatch(addTotalItem(1));
                      setJumlah((prevState) => prevState + 1);
                    }}
                  >
                    +
                  </Button>
                </Flex>
              </Box>
            </Flex>
          ))}
      </Box>
      <Box borderRadius={20} background={"white"} padding={10} flexGrow={1}>
        <Text>Ringkasan</Text>
        <Flex justifyContent={"space-between"}>
          <Text>Total:</Text>
          <Text></Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Cart;
