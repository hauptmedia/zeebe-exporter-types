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
export enum ValueTypeEnum {
  DECISION = 'DECISION',
  DECISION_EVALUATION = 'DECISION_EVALUATION',
  DECISION_REQUIREMENTS = 'DECISION_REQUIREMENTS',
  DEPLOYMENT = 'DEPLOYMENT',
  DEPLOYMENT_DISTRIBUTION = 'DEPLOYMENT_DISTRIBUTION',
  ERROR = 'ERROR',
  ESCALATION = 'ESCALATION',
  INCIDENT = 'INCIDENT',
  JOB = 'JOB',
  JOB_BATCH = 'JOB_BATCH',
  MESSAGE = 'MESSAGE',
  MESSAGE_START_EVENT_SUBSCRIPTION = 'MESSAGE_START_EVENT_SUBSCRIPTION',
  MESSAGE_SUBSCRIPTION = 'MESSAGE_SUBSCRIPTION',
  PROCESS = 'PROCESS',
  PROCESS_EVENT = 'PROCESS_EVENT',
  PROCESS_INSTANCE = 'PROCESS_INSTANCE',
  PROCESS_INSTANCE_CREATION = 'PROCESS_INSTANCE_CREATION',
  PROCESS_INSTANCE_MODIFICATION = 'PROCESS_INSTANCE_MODIFICATION',
  PROCESS_INSTANCE_RESULT = 'PROCESS_INSTANCE_RESULT',
  PROCESS_MESSAGE_SUBSCRIPTION = 'PROCESS_MESSAGE_SUBSCRIPTION',
  TIMER = 'TIMER',
  VARIABLE = 'VARIABLE',
  VARIABLE_DOCUMENT = 'VARIABLE_DOCUMENT',
}
