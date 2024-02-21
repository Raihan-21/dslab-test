import { setIsLoggedIn, setProfile } from "@/store/profileSlice";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  const router = useRouter();

  const toast = useToast();

  const submit = useCallback(
    (e: any) => {
      e.preventDefault();
      const matchedUser = users.find(
        (user: any) => user.email === email && user.password === password
      );

      if (matchedUser) {
        dispatch(setIsLoggedIn(true));
        dispatch(setProfile(matchedUser));
        router.push("/");
        return;
      }
      toast({
        title: "Email atau password salah",
        status: "error",
        duration: 2000,
      });
      alert("Email atau password salah");
    },
    [email, password, users, toast]
  );

  return (
    <Box minHeight={"100vh"}>
      <Flex justifyContent={"center"} alignItems={"center"} paddingTop={20}>
        <Box
          backgroundColor={"white"}
          padding={8}
          borderRadius={10}
          width={"100%"}
          maxWidth={350}
        >
          <Text fontWeight={"bold"} fontSize={"larger"} marginBottom={10}>
            Login
          </Text>
          <form onSubmit={submit}>
            <Box marginBottom={5} className="space-y-4">
              <Box>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="user@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  placeholder="test123"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Box>
            </Box>
            <Button backgroundColor={"black"} color={"white"} type="submit">
              Login
            </Button>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
