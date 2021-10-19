import React from "react";
import {
  Button,
  Box,
  Link,
  useColorModeValue,
  Stack,
  Image,
  Flex,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import jotitImage from "./images/1234.png";
import helpingHands from "./images/helpinghands.png";
import game from "./images/gaminator.png";
import weather from "./images/weather.png";
import employee from "./images/employee.png";
import team from "./images/team.png";
export default function ProductSimple() {
  return (
    <Flex justifyContent="center" mt={20}>
      <Box
        m={2}
        role={"group"}
        p={6}
        maxW={"200px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        height="300px"
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"190px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${helpingHands})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            alt="project image"
            rounded={"lg"}
            height={190}
            width={282}
            objectFit={"cover"}
            src={helpingHands}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Link
            href={"https://helping-hands-deux.herokuapp.com//"}
            color={"#1c3866"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            Helping Hands
          </Link>
          <Stack direction={"row"} align={"center"}>
            <Button
              href={"https://github.com/r0yster/helping-hands"}
              fontWeight={800}
              fontSize={"xl"}
              bgColor={"#1c3866"}
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box
        m={2}
        role={"group"}
        p={6}
        maxW={"200px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        height="300px"
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"190px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${jotitImage})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            alt="project image"
            rounded={"lg"}
            height={190}
            width={282}
            objectFit={"cover"}
            src={jotitImage}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Link
            href={"https://jotitgood.herokuapp.com/"}
            color={"#1c3866"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            Jot It
          </Link>
          <Stack direction={"row"} align={"center"}>
            <Button
              href={"https://github.com/rsolov23/Jot-It"}
              fontWeight={800}
              fontSize={"xl"}
              bgColor={"#1c3866"}
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box
        m={2}
        role={"group"}
        p={6}
        maxW={"200px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        height="300px"
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"190px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${game})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            alt="project image"
            rounded={"lg"}
            height={190}
            width={282}
            objectFit={"cover"}
            src={game}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Link
            href={"https://rsolov23.github.io/Gaminator/"}
            color={"#1c3866"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            Gaminator
          </Link>

          <Stack direction={"row"} align={"center"}>
            <Button
              href={"https://github.com/rsolov23/Gaminator"}
              fontWeight={800}
              fontSize={"xl"}
              bgColor={"#1c3866"}
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box
        m={2}
        role={"group"}
        p={6}
        maxW={"200px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        height="300px"
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"190px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${weather})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            alt="project image"
            rounded={"lg"}
            height={190}
            width={282}
            objectFit={"cover"}
            src={weather}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Link
            href={"https://github.com/rsolov23/Rachel-s-Weather-Dashboard"}
            color={"#1c3866"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            Weather Dashboard
          </Link>

          <Stack direction={"row"} align={"center"}>
            <Button
              href={"https://github.com/rsolov23/Rachel-s-Weather-Dashboard"}
              fontWeight={800}
              fontSize={"xl"}
              bgColor={"#1c3866"}
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box
        m={2}
        role={"group"}
        p={6}
        maxW={"200px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        height="300px"
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"190px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${employee})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            alt="project image"
            rounded={"lg"}
            height={190}
            width={282}
            objectFit={"cover"}
            src={employee}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Link
            href={"https://github.com/rsolov23/Rachel-s-Employee-Tracker"}
            color={"#1c3866"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            Employee Tracker
          </Link>

          <Stack direction={"row"} align={"center"}>
            <Button
              href={"https://github.com/rsolov23/Rachel-s-Employee-Tracker"}
              fontWeight={800}
              fontSize={"xl"}
              bgColor={"#1c3866"}
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Box>

      <Box
        m={2}
        role={"group"}
        p={6}
        maxW={"200px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        height="300px"
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"190px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${team})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            alt="project image"
            rounded={"lg"}
            height={190}
            width={282}
            objectFit={"cover"}
            src={team}
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Link
            href={"https://github.com/rsolov23/Rachel-s-Team-Profile-Generator"}
            color={"#1c3866"}
            fontSize={"sm"}
            textTransform={"uppercase"}
          >
            Team Generator
          </Link>

          <Stack direction={"row"} align={"center"}>
            <Button
              href={
                "https://github.com/rsolov23/Rachel-s-Team-Profile-Generator"
              }
              fontWeight={800}
              fontSize={"xl"}
              bgColor={"#1c3866"}
            >
              Github
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Flex justifyContent="right" alignItems="right" flexDirection="row">
        {/* <Footer /> */}
      </Flex>
    </Flex>
  );
}
