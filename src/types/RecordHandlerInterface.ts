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
  Record,
  TimerRecordValue, VariableDocumentRecordValue,
  VariableRecordValue,
} from "./index";

export interface RecordHandlerInterface {
  decision(record: Record<DecisionRecordValue>): void;

  decisionEvaluation(record: Record<DecisionEvaluationRecordValue>): void;

  decisionRequirements(record: Record<DecisionRequirementsRecordValue>): void;

  deployment(record: Record<DeploymentRecordValue>): void;

  deploymentDistribution(record: Record<DeploymentDistributionRecordValue>): void;

  error(record: Record<ErrorRecordValue>): void;

  escalation(record: Record<EscalationRecordValue>): void;

  incident(record: Record<IncidentRecordValue>): void;

  job(record: Record<JobRecordValue>): void;

  jobBatch(record: Record<JobBatchRecordValue>): void;

  message(record: Record<MessageRecordValue>): void;

  messageStartEventSubscription(record: Record<MessageStartEventSubscriptionRecordValue>): void;

  messageSubscription(record: Record<MessageSubscriptionRecordValue>): void;

  process(record: Record<Process>): void;

  processEvent(record: Record<ProcessEventRecordValue>): void;

  processInstance(record: Record<ProcessInstanceRecordValue>): void;

  processInstanceCreation(record: Record<ProcessInstanceCreationRecordValue>): void;

  processInstanceModification(record: Record<ProcessInstanceModificationRecordValue>): void;

  processInstanceResult(record: Record<ProcessInstanceResultRecordValue>): void;

  processMessageSubscription(record: Record<ProcessMessageSubscriptionRecordValue>): void;

  timer(record: Record<TimerRecordValue>): void;

  variable(record: Record<VariableRecordValue>): void;

  variableDocument(record: Record<VariableDocumentRecordValue>): void;
}
