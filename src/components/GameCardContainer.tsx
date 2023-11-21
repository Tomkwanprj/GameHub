import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import GameCard from "./GameCard";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
