import { ethers } from "hardhat";

async function main() {
  const EventManager = await ethers.getContractFactory("EventManager");
  const contract = await EventManager.deploy();
  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
