Zeebe JSON Export Typescript Types
==================================
![Compatible with: Camunda Platform 8](https://img.shields.io/badge/Compatible%20with-Camunda%20Platform%208-0072Ce)

Typescript type definitions for JSON encoded export data used by the Zeebe Workflow Automation Engine.

You can find the JSON schema definitions of the Zeebe Events [here](https://github.com/hauptmedia/zeebe-exporter-types/tree/main/jsonschema).

## Installation

```shell
npm i --save @hauptmedia/zeebe-exporter-types
```

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
    
    // Override the methods for the records you want to process or implement ZeebeRecordHandlerInterface
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

## Structure of Zeebe export data

Please follow the links for the detailed documentation of the data structure.

### Base Record

* [ZeebeRecord](https://hauptmedia.github.io/zeebe-exporter-types/globals.html#zeeberecord)

### Value Types

* [DecisionEvaluationRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/decisionevaluationrecordvalue.html)
* [DecisionRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/decisionrecordvalue.html)
* [DecisionRequirementsRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/decisionrequirementsrecordvalue.html)
* [DeploymentDistributionRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/deploymentdistributionrecordvalue.html)
* [DeploymentRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/deploymentrecordvalue.html)
* [ErrorRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/errorrecordvalue.html)
* [EscalationRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/escalationrecordvalue.html)
* [IncidentRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/incidentrecordvalue.html)
* [JobBatchRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/jobbatchrecordvalue.html)
* [JobRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/jobrecordvalue.html)
* [MessageRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/messagerecordvalue.html)
* [MessageStartEventSubscriptionRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/messagestarteventsubscriptionrecordvalue.html)
* [MessageSubscriptionRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/messagesubscriptionrecordvalue.html)
* [ProcessEventRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/processeventrecordvalue.html)
* [ProcessInstanceCreationRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/processinstancecreationrecordvalue.html)
* [ProcessInstanceRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/processinstancerecordvalue.html)
* [ProcessInstanceModificationRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/processinstancemodificationrecordvalue.html)
* [ProcessInstanceResultRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/processinstanceresultrecordvalue.html)
* [Process](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/process.html)
* [ProcessMessageSubscriptionRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/processmessagesubscriptionrecordvalue.html)
* [TimerRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/timerrecordvalue.html)
* [VariableDocumentRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/variabledocumentrecordvalue.html)
* [VariableRecordValue](https://hauptmedia.github.io/zeebe-exporter-types/interfaces/variablerecordvalue.html)
