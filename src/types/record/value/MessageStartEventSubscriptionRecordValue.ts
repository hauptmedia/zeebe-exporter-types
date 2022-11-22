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
import { RecordValueWithVariables } from '../RecordValueWithVariables';

export interface MessageStartEventSubscriptionRecordValue
  extends RecordValueWithVariables {
  /**
   * the process key tied to the subscription
   */
  processDefinitionKey: number;

  /**
   * the BPMN process id tied to the subscription
   */
  bpmnProcessId: string;

  /**
   * the id of the start event tied to the subscription
   */
  startEventId: string;

  /**
   * the name of the message
   */
  messageName: string;

  /**
   * the key of the process instance that was created by this message. It is only set when a
   *     message is correlated to this subscription. Otherwise, it returns -1.
   */
  processInstanceKey: number;

  /**
   * the correlation key of the message. It is only set when a message is correlated to this
   *     subscription. Otherwise, it returns an empty string.
   */
  correlationKey: string;

  /**
   * the key of the message. It is only set when a message is correlated to this
   *     subscription. Otherwise, it returns -1.
   */
  messageKey: number;
}
