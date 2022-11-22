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
export interface ErrorRecordValue {
  /**
   * the exception message, which causes this error record.
   */
  exceptionMessage: string;

  /**
   * the stacktrace, which belongs to the exception
   */
  stacktrace: string;

  /**
   * the position of the event, which causes this error
   */
  errorEventPosition: number;

  /**
   * the process instance key, which is related to the failed event. If the event is not
   *     process instance related, then this will return -1
   */
  processInstanceKey: number;
}
