/*
 * Copyright © 2017-2022 camunda services GmbH (info@camunda.com)
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
import { EvaluatedDecisionValue } from './EvaluatedDecisionValue';

export interface DecisionEvaluationRecordValue {
  /**
   * the key of the evaluated decision
   */
  decisionKey: number;

  /**
   * the id of the evaluated decision in the DMN
   */
  decisionId: string;

  /**
   * the name of the evaluated decision in the DMN
   */
  decisionName: string;

  /**
   * the version of the evaluated decision
   */
  decisionVersion: number;

  /**
   * the id of the DRG in the DMN the evaluated decision belongs to
   */
  decisionRequirementsId: string;

  /**
   * the key of the deployed DRG the evaluated decision belongs to
   */
  decisionRequirementsKey: number;

  /**
   * the output of the evaluated decision as JSON string
   */
  decisionOutput: string;

  /**
   * the BPMN process id in which context the decision was evaluated
   */
  bpmnProcessId: string;

  /**
   * the key of the process in which context the decision was evaluated
   */
  processDefinitionKey: number;

  /**
   * the key of the process instance in which context the decision was evaluated
   */
  processInstanceKey: number;

  /**
   * the id of the element in the BPMN in which context the decision was evaluated
   */
  elementId: string;

  /**
   * the key of the element instance in which context the decision was evaluated
   */
  elementInstanceKey: number;

  /**
   * The {@link EvaluatedDecisionValue details} of the evaluated decision and its required
   * decisions. The order depends on the evaluation order, starting from the required decisions.
   */
  evaluatedDecisionsList: EvaluatedDecisionValue[];

  /**
   * If the evaluation of the decision failed then it returns the reason why the evaluation of the
   * {@link #getFailedDecisionId() failed decision} was not successful. The failure message is not
   * available if the decision was evaluated successfully.
   */
  evaluationFailureMessage: string;

  /**
   * If the evaluation of the decision failed then it returns the id of the decision where the
   * evaluation failed. It can be the called/root decision or any of its required decisions. The
   * reason of the failure can be retrieved as {@link #getEvaluationFailureMessage() evaluation
   * failure message}. The decision id is not available if the decision was evaluated successfully.
   */
  failedDecisionId: string;
}
