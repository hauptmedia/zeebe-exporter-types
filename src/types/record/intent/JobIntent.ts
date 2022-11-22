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
export enum JobIntent {
  CREATED = 'CREATED',

  COMPLETE = 'COMPLETE',
  COMPLETED = 'COMPLETED',

  TIME_OUT = 'TIME_OUT',
  TIMED_OUT = 'TIMED_OUT',

  FAIL = 'FAIL',
  FAILED = 'FAILED',

  UPDATE_RETRIES = 'UPDATE_RETRIES',
  RETRIES_UPDATED = 'RETRIES_UPDATED',

  /**
   * @deprecated for removal since 8.0.2, removal can only happen if we break backwards
   *     compatibility with older versions because Cancel command can still exist on log streams
   */
  CANCEL = 'CANCEL',

  CANCELED = 'CANCELED',

  THROW_ERROR = 'THROW_ERROR',
  ERROR_THROWN = 'ERROR_THROWN',
  RECUR_AFTER_BACKOFF = 'RECUR_AFTER_BACKOFF',
  RECURRED_AFTER_BACKOFF = 'RECURRED_AFTER_BACKOFF',
}
