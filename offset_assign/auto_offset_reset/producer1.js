const Kafka = require("node-rdkafka");
const fs = require("fs");

const topic = "your-topic";
// Kafka configuration

// Create publisher
const producer = new Kafka.Producer({
  "metadata.broker.list": "localhost:9092",
});

producer.on("ready", async () => {
  console.log("Producer ready");
  setInterval(() => {
    producer.produce(topic, -1, Buffer.from("fail message"));
  }, 5000);
});

producer.on("event.error", function (err) {
  console.log("Producer error: " + err);
});

producer.connect();
