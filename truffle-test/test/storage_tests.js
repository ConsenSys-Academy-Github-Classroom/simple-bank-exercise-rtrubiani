const StorageTests = artifacts.require("StorageTests");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("StorageTests", function (/* accounts */) {
  it("should assert true", async function () {
    await StorageTests.deployed();
    return assert.isTrue(true);
  });
});
