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
import {RecordHandlerInterface, ValueTypeEnum, Record, ValueType} from "../types";

export function createRecordHandlerMap(recordHandler: RecordHandlerInterface): { [key in ValueTypeEnum]?: (record: Record<ValueType>) => void} {
    const recordHandlerMap = {};
    recordHandlerMap[ValueTypeEnum.DECISION] = recordHandler.decision.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.DECISION_EVALUATION] = recordHandler.decisionEvaluation.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.DECISION_REQUIREMENTS] = recordHandler.decisionRequirements.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.DEPLOYMENT] = recordHandler.deployment.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.DEPLOYMENT_DISTRIBUTION] = recordHandler.deploymentDistribution.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.ERROR] = recordHandler.error.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.ESCALATION] = recordHandler.escalation.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.INCIDENT] = recordHandler.incident.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.JOB] = recordHandler.job.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.JOB_BATCH] = recordHandler.jobBatch.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.MESSAGE] = recordHandler.message.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.MESSAGE_START_EVENT_SUBSCRIPTION] = recordHandler.messageStartEventSubscription.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.MESSAGE_SUBSCRIPTION] = recordHandler.messageSubscription.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.PROCESS] = recordHandler.process.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.PROCESS_EVENT] = recordHandler.processEvent.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.PROCESS_INSTANCE] = recordHandler.processInstance.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.PROCESS_INSTANCE_CREATION] = recordHandler.processInstanceCreation.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.PROCESS_INSTANCE_RESULT] = recordHandler.processInstanceResult.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.PROCESS_INSTANCE_MODIFICATION] = recordHandler.processInstanceModification.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.PROCESS_MESSAGE_SUBSCRIPTION] = recordHandler.processMessageSubscription.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.TIMER] = recordHandler.timer.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.VARIABLE] = recordHandler.variable.bind(recordHandler);
    recordHandlerMap[ValueTypeEnum.VARIABLE_DOCUMENT] = recordHandler.variableDocument.bind(recordHandler);
    return recordHandlerMap;
}