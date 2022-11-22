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
import {
  DecisionEvaluationRecordValue,
  DecisionRecordValue,
  DecisionRequirementsRecordValue,
  DeploymentDistributionRecordValue,
  DeploymentRecordValue,
  ErrorRecordValue,
  EscalationRecordValue,
  IncidentRecordValue,
  JobBatchRecordValue,
  JobRecordValue,
  MessageRecordValue,
  MessageStartEventSubscriptionRecordValue,
  MessageSubscriptionRecordValue,
  Process,
  ProcessEventRecordValue,
  ProcessInstanceCreationRecordValue, ProcessInstanceModificationRecordValue,
  ProcessInstanceRecordValue, ProcessInstanceResultRecordValue,
  ProcessMessageSubscriptionRecordValue,
  ZeebeRecord,
  TimerRecordValue, VariableDocumentRecordValue,
  VariableRecordValue,
} from "./index";

export interface ZeebeRecordHandlerInterface {
  decision(record: ZeebeRecord<DecisionRecordValue>): void;

  decisionEvaluation(record: ZeebeRecord<DecisionEvaluationRecordValue>): void;

  decisionRequirements(record: ZeebeRecord<DecisionRequirementsRecordValue>): void;

  deployment(record: ZeebeRecord<DeploymentRecordValue>): void;

  deploymentDistribution(record: ZeebeRecord<DeploymentDistributionRecordValue>): void;

  error(record: ZeebeRecord<ErrorRecordValue>): void;

  escalation(record: ZeebeRecord<EscalationRecordValue>): void;

  incident(record: ZeebeRecord<IncidentRecordValue>): void;

  job(record: ZeebeRecord<JobRecordValue>): void;

  jobBatch(record: ZeebeRecord<JobBatchRecordValue>): void;

  message(record: ZeebeRecord<MessageRecordValue>): void;

  messageStartEventSubscription(record: ZeebeRecord<MessageStartEventSubscriptionRecordValue>): void;

  messageSubscription(record: ZeebeRecord<MessageSubscriptionRecordValue>): void;

  process(record: ZeebeRecord<Process>): void;

  processEvent(record: ZeebeRecord<ProcessEventRecordValue>): void;

  processInstance(record: ZeebeRecord<ProcessInstanceRecordValue>): void;

  processInstanceCreation(record: ZeebeRecord<ProcessInstanceCreationRecordValue>): void;

  processInstanceModification(record: ZeebeRecord<ProcessInstanceModificationRecordValue>): void;

  processInstanceResult(record: ZeebeRecord<ProcessInstanceResultRecordValue>): void;

  processMessageSubscription(record: ZeebeRecord<ProcessMessageSubscriptionRecordValue>): void;

  timer(record: ZeebeRecord<TimerRecordValue>): void;

  variable(record: ZeebeRecord<VariableRecordValue>): void;

  variableDocument(record: ZeebeRecord<VariableDocumentRecordValue>): void;
}
