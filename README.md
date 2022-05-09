## PYLON pylons-testnet-3 keplr wallet integration
<!--
#### Requirements 
[keplr wallet extension](https://google.com)
-->
### Auto installation
1) Just visit this link. Once the keplr window popup press the approve button.  
2) In the network section choose PYLON network  
3) That's it. Have fun:)  

### Manual installation

Open the developer console:

- Chromium based browsers: View> Developer>Developer Tools(ctrl-shift-j)

- Copy paste the code and press enter. Do not forget to edit rpc and rest api urls in the code! :


```markdown
window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "pylons-testnet-3",
    chainName: "PYLON",
    rpc: "http://95.214.53.132:26757", // replace with your rpc url
    rest: "http://95.214.53.132:1717", // replace with your rest api url
    bip44: {
        coinType: 118,
    },
    bech32Config: {
        bech32PrefixAccAddr: "pylo",
        bech32PrefixAccPub: "pylo" + "pub",
        bech32PrefixValAddr: "pylo" + "valoper",
        bech32PrefixValPub: "pylo" + "valoperpub",
        bech32PrefixConsAddr: "pylo" + "valcons",
        bech32PrefixConsPub: "pylo" + "valconspub",
    },
    currencies: [ 
        { 
            coinDenom: "PYLON", 
            coinMinimalDenom: "upylon", 
            coinDecimals: 6, 
            coinGeckoId: "upylon", 
        }, 
    ],
    feeCurrencies: [
        {
            coinDenom: "PYLON",
            coinMinimalDenom: "upylon",
            coinDecimals: 6,
            coinGeckoId: "upylon",
        },
    ],
    stakeCurrency: {
        coinDenom: "PYLON",
        coinMinimalDenom: "upylon",
        coinDecimals: 6,
        coinGeckoId: "upylon",
    },
    coinType: 118,
    gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.03,
    },
});
}
```
