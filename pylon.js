window.onload = async () => {
    if (!window.keplr) {
        alert("Please install keplr extension");
    } else 
    await window.keplr.experimentalSuggestChain({
    chainId: "pylons-testnet-3",
    chainName: "PYLON",
    rpc: "http://95.214.53.132:26757", // replace with your rpc url
    rest: "http://95.214.53.132:1117", // replace with your rest api url
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
