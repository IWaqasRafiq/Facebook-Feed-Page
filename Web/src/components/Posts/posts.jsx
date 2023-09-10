import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Heading,
  Text,
  Box,
  Flex,
  Button,
  IconButton,
  Image,
  Divider,
  Collapse,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { useState } from "react";
import {
  EditIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { MdOutlineReportOff, MdOutlineDeleteOutline  } from "react-icons/md";
import  moment  from "moment";

const ZeroPost = () => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const timeStamp = moment().fromNow();
  return (
    <div>
      <Card maxW="lg" m="6">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="sm">Segun Adebayo</Heading>
                <Text fontSize="sm" color="gray.500">
                  {timeStamp}
                </Text>
              </Box>
            </Flex>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                _hover="null"
                bg="null"
                icon={<HamburgerIcon />}
              />
              <MenuList>
                <MenuItem icon={<EditIcon />}>
                  Edit Post...
                </MenuItem>
                <MenuItem icon={<MdOutlineReportOff />}>
                  Report Post
                </MenuItem>
                <MenuItem icon={<MdOutlineDeleteOutline />} >
                  Delete Post
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </CardHeader>
        <CardBody paddingTop={0.5}>
          <Collapse startingHeight={50} in={show}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident. Lorem, ipsum
            dolor sit amet consectetur adipisicing elit. Asperiores laborum,
            alias mollitia illum doloribus reiciendis iste, quo nemo harum
            molestias quam quaerat eum fugit, minima nisi enim! Harum, non
            quaerat.
          </Collapse>
          <Button
            _hover="null"
            bg="null"
            size="sm"
            paddingLeft="-0.5"
            onClick={handleToggle}
          >
            Show {show ? "Less" : "More"}
          </Button>
        </CardBody>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        />
        <Divider color="blackAlpha" />
        <CardFooter
          paddingTop={-0.5}
          paddingBottom={-0.5}
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};


const Posts = ({postTitle, postBody}) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);
  const timeStamp = moment().fromNow();
  return (
    <div>
      <Card maxW="lg" m="6">
        <CardHeader>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="sm">{postTitle}</Heading>
                <Text fontSize="sm" color="gray.500">
                  {timeStamp}
                </Text>
              </Box>
            </Flex>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                _hover="null"
                bg="null"
                icon={<HamburgerIcon />}
              />
              <MenuList>
                <MenuItem icon={<EditIcon />}>
                  Edit Post...
                </MenuItem>
                <MenuItem icon={<MdOutlineReportOff />}>
                  Report Post
                </MenuItem>
                <MenuItem icon={<MdOutlineDeleteOutline />} >
                  Delete Post
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </CardHeader>
        <CardBody paddingTop={0.5}>
          <Collapse startingHeight={50} in={show}>
            {postBody}
          </Collapse>
          <Button
            _hover="null"
            bg="null"
            size="sm"
            paddingLeft="-0.5"
            onClick={handleToggle}
          >
            Show {show ? "Less" : "More"}
          </Button>
        </CardBody>
        <Image
          objectFit="cover"
          src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Chakra UI"
        />
        <Divider color="blackAlpha" />
        <CardFooter
          paddingTop={-0.5}
          paddingBottom={-0.5}
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
          <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
            Like
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
            Comment
          </Button>
          <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
            Share
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export { ZeroPost, Posts}  ;
