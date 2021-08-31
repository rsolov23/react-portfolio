import React from "react";
import { Box, Flex, Stack, Heading, Button } from "@chakra-ui/react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import * as ImIcons from "react-icons/im";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";
import * as GrIcons from "react-icons/gr";

function Skills() {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      m={5}
    >
      <Stack
        boxShadow="2xl"
        rounded="md"
        spacing={4}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bgColor="#40a9e8"
      >
        <Box minW={{ base: "90%", md: "468px" }} p="10">
          <div>
            <Heading textAlign="center" mb={5}>
              Skills
            </Heading>

            <Flex flexDir="row" style={{ color: "white", fontSize: "4.5em" }}>
              <ImIcons.ImHtmlFive />
              <ImIcons.ImCss3 />
              <SiIcons.SiJavascript />
              <FaIcons.FaGithub />
              <ImIcons.ImNpm />
              <GrIcons.GrGraphQl />
              <SiIcons.SiMysql />
            </Flex>

            <Flex flexDir="row" style={{ color: "white", fontSize: "4.5em" }}>
              <FaIcons.FaGitSquare />
              <DiIcons.DiNodejs />
              <DiIcons.DiMongodb />
              <FaIcons.FaReact />
              <DiIcons.DiHeroku />
              <AiIcons.AiOutlineConsoleSql />
              <SiIcons.SiVisualstudiocode />
            </Flex>
          </div>
        </Box>
      </Stack>
    </Flex>
  );
}
export default Skills;
