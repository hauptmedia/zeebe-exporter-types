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
export enum ProcessInstanceIntent {
  CANCEL = 'CANCEL',
  SEQUENCE_FLOW_TAKEN = 'SEQUENCE_FLOW_TAKEN',
  ELEMENT_ACTIVATING = 'ELEMENT_ACTIVATING',
  ELEMENT_ACTIVATED = 'ELEMENT_ACTIVATED',
  ELEMENT_COMPLETING = 'ELEMENT_COMPLETING',
  ELEMENT_COMPLETED = 'ELEMENT_COMPLETED',
  ELEMENT_TERMINATING = 'ELEMENT_TERMINATING',
  ELEMENT_TERMINATED = 'ELEMENT_TERMINATED',
  ACTIVATE_ELEMENT = 'ACTIVATE_ELEMENT',
  COMPLETE_ELEMENT = 'COMPLETE_ELEMENT',
  TERMINATE_ELEMENT = 'TERMINATE_ELEMENT',
}
