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
/**
 * Represents a job related event or command.
 */
import { RecordValueWithVariables } from '../RecordValueWithVariables';
import { ProcessInstanceRelated } from './ProcessInstanceRelated';

export interface JobRecordValue
  extends RecordValueWithVariables,
    ProcessInstanceRelated {
  /**
   * the type of the job
   */
  type: string;

  /**
   * user-defined headers associated with this job
   */
  customHeaders: Record<string, string>;

  /**
   * the assigned worker to complete the job
   */
  worker: string;

  /**
   * remaining retries
   */
  retries: number;

  /**
   * the time of backoff in milliseconds. If backoff is disabled this method returns 0 (default value).
   */
  retryBackoff: number;

  /**
   * the timestamp when this job record should be recurred. This method is used by backoff
   *     to determine the date when the job is needed to be recurred after backoff.
   */
  recurringTime: number;

  /**
   * the unix timestamp until when the job is exclusively assigned to this worker (time unit
   *     is milliseconds since unix epoch). If the deadline is exceeded, it can happen that the job
   *     is handed to another worker and the work is performed twice. If this property is not set it
   *     will return '-1'.
   */
  deadline: number;

  /**
   * the message that contains additional context of the failure/error. It is set by the job
   *     worker then the processing fails because of a technical failure or a non-technical error.
   */
  errorMessage: string;

  /**
   * the error code to identify the business error. It is set by the job worker then the
   *     processing fails because of a non-technical error that should be handled by the process.
   */
  errorCode: string;

  /**
   * the element id of the corresponding service task
   */
  elementId: string;

  /**
   * the element instance key of the corresponding service task
   */
  elementInstanceKey: string;

  /**
   * the bpmn process id of the corresponding process definition
   */
  bpmnProcessId: string;

  /**
   * the version of the corresponding process definition
   */
  processDefinitionVersion: number;

  /**
   *  the process key of the corresponding process definition
   */
  processDefinitionKey: number;
}
