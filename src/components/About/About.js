import React from "react";
import { Box, Flex, Stack, Heading, Text } from "@chakra-ui/react";

function About() {
  return (
    <>
      <Flex
        flexDirection="column"
        width="100wh"
        height="100vh"
        justifyContent="center"
        alignItems="center"

  
      >
        <Heading as="h1" size="4xl" isTruncated>
          Rachel Solov
        </Heading>
        <Text fontSize="4xl">Full Stack Web Developer in Austin, TX</Text>
        <Flex
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          mb={150}
        >
          <a href="https://github.com/rsolov23" style={{ padding: "15px" }}>
            {" "}
            <i className="fab fa-github-square fa-3x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rachel-solov-80bb3a174"
            style={{ padding: "15px" }}
          >
            <i className="fab fa-linkedin fa-3x"></i>
          </a>
          <a href="mailto:rsolov23@yahoo.com" style={{ padding: "15px" }}>
            <i class="fas fa-envelope-square fa-3x"></i>
          </a>
        </Flex>
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          {" "}
          <div id="down-arrow">
            <span>
              <a href="#about">
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
              </a>
            </span>
          </div>
        </Flex>
      </Flex>
      <Bio />
    </>
  );
}

export default About;

function Bio() {
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"

      // backgroundImage="url('../images/background.jpg')"
      // backgroundPosition="center"
      // backgroundRepeat="no-repeat"
      // backgroundSize="cover"
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
        <Box minW={{ base: "90%", md: "200px" }}>
          <a className="anchor" name="about"></a>
          <Heading textAlign="center" p="2rem">
            About
          </Heading>

          <Text textAlign="center" p="2rem">
            I am a Full Stack Web Developer currently enjoying the rigorous
            fast-paced Coding Boot Camp at the University of Texas. I am a
            motivated, creative, and dependable individual. I thrive when
            handling multiple tasks on a daily basis competently and I work well
            under pressure. In my free time I enjoy spending time in the
            outdoors with my two dogs, attending concerts, and spending time
            with my grandfather.
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
}
