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
import { JobRecordValue } from './JobRecordValue';

export interface JobBatchRecordValue {
  /**
   * the type of the job
   */
  type: string;

  /**
   * the assigned worker to complete the job
   */
  worker: string;

  /**
   * the timeout (time span in milliseconds) for which a job is exclusively assigned to this
   *     worker. If the timeout is exceeded, it can happen that the job is handed to another worker
   *     and the work is performed twice.
   */
  timeout: number;

  /**
   * the number of jobs to handle
   */
  maxJobsToActivate: number;

  /**
   * list of the keys from the jobs assigned to this batch
   */
  jobKeys: number[];

  /**
   * the jobs assigned to this batch
   */
  jobs: JobRecordValue[];

  /**
   * the broker has more JobRecords that couldn't fit in this batch
   */
  truncated: boolean;
}
