import React from "react";
import { Box, Flex, Stack, Heading, Button } from "@chakra-ui/react";
import "./Resume.css";
import htmlImage from "../../assets/images/html.png";
import cssImage from "../../assets/images/css.png";
import jsImage from "../../assets/images/js.png";
import reactImage from "../../assets/images/react.png";
import mongoImage from "../../assets/images/mongo.png";
import mysqlImage from "../../assets/images/mysql.png";
import nodeImage from "../../assets/images/node.png";
import npmImage from "../../assets/images/npm.png";
import gitImage from "../../assets/images/git.png";
import expressImage from "../../assets/images/express.png";

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
            <Button
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
              Download My Resume
            </Button>
          </Flex>
          <div className="iframeContainer col-lg-12"></div>
          <div>
            <Heading textAlign="center" mb={3}>
              Skills
            </Heading>
            <div className="logos">
              <Flex flexDir="row" justifyContent="space-between">
                <img src={htmlImage} style={{ padding: "10px" }} />
                <img src={cssImage} style={{ padding: "10px" }} />
                <img src={jsImage} style={{ padding: "10px" }} />
                <img src={mongoImage} style={{ padding: "10px" }} />
                <img src={expressImage} style={{ padding: "10px" }} />
              </Flex>

              <Flex flexDir="row" justifyContent="space-between">
                <img src={reactImage} style={{ padding: "10px" }} />
                <img src={nodeImage} style={{ padding: "10px" }} />
                <img src={mysqlImage} style={{ padding: "10px" }} />
                <img src={npmImage} style={{ padding: "10px" }} />
                <img src={gitImage} style={{ padding: "10px" }} />
              </Flex>
            </div>
          </div>
        </Box>
      </Stack>
    </Flex>
  );
}
export default Resume;
