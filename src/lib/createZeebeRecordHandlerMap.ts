/*
 * Copyright © 2022 Hauptmedia GmbH (info@haupt.media)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {ValueType, ValueTypeEnum, ZeebeRecord, ZeebeRecordHandlerInterface} from "../types";

export function createZeebeRecordHandlerMap(recordHandler: ZeebeRecordHandlerInterface): { [key in ValueTypeEnum]: (record: ZeebeRecord<ValueType>) => void } {
    return {
        DECISION: recordHandler.decision,
        DECISION_EVALUATION: recordHandler.decisionEvaluation,
        DECISION_REQUIREMENTS: recordHandler.decisionRequirements,
        DEPLOYMENT: recordHandler.deployment,
        DEPLOYMENT_DISTRIBUTION: recordHandler.deploymentDistribution,
        ERROR: recordHandler.error,
        ESCALATION: recordHandler.escalation,
        INCIDENT: recordHandler.incident,
        JOB: recordHandler.job,
        JOB_BATCH: recordHandler.jobBatch,
        MESSAGE: recordHandler.message,
        MESSAGE_START_EVENT_SUBSCRIPTION: recordHandler.messageStartEventSubscription,
        MESSAGE_SUBSCRIPTION: recordHandler.messageSubscription,
        PROCESS: recordHandler.process,
        PROCESS_EVENT: recordHandler.processEvent,
        PROCESS_INSTANCE: recordHandler.processInstance,
        PROCESS_INSTANCE_CREATION: recordHandler.processInstanceCreation,
        PROCESS_INSTANCE_RESULT: recordHandler.processInstanceResult,
        PROCESS_INSTANCE_MODIFICATION: recordHandler.processInstanceModification,
        PROCESS_MESSAGE_SUBSCRIPTION: recordHandler.processMessageSubscription,
        TIMER: recordHandler.timer,
        VARIABLE: recordHandler.variable,
        VARIABLE_DOCUMENT: recordHandler.variableDocument
    };
}