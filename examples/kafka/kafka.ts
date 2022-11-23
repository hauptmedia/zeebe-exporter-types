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