import { Listener, utils } from "@mxs/common";
import { Message } from "./publisher";

class UserListener extends Listener<Message> {
  async onMessage(data: Message["data"]) {
    console.log("Received message");
    await utils.sleep(5000);
    console.log("Exit onMessage");
  }
}

async function main() {
  const listener = new UserListener(
    { "metadata.broker.list": "localhost:9092" },
    { "group.id": "listener-01" },
    "user-102"
  );
  listener.listen(true);
}

main();
