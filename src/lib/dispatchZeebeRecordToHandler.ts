import {ValueTypeEnum, ZeebeRecord, ZeebeRecordHandlerInterface} from "../types";

export function dispatchZeebeRecordToHandler(record: ZeebeRecord<any>, recordHandler: ZeebeRecordHandlerInterface): void {
    switch(record.valueType) {
        case ValueTypeEnum.DECISION:
            return recordHandler.decision(record);

        case ValueTypeEnum.DECISION_EVALUATION:
            return recordHandler.decisionEvaluation(record);

        case ValueTypeEnum.DECISION_REQUIREMENTS:
            return recordHandler.decisionRequirements(record);

        case ValueTypeEnum.DEPLOYMENT:
            return recordHandler.deployment(record);

        case ValueTypeEnum.DEPLOYMENT_DISTRIBUTION:
            return recordHandler.deploymentDistribution(record);

        case ValueTypeEnum.ERROR:
            return recordHandler.error(record);

        case ValueTypeEnum.ESCALATION:
            return recordHandler.escalation(record);

        case ValueTypeEnum.INCIDENT:
            return recordHandler.incident(record);

        case ValueTypeEnum.JOB:
            return recordHandler.job(record);

        case ValueTypeEnum.JOB_BATCH:
            return recordHandler.jobBatch(record);

        case ValueTypeEnum.MESSAGE:
            return recordHandler.message(record);

        case ValueTypeEnum.MESSAGE_START_EVENT_SUBSCRIPTION:
            return recordHandler.messageStartEventSubscription(record);

        case ValueTypeEnum.MESSAGE_SUBSCRIPTION:
            return recordHandler.messageSubscription(record);

        case ValueTypeEnum.PROCESS:
            return recordHandler.process(record);

        case ValueTypeEnum.PROCESS_EVENT:
            return recordHandler.processEvent(record);

        case ValueTypeEnum.PROCESS_INSTANCE:
            return recordHandler.processInstance(record);

        case ValueTypeEnum.PROCESS_INSTANCE_CREATION:
            return recordHandler.processInstanceCreation(record);

        case ValueTypeEnum.PROCESS_INSTANCE_RESULT:
            return recordHandler.processInstanceResult(record);

        case ValueTypeEnum.PROCESS_INSTANCE_MODIFICATION:
            return recordHandler.processInstanceModification(record);

        case ValueTypeEnum.PROCESS_MESSAGE_SUBSCRIPTION:
            return recordHandler.processMessageSubscription(record);

        case ValueTypeEnum.TIMER:
            return recordHandler.timer(record);

        case ValueTypeEnum.VARIABLE:
            return recordHandler.variable(record);

        case ValueTypeEnum.VARIABLE_DOCUMENT:
            return recordHandler.variableDocument(record);

        default:
            throw "Unknown ValueType " + record.valueType;
    }
}