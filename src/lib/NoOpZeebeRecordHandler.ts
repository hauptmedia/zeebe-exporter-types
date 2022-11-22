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
import {ZeebeRecordHandlerInterface} from "../types/ZeebeRecordHandlerInterface";
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
  VariableRecordValue
} from "../types"

export class NoOpZeebeRecordHandler implements ZeebeRecordHandlerInterface {
  // @ts-ignore
  decision(record: ZeebeRecord<DecisionRecordValue>): void {
    return;
  }

  // @ts-ignore
  decisionEvaluation(record: ZeebeRecord<DecisionEvaluationRecordValue>): void {
    return;
  }

  // @ts-ignore
  decisionRequirements(record: ZeebeRecord<DecisionRequirementsRecordValue>): void {
    return;
  }

  // @ts-ignore
  deployment(record: ZeebeRecord<DeploymentRecordValue>): void {
    return;
  }

  // @ts-ignore
  deploymentDistribution(record: ZeebeRecord<DeploymentDistributionRecordValue>): void {
    return;
  }

  // @ts-ignore
  error(record: ZeebeRecord<ErrorRecordValue>): void {
    return;
  }

  // @ts-ignore
  escalation(record: ZeebeRecord<EscalationRecordValue>): void {
    return;
  }

  // @ts-ignore
  incident(record: ZeebeRecord<IncidentRecordValue>): void {
    return;
  }

  // @ts-ignore
  job(record: ZeebeRecord<JobRecordValue>): void {
    return;
  }

  // @ts-ignore
  jobBatch(record: ZeebeRecord<JobBatchRecordValue>): void {
    return;
  }

  // @ts-ignore
  message(record: ZeebeRecord<MessageRecordValue>): void {
    return;
  }

  // @ts-ignore
  messageStartEventSubscription(record: ZeebeRecord<MessageStartEventSubscriptionRecordValue>): void {
    return;
  }

  // @ts-ignore
  messageSubscription(record: ZeebeRecord<MessageSubscriptionRecordValue>): void {
    return;
  }

  // @ts-ignore
  process(record: ZeebeRecord<Process>): void {
    return;
  }

  // @ts-ignore
  processEvent(record: ZeebeRecord<ProcessEventRecordValue>): void {
    return;
  }

  // @ts-ignore
  processInstance(record: ZeebeRecord<ProcessInstanceRecordValue>): void {
    return;
  }

  // @ts-ignore
  processInstanceCreation(record: ZeebeRecord<ProcessInstanceCreationRecordValue>): void {
    return;
  }

  // @ts-ignore
  processInstanceModification(record: ZeebeRecord<ProcessInstanceModificationRecordValue>): void {
    return;
  }

  // @ts-ignore
  processInstanceResult(record: ZeebeRecord<ProcessInstanceResultRecordValue>): void {
    return;
  }

  // @ts-ignore
  processMessageSubscription(record: ZeebeRecord<ProcessMessageSubscriptionRecordValue>): void {
    return;
  }

  // @ts-ignore
  timer(record: ZeebeRecord<TimerRecordValue>): void {
    return;
  }

  // @ts-ignore
  variable(record: ZeebeRecord<VariableRecordValue>): void {
    return;
  }

  // @ts-ignore
  variableDocument(record: ZeebeRecord<VariableDocumentRecordValue>): void {
    return;
  }
}
