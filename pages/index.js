import Head from "next/head";
// import styles from "../styles/Home.module.css";
import { useAuth } from "@/lib/auth";
import { Button, Code, Heading, Icon, Image, Text } from "@chakra-ui/react";

export default function Home() {
  const auth = useAuth();
  return (
    <div>
    <Head><title>Animachina</title></Head>
      <main>        
        <Heading>ANIMACHINA</Heading>
        <Image src={'Logo-Orange.png'} alt={'logo'} width={'300px'} objectFit='scale-down'/>
        <Text>
          Current user: <Code>{auth.user ? auth.user.email : "None"}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (
          <Button onClick={(e) => auth.signinWithGoogle()}>Sign In</Button>
        )}
      </main>
    </div>
  );
}
