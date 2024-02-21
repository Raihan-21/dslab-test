import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const products = useSelector((state: any) => state.products);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Flex>
        <Img src={products[0].img} className="max-w-[500px]" />
        <Box>
          <Text fontWeight={"bold"} fontSize={"xx-large"}>
            {products[0].title}
          </Text>
          <Text>{products[0].desc}</Text>
        </Box>
      </Flex>
    </main>
  );
}
