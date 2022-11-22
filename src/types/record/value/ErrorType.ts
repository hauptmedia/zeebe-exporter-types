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
export enum ErrorType {
  UNKNOWN = 'UNKNOWN',
  IO_MAPPING_ERROR = 'IO_MAPPING_ERROR',
  JOB_NO_RETRIES = 'JOB_NO_RETRIES',
  CONDITION_ERROR = 'CONDITION_ERROR',
  EXTRACT_VALUE_ERROR = 'EXTRACT_VALUE_ERROR',
  CALLED_ELEMENT_ERROR = 'CALLED_ELEMENT_ERROR',
  UNHANDLED_ERROR_EVENT = 'UNHANDLED_ERROR_EVENT',
  MESSAGE_SIZE_EXCEEDED = 'MESSAGE_SIZE_EXCEEDED',
  CALLED_DECISION_ERROR = 'CALLED_DECISION_ERROR',
  DECISION_EVALUATION_ERROR = 'DECISION_EVALUATION_ERROR',
}
