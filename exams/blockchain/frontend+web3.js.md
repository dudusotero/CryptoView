# Frontend Developer Test: Web3.js and ETH Price Alert

## Task: Ethereum Price Alert with Web3.js Integration

In this project, we need to create a new page that allows users to connect their Ethereum wallet and get real-time prices of Ethereum (ETH) from an external API (e.g. CoinGecko).
The user should be able to set a price threshold (e.g., $2,000) for ETH. When the price of ETH crosses the threshold (from below to above), the app should display an alert.

### Requirements:

1. **Web3.js Integration**:
    - Allow the user to connect their Ethereum wallet (MetaMask or similar).
    - Fetch and display the user's ETH balance after the wallet is connected.

2. **ETH Price Fetching**:
    - Fetch the current price of ETH using an external API (e.g., CoinGecko).
    - Display the live ETH price on the UI.
    - The ETH price should update every 30 seconds automatically.

3. **Price Alert**:
    - Allow the user to set a price threshold for ETH (e.g., $2,000).
    - When the ETH price crosses the threshold (from below to above), display an alert message such as "ETH price has crossed your threshold!".
    - The alert should disappear when the ETH price goes below the threshold again.

4. **User Interface**:
    - Display:
      - The wallet address.
      - The ETH balance.
      - The live ETH price from CoinGecko.
      - An input field for the user to set the price threshold.
      - An alert message when the price crosses the threshold.

5. **Error Handling**:
    - If the user is not connected to their wallet, show an appropriate message prompting them to connect.
    - If there are any issues with fetching the ETH price, show an error message.

### Deliverables:

- A working page with the following features:
  - Web3.js integration to fetch and display the user's wallet address and ETH balance.
  - ETH price fetched from an external API and displayed on the UI.
  - A threshold input field and a price alert system when the price crosses the threshold.
  - Proper error handling for wallet connection and price fetching.

### Evaluation Criteria:
- Correct Web3.js integration to fetch wallet address and ETH balance.
- Accurate fetching and updating of ETH price from an external API.
- Proper price threshold handling and alert logic.
- Smooth user experience, with clear error messages when necessary.
- Code quality, readability, and structure.

### Time Limit: 20 minutes

Good luck!
