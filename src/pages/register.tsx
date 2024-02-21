import { addUser } from "@/store/usersSlice";
import {
  Box,
  Flex,
  Text,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [nama, setNama] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [formData, setFormData] = useState({
    email: "",
    nama: "",
    password: "",
  });

  const router = useRouter();
  const toast = useToast();

  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch();

  const submit = useCallback(
    (e: any) => {
      e.preventDefault();
      const matchedUser = users.find(
        (user: any) => user.email === formData.email
      );

      if (matchedUser) {
        alert("Email sudah terdaftar");
        // dispatch(setIsLoggedIn(true));
        // dispatch(setProfile(matchedUser));

        return;
      }
      toast({
        title: "Email atau password salah",
        status: "error",
        duration: 2000,
      });
      dispatch(addUser(formData));
      router.push("/login");
    },
    [formData, toast]
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
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                />
              </Box>
              <Box>
                <FormLabel>Nama</FormLabel>
                <Input
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      nama: e.target.value,
                    }))
                  }
                />
              </Box>
              <Box>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) =>
                    setFormData((prevState) => ({
                      ...prevState,
                      password: e.target.value,
                    }))
                  }
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

export default Register;
