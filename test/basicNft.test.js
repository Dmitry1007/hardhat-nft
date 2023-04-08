const { assert } = require("chai")
const { ethers, network, deployments } = require("hardhat")
const { describe } = require("node:test")
const { developmentChains } = require("../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("BasicNft NFT Unit Tests", function () {
          let basicNft, deployer

          beforeEach(async () => {
              accounts = await ethers.getSigners()
              deployer = accounts[0]
              await deployments.fixture(["basicnft"])
              basicNft = await ethers.getContract("BasicNft")
          })

          describe("Constructor", () => {
              it("should have the correct name", async () => {
                  const name = await basicNft.name()
                  assert.equal(name, "Dogie")
              })
              it("should have the correct symbol", async () => {
                  const symbol = await basicNft.symbol()
                  assert.equal(symbol, "DOG")
              })
          })
      })
