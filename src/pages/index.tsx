import Image from "next/image";
import { Inter } from "next/font/google";
import { Box, Button, Flex, Img, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const products = useSelector((state: any) => state.products);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 sm:p-24 ${inter.className}`}
    >
      <Flex columnGap={10} flexDirection={["column", "row"]}>
        <Img src={products[0].img} className="max-w-[500px] w-full" />
        <Box>
          <Text fontWeight={"bold"} fontSize={"xx-large"}>
            {products[0].title}
          </Text>
          <Text marginBottom={5}>{products[0].desc}</Text>
          <Link href={"/products"}>
            <Button background={"black"} color={"white"}>
              Katalog
            </Button>
          </Link>
        </Box>
      </Flex>
    </main>
  );
}
