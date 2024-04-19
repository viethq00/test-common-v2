const Kafka = require("node-rdkafka");
const fs = require("fs");

const path = require("path");

// Get the current working directory
const currentDirectory = process.cwd();

// Define the filename
const filename = "failed-events.txt";

const filePath = path.join(currentDirectory, filename);

function saveFailedEvent(topic, offset, partition) {
  const failedEvent = {
    topic,
    offset,
    partition,
  };
  fs.writeFileSync(filePath, JSON.stringify(failedEvent) + "\n");
}

// Kafka configuration
const kafkaConfig = {
  "metadata.broker.list": "localhost:9092",
  "group.id": "consumer-group-1", // Consumer group id for the first consumer
  "enable.auto.commit": false, // Disable auto commit offsets
};

// Create consumers
const consumer1 = new Kafka.KafkaConsumer(kafkaConfig, {
  "auto.offset.reset": "earliest",
});

const topic = "your-topic";
consumer1.connect();

// consumer1.on("ready", () => {
//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   console.log("check for un-commit offset");
//   if (fileContent) {
//     const failedEvent = JSON.parse(fileContent);
//     console.log("failed event: ", failedEvent);
//     consumer1.assign([failedEvent]);
//   }
// });

consumer1.on("ready", () => {
  console.log("consumer1 ready");
  consumer1.subscribe([topic]);
  consumer1.consume();
});

consumer1.on("data", function (message) {
  console.log(
    `Consumer 1 received message: topic: ${message.topic} - offset: ${
      message.offset
    } -  value:${message.value.toString()}`
  );

  // if (message.value.toString().includes("fail")) {
  //   console.log("Consumer 1 failed to process the message, saving it...");
  //   // Save the failed event and the topic number
  //   saveFailedEvent(message.topic, message.offset, message.partition);

  //   // consumer1.disconnect();
  // } else {
  //   consumer1.commitMessage(message); // Manually commit offset
  // }
  consumer1.commitMessage(message);
});
