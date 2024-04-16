const Kafka = require("node-rdkafka");
const fs = require("fs");

const kafkaConfig = {
  "metadata.broker.list": "localhost:9092",
  "group.id": "consumer-group-1", // Consumer group id for the first consumer
  "enable.auto.commit": true, // Disable auto commit offsets
};

const consumer2 = new Kafka.KafkaConsumer(
  {
    ...kafkaConfig,
    "group.id": "consumer-group-2",
  },
  {
    "auto.offset.reset": "latest",
  }
);

const topic = "your-topic";

consumer2.connect();
consumer2.on("ready", () => {
  console.log("consumer2 ready");
  consumer2.subscribe([topic]);
  consumer2.consume();
});

// Consumer 2 message handler
consumer2.on("data", function (message) {
  console.log(
    `Consumer 1 received message: topic: ${message.topic} - offset: ${
      message.offset
    } -  value: ${message.value.toString()}`
  );
});
