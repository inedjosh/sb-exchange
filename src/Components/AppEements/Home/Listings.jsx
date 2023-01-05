import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { Image, Box, Flex } from "@chakra-ui/react";
import React from "react";
import BodyText from "../../TextElements/BodyText";

const Listings = () => {
  const coins = [
    {
      id: 1,
      img: "xrp.png",
      name: "XRP $0.003",
      action: "loss",
      amount: 8,
    },
    {
      id: 2,
      img: "bitcoin.png",
      name: "BTC $10.003",
      action: "gain",
      amount: 3,
    },
    {
      id: 3,
      img: "nem.png",
      name: "NEM $0.003",
      action: "gain",
      amount: 8,
    },
    {
      id: 4,
      img: "iota.png",
      name: "IOTA $0.003",
      action: "loss",
      amount: 8,
    },
  ];

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      my={[null, null, "10px", "10"]}
    >
      <Flex
        width={["100%", "100%", "90%", "80%"]}
        bg="#F5F5F5"
        p={["5px", "5px", "15px", "5"]}
        borderRadius={"40"}
        justifyContent={["center"]}
      >
        {coins.map((coin) => (
          <Flex key={coin.id} px={[null, null, "20px", "10"]}>
            <Image
              src={coin.img}
              alt={coin.name}
              w={[null, null, "15px", "5"]}
              h={[null, null, "15px", "5"]}
            />
            <BodyText color="#000" fontSize={[null, null, "12px", null]}>
              {coin.name}
            </BodyText>
            <BodyText color="#000" fontSize={[null, null, "12px", null]}>
              (
              {coin.action === "loss" ? (
                <ArrowUpIcon color={"green"} />
              ) : (
                <ArrowDownIcon color={"red"} />
              )}
              {coin.amount}%)
            </BodyText>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Listings;
