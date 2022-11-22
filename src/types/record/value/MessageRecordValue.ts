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

export interface MessageRecordValue extends RecordValueWithVariables {
  /**
   * the name of the message
   */
  name: string;

  /**
   * the correlation key of the message
   */
  correlationKey: string;

  /**
   * The ID of a message is an optional field which is used to make messages unique and prevent
   * publishing the same message twice during its lifetime.
   */
  messageId: string;

  /**
   * the time to live of the message
   */
  timeToLive: number;

  /**
   * the unix timestamp in milliseconds until when the message can be correlated. If the
   *     deadline is exceeded then the message expires and will be removed. If this property is not
   *     set, it returns -1 instead.
   */
  deadline: number;
}
