const http = require("http");
const WebSocket = require("ws");

const PORT = 3000;
const numberOfClients = 2000;
let connectedClients = 0;
let startTime;

// Create an HTTP server
const server = http.createServer();

// Create a WebSocket server
const wss = new WebSocket.Server({ server });

// Array to hold all connected clients
const clients = [];

// Event listener for when a client connects
wss.on("connection", function connection(ws) {
  console.log("Client connected");

  // Increment the count of connected clients
  connectedClients++;

  // Add the client to the list of connected clients
  clients.push(ws);

  // If all clients have connected, record the start time and send message to all clients
  if (connectedClients === numberOfClients) {
    startTime = Date.now();
    console.log("Time start: ", startTime);
    // const message = JSON.stringify({
    //   data: "Hello, clients!",
    //   timestamp: Date.now(),
    // });
    clients.forEach((client) =>
      client.send(
        JSON.stringify({
          data: '{\r\n    "id": "65e83d2eb26f0095e363ad54",\r\n    "username": "daonguyen",\r\n    "email": "daonguyen@mxv.vn",\r\n    "session": {\r\n        "fom": "dda1df6b526e"\r\n    },\r\n    "userRoles": [\r\n        "GET_ACTIVITY-HISTORY",\r\n        "PUT_SESSION",\r\n        "PUT_APPROVAL_SYSTEM-MANAGEMENT_UPDATE-SESSION",\r\n        "POST_SESSION",\r\n        "PUT_APPROVAL_SYSTEM-MANAGEMENT_CREATE-SESSION",\r\n        "GET_SESSION_COMMODITY",\r\n        "GET_SESSION",\r\n        "GET_SESSION_DEFAULT",\r\n        "DELETE_SESSION",\r\n        "GET_DAYOFF",\r\n        "POST_DAYOFF",\r\n        "PUT_APPROVAL_SYSTEM-MANAGEMENT_CREATE-DAY-OFF",\r\n        "PUT_DAYOFF",\r\n        "PUT_APPROVAL_SYSTEM-MANAGEMENT_UPDATE-DAY-OFF",\r\n        "GET_EOD-HISTORY",\r\n        "POST_REPORT_SYNC",\r\n        "PUT_EOD",\r\n        "PUT_APPROVAL_SYSTEM-MANAGEMENT_UPDATE-EOD",\r\n        "POST_EOD_RUN",\r\n        "PUT_CONTRACT-TERM",\r\n        "GET_CONTRACT-TERM",\r\n        "PUT_APPROVAL_SYSTEM-MANAGEMENT_UPDATE-DELIVERY-TIME",\r\n        "PUT_CONTRACT-TERM",\r\n        "GET_CONTRACT-TERM",\r\n        "PUT_APPROVAL_SYSTEM-MANAGEMENT_UPDATE-PAYMENT-TIME",\r\n        "PUT_CONTRACT-TERM",\r\n        "GET_CONTRACT-TERM",\r\n        "PUT_APPROVAL_SYSTEM-MANAGEMENT_UPDATE-ADDITION-DEPOSIT-TIME",\r\n        "GET_NOTI-METHOD",\r\n        "GET_NOTI-CONFIG_LIST-SELECT-NAME",\r\n        "GET_NOTI-CONFIG_LIST-SELECT-OBJECT",\r\n        "GET_NOTI-CONFIG_LIST-SELECT-USER",\r\n        "GET_NOTI-CONFIG",\r\n        "PUT_NOTI-CONFIG",\r\n        "GET_NOTI-HISTORY",\r\n        "GET_LIST-DEPARTMENT",\r\n        "POST_DEPARTMENT",\r\n        "PUT_APPROVAL_AUTH_CREATE-DEPT",\r\n        "GET_DEPARTMENT",\r\n        "PUT_DEPARTMENT",\r\n        "PUT_APPROVAL_AUTH_UPDATE-DEPT",\r\n        "GET_LIST-USER",\r\n        "PUT_USER_ASSIGN-GROUP-ROLES",\r\n        "PUT_APPROVAL_AUTH_UPDATE-GROUP-ROLE",\r\n        "PUT_USER_ASSIGN-ROLES",\r\n        "PUT_APPROVAL_AUTH_ASSIGN-ROLE",\r\n        "GET_USER",\r\n        "POST_USER",\r\n        "PUT_USER_PROFILE",\r\n        "PUT_APPROVAL_AUTH_UPDATE-PROFILE",\r\n        "PUT_RESET-PASSWORD",\r\n        "PUT_RESET-PIN",\r\n        "PUT_CHANGE-DEPARTMENT",\r\n        "PUT_APPROVAL_AUTH_CHANGE-DEPARTMENT",\r\n        "GET_GROUP-ROLE",\r\n        "GET_LIST-ROLES",\r\n        "POST_GROUP-ROLE",\r\n        "PUT_APPROVAL_AUTH_CREATE-GROUP-ROLE",\r\n        "PUT_GROUP-ROLE",\r\n        "PUT_APPROVAL_AUTH_UPDATE-GROUP-ROLE",\r\n        "GET_COMMODITY",\r\n        "POST_COMMODITY",\r\n        "PUT_APPROVAL_RE-COMMODITY_CREATE-COMMODITY",\r\n        "PUT_COMMODITY",\r\n        "PUT_APPROVAL_RE-COMMODITY_UPDATE-COMMODITY",\r\n        "GET_DEPOSIT-RATE",\r\n        "PUT_GENERAL-DEPOSIT-RATE",\r\n        "PUT_APPROVAL_RE-COMMODITY_UPDATE-GENERAL-DEPOSIT-RATE",\r\n        "PUT_DEPOSIT-RATE",\r\n        "PUT_APPROVAL_RE-COMMODITY_UPDATE-DEPOSIT-RATE",\r\n        "GET_PRICE-MARGIN",\r\n        "PUT_GENERAL-PRICE-MARGIN",\r\n        "PUT_APPROVAL_RE-COMMODITY_UPDATE-GENERAL-PRICE-MARGIN",\r\n        "PUT_PRICE-MARGIN",\r\n        "PUT_APPROVAL_RE-COMMODITY_UPDATE-PRICE-MARGIN",\r\n        "GET_REFERENCE-PRICES_HISTORY",\r\n        "POST_REFERENCE-PRICES",\r\n        "PUT_APPROVAL_RE-MARKETDATA_NEW-REFER-PRICE",\r\n        "GET_REFERENCE-PRICES_MANUAL",\r\n        "GET_ORDERS",\r\n        "GET_ORDERS-HISTORY",\r\n        "GET_ORDERS-HISTORY",\r\n        "GET_FOM-ORDER_DEAL",\r\n        "GET_ORDER-VRG",\r\n        "GET_ORDER-HISTORY-VRG",\r\n        "GET_VRG-ORDER_DEAL",\r\n        "GET_ORDER-HISTORY-VRG",\r\n        "GET_FOM-TRANSACTION",\r\n        "GET_VRG-TRANSACTION",\r\n        "GET_APPROVAL_LIST_PENDING-APPROVAL",\r\n        "GET_APPROVAL_LIST_ACCOUNT-APPROVAL",\r\n        "GET_APPROVAL_LIST_DW-APPROVAL",\r\n        "GET_APPROVAL_LIST_ACTIVATE-ACCOUNT-APPROVAL",\r\n        "GET_REPORT_ORDER_FOM",\r\n        "GET_REPORT_ADMIN-FEE_VRG",\r\n        "GET_REPORT_ACCOUNT-IMR_FOM",\r\n        "GET_REPORT_ACCOUNT-IMR_VRG",\r\n        "GET_REPORT_ACCOUNT-STATEMENT_FOM",\r\n        "GET_REPORT_ACCOUNT-STATEMENT_VRG",\r\n        "GET_REPORT_MEMBER-STATEMENT_FOM",\r\n        "GET_REPORT_MEMBER-STATEMENT_VRG",\r\n        "GET_REPORT_DW_FOM",\r\n        "GET_REPORT_DW_VRG",\r\n        "GET_REPORT_ORDER_VRG",\r\n        "GET_REPORT_ACCOUNT-STATE_VRG",\r\n        "GET_REPORT_LIMIT_VRG",\r\n        "GET_REPORT_TRANSACTION_FOM",\r\n        "GET_REPORT_TRANSACTION_VRG",\r\n        "GET_REPORT_MEMBER-FEE_FOM",\r\n        "GET_REPORT_MEMBER-FEE_VRG",\r\n        "GET_REPORT_BROKER-FEE_FOM",\r\n        "GET_REPORT_BROKER-FEE_VRG",\r\n        "GET_REPORT_ADMIN-FEE_FOM",\r\n        "GET_LIST-BROKER",\r\n        "PUT_APPROVAL_AUTH_ASSIGN-ROLE",\r\n        "GET_BROKER-LIST-SETTING",\r\n        "POST_BROKER-LIST-SETTING",\r\n        "PUT_RESET-PIN",\r\n        "PUT_RESET-PASSWORD",\r\n        "POST_BROKER",\r\n        "PUT_APPROVAL_BROKER_CREATE-BROKER",\r\n        "GET_BROKER",\r\n        "PUT_BROKER",\r\n        "PUT_APPROVAL_BROKER_UPDATE-BROKER",\r\n        "GET_USER:CODE_MASTER",\r\n        "PUT_USER_ASSIGN-ROLES",\r\n        "GET_AUTO-ASSIGN-TRADER_MXV",\r\n        "PUT_TRADER",\r\n        "PUT_TRADER-USER",\r\n        "PUT_APPROVAL_AUTH_SET-AUTO-ASSIGN-TRADER",\r\n        "PUT_TRADER-USER",\r\n        "GET_TRADER-USER_MEMBER",\r\n        "GET_AUTO-ASSIGN-TRADER_MEMBER",\r\n        "GET_TRADER-USER_BROKER",\r\n        "GET_AUTO-ASSIGN-TRADER_BROKER",\r\n        "GET_TRADER-USER_ACCOUNT",\r\n        "GET_LIST-MEMBER",\r\n        "GET_GROUP-ROLE",\r\n        "POST_GROUP-ROLE",\r\n        "PUT_APPROVAL_AUTH_CREATE-GROUP-ROLE",\r\n        "GET_TOTAL-LIMIT",\r\n        "PUT_RESET-PIN",\r\n        "PUT_RESET-PASSWORD",\r\n        "POST_MEMBER",\r\n        "PUT_APPROVAL_MEMBER_CREATE-MEMBER",\r\n        "GET_MEMBER",\r\n        "PUT_MEMBER",\r\n        "PUT_APPROVAL_MEMBER_UPDATE-MEMBER",\r\n        "GET_USER:CODE_MASTER",\r\n        "PUT_USER_ASSIGN-ROLES",\r\n        "PUT_APPROVAL_AUTH_ASSIGN-ROLE",\r\n        "POST_USER",\r\n        "PUT_RESET-PASSWORD",\r\n        "PUT_APPROVAL_AUTH_CREATE-USER",\r\n        "GET_USER_MEMBER",\r\n        "GET_USER",\r\n        "PUT_USER_ASSIGN-ROLES",\r\n        "PUT_APPROVAL_AUTH_ASSIGN-ROLE",\r\n        "PUT_USER_ASSIGN-GROUP-ROLES",\r\n        "PUT_APPROVAL_AUTH_ASSIGN-GROUP-ROLE",\r\n        "PUT_RESET-PIN",\r\n        "GET_MEMBER-DEFAULT-SETTING",\r\n        "PUT_MEMBER-SETTING",\r\n        "PUT_APPROVAL_MEMBER_UPDATE-MEMBER-SETTING",\r\n        "POST_MEMBER-SETTING",\r\n        "PUT_APPROVAL_MEMBER_UPDATE-MEMBER-SETTING",\r\n        "POST_MEMBER-DEFAULT-SETTING",\r\n        "PUT_APPROVAL_MEMBER_SET-MEMBER-DEFAULT-SETTING",\r\n        "GET_MEMBER-RISK",\r\n        "PUT_MEMBER-RISK",\r\n        "PUT_APPROVAL_MEMBER_UPDATE-MEMBER-RISK",\r\n        "GET_MEMBER-LIST-SETTING",\r\n        "POST_MEMBER-LIST-SETTING",\r\n        "PUT_APPROVAL_MEMBER_CREATE-MEMBER-SETTING",\r\n        "GET_LIST-ACCOUNT",\r\n        "POST_ACCOUNT",\r\n        "PUT_APPROVAL_ACCOUNT_CREATE-ACCOUNT",\r\n        "GET_ACCOUNT",\r\n        "GET_USER:CODE_MASTER",\r\n        "PUT_ACCOUNT",\r\n        "PUT_APPROVAL_ACCOUNT_UPDATE-ACCOUNT",\r\n        "PUT_RESET-PIN",\r\n        "PUT_RESET-PASSWORD",\r\n        "GET_ACCOUNT-DEFAULT-SETTING",\r\n        "PUT_ACCOUNT-DEFAULT-SETTING",\r\n        "GET_ACCOUNT-RISK",\r\n        "GET_ACCOUNT-LIST-SETTING",\r\n        "POST_ACCOUNT-LIST-SETTING",\r\n        "POST_DEPOSIT",\r\n        "POST_WITHDRAW",\r\n        "PUT_APPROVAL_DEPOSIT-LVL-1",\r\n        "PUT_APPROVAL_DEPOSIT-LVL-2",\r\n        "PUT_APPROVAL_WITHDRAW-LVL-1",\r\n        "PUT_APPROVAL_WITHDRAW-LVL-2",\r\n        "GET_LIST-ACCOUNT-STATE",\r\n        "GET_LIST-DEPOSIT",\r\n        "GET_DEPOSIT-TRANSFER",\r\n        "PUT_DEPOSIT-TRANSFER_MANUAL",\r\n        "PUT_APPROVAL_DEPOSIT-TRANSFER",\r\n        "GET_TAXES",\r\n        "POST_TAX",\r\n        "PUT_TAX",\r\n        "GET_MONEY-TRANSACTION-HISTORY",\r\n        "GET_DEPOSIT-TRANSFER_HISTORY",\r\n        "PUT_APPROVAL_AUTH_SET-TRADER",\r\n        "GET_TRANSACTION-HISTORY",\r\n        "PUT_VRG-ACCOUNT",\r\n        "PUT_APPROVAL_ACCOUNT_UPDATE-MANY-VRG-ACCOUNT",\r\n        "GET_VRG-ACCOUNT",\r\n        "GET_VRG-ORDER-APPROVAL",\r\n        "PUT_VRG-ORDER-APPROVAL",\r\n        "GET_SETTING",\r\n        "PUT_SETTING",\r\n        "GET_COMMODITY"\r\n    ],\r\n    "loginTime": 1713149513621,\r\n    "accountType": "mxv-admin",\r\n    "memberCode": "000",\r\n    "traders": [\r\n        "162C080324",\r\n        "222C325210",\r\n        "222C156151",\r\n        "001C000001",\r\n        "002I000001",\r\n        "003C000008",\r\n        "003C000011",\r\n        "003C000010",\r\n        "003C000009",\r\n        "002I000002",\r\n        "162C156156",\r\n        "222C111111",\r\n        "222C123456",\r\n        "999P000012",\r\n        "222C020203",\r\n        "002C000004",\r\n        "222C000000",\r\n        "222C565656",\r\n        "999C999999",\r\n        "162C123456",\r\n        "002I000021",\r\n        "002I000022",\r\n        "001C110297",\r\n        "222C444444",\r\n        "222C333333",\r\n        "162C190324",\r\n        "231E123456",\r\n        "162C878787",\r\n        "100C100000",\r\n        "100E200324",\r\n        "231C240322",\r\n        "001C000001",\r\n        "002I000001",\r\n        "002I000002",\r\n        "002I000003",\r\n        "002C000016",\r\n        "197C020424",\r\n        "002C000000",\r\n        "222C626262",\r\n        "222C656565",\r\n        "222C646464",\r\n        "222C636363",\r\n        "222C676767",\r\n        "222C686868",\r\n        "222C717171",\r\n        "222C707070",\r\n        "222C696969",\r\n        "222C727272",\r\n        "1755297587"\r\n    ],\r\n    "onlyViews": [\r\n        "002I000001",\r\n        "003C000008",\r\n        "003C000010",\r\n        "162C156156",\r\n        "222C111111",\r\n        "222C123456",\r\n        "222C000000"\r\n    ]\r\n}',
          timestamp: Date.now(),
        })
      )
    );

    // Record the end time after sending the message to all clients
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    console.log(`Time taken to send message to all clients: ${elapsedTime} ms`);
    console.log(
      `Time taken to send message to each clients: ${
        elapsedTime / numberOfClients
      } ms`
    );
  }

  // Event listener for when the client receives the message
  ws.on("message", function incoming(message) {
    console.log("Received:", message);
  });

  // Event listener for when the client closes the connection
  ws.on("close", function close() {
    console.log("Client disconnected");
    connectedClients--;
  });
});

// Start the HTTP server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
