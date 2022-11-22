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
import {RecordHandlerInterface} from "../types/RecordHandlerInterface";
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
  VariableRecordValue
} from "../types"

export class NoOpRecordHandler implements RecordHandlerInterface {
  // @ts-ignore
  decision(record: Record<DecisionRecordValue>): void {
    return;
  }

  // @ts-ignore
  decisionEvaluation(record: Record<DecisionEvaluationRecordValue>): void {
    return;
  }

  // @ts-ignore
  decisionRequirements(record: Record<DecisionRequirementsRecordValue>): void {
    return;
  }

  // @ts-ignore
  deployment(record: Record<DeploymentRecordValue>): void {
    return;
  }

  // @ts-ignore
  deploymentDistribution(record: Record<DeploymentDistributionRecordValue>): void {
    return;
  }

  // @ts-ignore
  error(record: Record<ErrorRecordValue>): void {
    return;
  }

  // @ts-ignore
  escalation(record: Record<EscalationRecordValue>): void {
    return;
  }

  // @ts-ignore
  incident(record: Record<IncidentRecordValue>): void {
    return;
  }

  // @ts-ignore
  job(record: Record<JobRecordValue>): void {
    return;
  }

  // @ts-ignore
  jobBatch(record: Record<JobBatchRecordValue>): void {
    return;
  }

  // @ts-ignore
  message(record: Record<MessageRecordValue>): void {
    return;
  }

  // @ts-ignore
  messageStartEventSubscription(record: Record<MessageStartEventSubscriptionRecordValue>): void {
    return;
  }

  // @ts-ignore
  messageSubscription(record: Record<MessageSubscriptionRecordValue>): void {
    return;
  }

  // @ts-ignore
  process(record: Record<Process>): void {
    return;
  }

  // @ts-ignore
  processEvent(record: Record<ProcessEventRecordValue>): void {
    return;
  }

  // @ts-ignore
  processInstance(record: Record<ProcessInstanceRecordValue>): void {
    return;
  }

  // @ts-ignore
  processInstanceCreation(record: Record<ProcessInstanceCreationRecordValue>): void {
    return;
  }

  // @ts-ignore
  processInstanceModification(record: Record<ProcessInstanceModificationRecordValue>): void {
    return;
  }

  // @ts-ignore
  processInstanceResult(record: Record<ProcessInstanceResultRecordValue>): void {
    return;
  }

  // @ts-ignore
  processMessageSubscription(record: Record<ProcessMessageSubscriptionRecordValue>): void {
    return;
  }

  // @ts-ignore
  timer(record: Record<TimerRecordValue>): void {
    return;
  }

  // @ts-ignore
  variable(record: Record<VariableRecordValue>): void {
    return;
  }

  // @ts-ignore
  variableDocument(record: Record<VariableDocumentRecordValue>): void {
    return;
  }
}
