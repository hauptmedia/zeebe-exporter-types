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
import { EvaluatedInputValue } from './EvaluatedInputValue';
import { MatchedRuleValue } from './MatchedRuleValue';

export interface EvaluatedDecisionValue {
  /**
   * the id of the evaluated decision
   */
  decisionId: string;

  /**
   * the name of the evaluated decision
   */
  decisionName: string;

  /**
   * the key of the evaluated decision
   */
  decisionKey: number;

  /**
   * the version of the evaluated decision
   */
  decisionVersion: number;

  /**
   * the type of the evaluated decision
   */
  decisionType: string;

  /**
   * the output of the evaluated decision as JSON string
   */
  decisionOutput: string;

  /**
   * If the decision is a decision table then it returns the {@link EvaluatedInputValue evaluated
   * inputs}. The inputs are not available for other types of decision.
   */
  evaluatedInputs: EvaluatedInputValue[];

  /**
   * If the decision is a decision table then it returns the matched rules. The {@link
   * MatchedRuleValue matched rules} are not available for other types of decision.
   */
  matchedRules: MatchedRuleValue[];
}
