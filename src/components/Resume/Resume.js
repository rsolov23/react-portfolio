import React from "react";
import { Box, Flex, Stack, Heading, Button } from "@chakra-ui/react";
import "./Resume.css";

function Resume() {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        boxShadow="2xl"
        p="6"
        rounded="md"
        spacing={4}
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        bgColor="#40a9e8"
      >
        <Box minW={{ base: "90%", md: "468px" }}>
          <Heading textAlign="center" mb={3}>
            Resume
          </Heading>
          <Flex justifyContent="center">
            <a
              align="center"
              id="download"
              href={require(`../../assets/images/portfolio.pdf`).default}
              download="portfolio.pdf"
              target="_blank"
              rel="noreferrer"
              color="#FAF9F6"
              textColor="#40a9e8"
              mb={3}
            >
              <Button
                color="#FAF9F6"
                textColor="#40a9e8"
                mb={3}
                align="center"
                id="download"
              >
                {" "}
                Download My Resume
              </Button>
            </a>
          </Flex>
        </Box>
      </Stack>
    </Flex>
  );
}
export default Resume;
