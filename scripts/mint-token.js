import { ethers } from "ethers";
import sdk from "./initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
  "0x5bB591Eb4b1a893109616296ae93948370F7154d"
);

(async () => {
  try {
    const amount = 1_000_000;
    const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
    await tokenModule.mint(amountWith18Decimals);
    const totalSupply = await tokenModule.totalSupply();

    console.log(
      "✅ There now is",
      ethers.utils.formatUnits(totalSupply, 18),
      "$TOKEN in circulation"
    );
  } catch (error) {
    console.error("Failed to mint tokens", error);
  }
})();
