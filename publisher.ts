import { Publisher, utils } from "@mxs/common";

export interface Message {
  data: {
    name: string;
    age: number;
    address: string;
  };
  sender: "quang.vudinh";
}

async function main() {
  const publisher = new Publisher<Message>(
    { "metadata.broker.list": "localhost:9092" },
    { "client.id": "publisher-01" },
    "user-102"
  );

  publisher.on("onConnected", async () => {
    for (let i = 0; i < 10; i++) {
      console.log("Publishing message", i);
      publisher.publish(
        {
          data: { name: "Quang", age: 25, address: "Hanoi" },
          sender: "quang.vudinh",
        },
        "user-102"
      );
      await utils.sleep(2000);
    }
  });
}

main();
