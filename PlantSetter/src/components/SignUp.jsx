import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  color,
  Button,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";
import startFireBase from "./fb-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import user from "../assets/user.png";
const small = {
  fontSize: "0.5rem",
  color: "grey",
};
const fieldStyle = {
  bgColor: "white",
  borderRadius: "0.25em",
  border: "0.1em solid #a6acbe",
  width: "18rem",
  height: "2rem",
  mt: "0.5em",
  mb: "0.5em",
};
const NAmefield = {
  bgColor: "white",
  borderRadius: "0.25em",
  border: "0.1em solid #a6acbe",
  width: "12rem",
  height: "2rem",
  mt: "0.5em",
  mb: "0.1em",
  display: "inline-block",
};

const LoginButton = {
  display: "block",
  m: "auto",
  mt: "1em",
  alignText: "center",
  bgColor: "#2cb67d",
  fontSize: "1.25rem",
  fontFamily: ' font-family: "Montserrat", sans-serif',
  color: "white",
  paddingY: "0.35em",
  paddingX: "0.75em",
};
const SignUp = () => {
  const [img, setImg] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const Email = React.useRef();
  const Password = React.useRef();
  const navigate = useNavigate();
  React.useEffect(() => {
    if (user != null) {
      navigate("/Dashboard");
    }
  }, [user]);

  return (
    <Box
      height="100%"
      width="100%"
      bgColor="#f8f8fb"
      position="absolute"
      top="0"
      left="0"
    >
      <FormControl
        as="fieldset"
        width="20rem"
        mx="auto"
        mt="15%"
        bgColor="white"
        borderRadius="1em"
        border="none"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
        p="2em"
      >
        <Avatar
          as="span"
          bgColor="white"
          mx="30%"
          src={img == null ? user : img}
        >
          <AvatarBadge
            bgColor="#2cb67d"
            boxSize="2rem"
            borderRadius="50%"
            cursor="pointer"
          >
            <p className="add">+</p>
            <Input
              type="file"
              opacity="0"
              z-index="10"
              width="100%"
              position="fixed"
              top="5"
              height="100%"
              cursor="pointer"
              onChange={(e) => {
                setImg(e.target.files[0]);
                console.log(img);
              }}
            ></Input>
          </AvatarBadge>
        </Avatar>

        <FormLabel color="black" fontSize="1.25rem" display="block">
          First name
        </FormLabel>

        <Input
          sx={fieldStyle}
          type="text"
          bgColor="white"
          color="black"
          onChange={(e) => {
            Email.current = e.target.value;
          }}
        ></Input>

        <FormLabel color="black" fontSize="1.25rem" display="block">
          Second Name
        </FormLabel>

        <Input
          sx={fieldStyle}
          type="text"
          bgColor="white"
          color="black"
          onChange={(e) => {}}
        ></Input>

        <FormLabel color="black" fontSize="1.25rem">
          Email address
        </FormLabel>
        <Input
          sx={fieldStyle}
          type="email"
          bgColor="white"
          color="black"
          onChange={(e) => {
            Email.current = e.target.value;
          }}
        ></Input>
        <FormHelperText sx={small}>
          to get informations your plants state
        </FormHelperText>
        <FormLabel color="black" fontSize="1.25rem">
          Password
        </FormLabel>
        <Input
          sx={fieldStyle}
          type="password"
          bgColor="white"
          onChange={(e) => {
            Password.current = e.target.value;
          }}
          color="black"
        ></Input>
        <Button
          sx={LoginButton}
          onClick={() => {
            console.log(Email.current + "   " + Password.current);
            const auth = getAuth();
            createUserWithEmailAndPassword(
              auth,
              Email.current,
              Password.current
            )
              .then((userCredential) => {
                setUser(userCredential.user);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
          }}
        >
          SignUp
        </Button>
      </FormControl>
    </Box>
  );
};

export default SignUp;
