import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  color,
  Button,
} from "@chakra-ui/react";
import startFireBase from "./fb-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
const small = {
  fontSize: "0.5rem",
  color: "grey",
};

const Login = () => {
  const Email = React.useRef();
  const Password = React.useRef();
  const [logged, setLogged] = React.useState(false);
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    console.log(user);
  }, [user]);
  const fieldStyle = {
    bgColor: "white",
    borderRadius: "0.25em",
    border: "0.1em solid #a6acbe",
    width: "18rem",
    height: "2rem",
    mt: "0.5em",
    mb: "0.1em",
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
            const auth = getAuth();
            signInWithEmailAndPassword(auth, Email.current, Password.current)
              .then((userCredential) => {
                setLoggedIn(true);
                setUser(userCredential.user);
                console.log(user);
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
              });
          }}
        >
          Login
        </Button>
        <p className="tiny">
          You don't have an account? <Link to="SignUp">create account</Link>
        </p>
      </FormControl>
    </Box>
  );
};

export default Login;
