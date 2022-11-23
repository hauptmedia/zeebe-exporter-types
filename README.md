Zeebe Export JSON Typescript Types
==================================
![Compatible with: Camunda Platform 8](https://img.shields.io/badge/Compatible%20with-Camunda%20Platform%208-0072Ce)

Typescript type definitions for JSON encoded export data used by the Zeebe Workflow Automation Engine.

## Kafka example

This example shows how to leverage this library to process JSON encoded Zeebe event data coming from Kafka.

Use the [zeebe-kafka-exporter](https://github.com/camunda-community-hub/zeebe-kafka-exporter) for Zeebe to export event data to Kafka.

You can find the example project in [examples/kafka](https://github.com/hauptmedia/zeebe-exporter-types/tree/main/examples/kafka).

```typescript
import {
    dispatchZeebeRecordToHandler,
    NoOpZeebeRecordHandler,
    ProcessInstanceRecordValue,
    ValueType,
    ZeebeRecord,
    ZeebeRecordHandlerInterface
} from "@hauptmedia/zeebe-exporter-types";
import {Kafka} from 'kafkajs';

class MyRecordHandler extends NoOpZeebeRecordHandler implements ZeebeRecordHandlerInterface {
    // Implement the methods for the records you want to process
    processInstance(record: ZeebeRecord<ProcessInstanceRecordValue>) {
        console.log(`${record.intent} ${record.value.bpmnElementType} ${record.value.elementId}`);
    }
}

const kafka = new Kafka({
        clientId: 'exampleClientId',
        brokers: ['localhost:9093']
    }),
    zbRecordHandler = new MyRecordHandler(),
    consumer = kafka.consumer({groupId: 'exampleGroupId'});

const run = async () => {
    await consumer.connect()
    await consumer.subscribe({topic: "zeebe"})

    await consumer.run({
        eachMessage: async ({topic, partition, message, heartbeat, pause}) => {
            if (!message.value)
                return;

            dispatchZeebeRecordToHandler(
                JSON.parse(message.value.toString()) as ZeebeRecord<ValueType>,
                zbRecordHandler
            );
        },
    })
}

run().catch(console.error);
```