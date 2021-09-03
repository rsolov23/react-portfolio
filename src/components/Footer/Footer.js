import React from "react";
import { Box, Flex, Stack, Text, Button } from "@chakra-ui/react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

import * as ImIcons from "react-icons/im";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";
import * as GrIcons from "react-icons/gr";

function Footer() {
  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: "4", md: "8" }}
    >
      <Stack>
        <Stack
          direction="row"
          spacing="4"
          align="center"
          justify="space-between"
        >
          <AiIcons.AiTwotoneMail />
          <AiIcons.AiOutlineGithub />
          <AiIcons.AiFillLinkedin />
        </Stack>
        <Text>Copyright</Text>
      </Stack>
    </Box>
  );
}

export default Footer;
