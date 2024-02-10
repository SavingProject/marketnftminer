import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
//import { MARKETPLACE_ADDRESS } from "../const/contractAddresses"; 

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const { contract } = useContract(NFT_COLLECTION_ADDRESS);
  const { data, isLoading } = useNFTs(contract,
    {count: 226,
    start: 0,}
    );

  return (
    <Container maxWidth="xl">
      <h1>Buy Nft Miner</h1>
      <p>Browse which NFTs are available from the collection</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        emptyText={
          " "
        }
      />
    </Container>
  );
}
