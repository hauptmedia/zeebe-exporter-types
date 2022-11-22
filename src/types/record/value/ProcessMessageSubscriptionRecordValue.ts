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
import { ProcessInstanceRelated } from './ProcessInstanceRelated';

export interface ProcessMessageSubscriptionRecordValue
  extends RecordValueWithVariables,
    ProcessInstanceRelated {
  /**
   * the element instance key
   */
  elementInstanceKey: number;

  /**
   * the BPMN process id
   */
  bpmnProcessId: string;

  /**
   * the key of the correlated message
   */
  messageKey: number;

  /**
   * the message name
   */
  messageName: string;

  /**
   * the correlation key
   */
  correlationKey: string;

  /**
   * the id of the element tied to the subscription.
   */
  elementId: string;

  /**
   * {@code true} if the event tied to the subscription is interrupting. Otherwise, it
   *     returns {@code false} if the event is non-interrupting.
   */
  interrupting: boolean;
}
