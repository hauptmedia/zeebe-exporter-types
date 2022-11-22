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
export enum BpmnElementType {
  // Default
  UNSPECIFIED = 'UNSPECIFIED',

  // Containers
  PROCESS = 'PROCESS',
  SUB_PROCESS = 'SUB_PROCESS',
  EVENT_SUB_PROCESS = 'EVENT_SUB_PROCESS',

  // Events
  START_EVENT = 'START_EVENT',
  INTERMEDIATE_CATCH_EVENT = 'INTERMEDIATE_CATCH_EVENT',
  INTERMEDIATE_THROW_EVENT = 'INTERMEDIATE_THROW_EVENT',
  BOUNDARY_EVENT = 'BOUNDARY_EVENT',
  END_EVENT = 'END_EVENT',

  // Tasks
  SERVICE_TASK = 'SERVICE_TASK',
  RECEIVE_TASK = 'RECEIVE_TASK',
  USER_TASK = 'USER_TASK',
  MANUAL_TASK = 'MANUAL_TASK',
  TASK = 'TASK',

  // Gateways
  EXCLUSIVE_GATEWAY = 'EXCLUSIVE_GATEWAY',
  PARALLEL_GATEWAY = 'PARALLEL_GATEWAY',
  EVENT_BASED_GATEWAY = 'EVENT_BASED_GATEWAY',
  INCLUSIVE_GATEWAY = 'INCLUSIVE_GATEWAY',

  // Other
  SEQUENCE_FLOW = 'SEQUENCE_FLOW',
  MULTI_INSTANCE_BODY = 'MULTI_INSTANCE_BODY',
  CALL_ACTIVITY = 'CALL_ACTIVITY',

  BUSINESS_RULE_TASK = 'BUSINESS_RULE_TASK',
  SCRIPT_TASK = 'SCRIPT_TASK',
  SEND_TASK = 'SEND_TASK',
}
