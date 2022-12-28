const { assert } = require("chai")
const { network, deployments, ethers, getNamedAccounts } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("randomIpfs Unit Test", () => {
        let randomIpfsNft, deployer, VRFCoordinatorV2Mock
        beforeEach(async () => {
            deployer = (await getNamedAccounts()).deployer
            await  deployments.fixture(["mocks", "randomipfs"])
            randomIpfsNft = await ethers.getContract("RandomIpfsNft")
            VRFCoordinatorV2Mock = await ethers.getContract("VRFCoordinatorV2Mock")
        })

        describe("constructor", () => {
            it("sets starting values correctly", async () => {
                const dogTokenUriZero = await randomIpfsNft.getDogTokenUris(0)
                
            })
        })
    })
