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
import { BpmnElementType } from './BpmnElementType';
import { BpmnEventType } from './BpmnEventType';
import { ProcessInstanceRelated } from './ProcessInstanceRelated';

/**
 * Represents a process instance related command or event.
 */
export interface ProcessInstanceRecordValue extends ProcessInstanceRelated {
  /**
   * the BPMN process id this process instance belongs to.
   */
  bpmnProcessId: string;

  /**
   * the version of the deployed process this instance belongs to.
   */
  version: number;

  /**
   * the key of the deployed process this instance belongs to.
   */
  processDefinitionKey: number;

  /**
   * the id of the current process element, or empty if the id is not specified.
   */
  elementId: string;

  /**
   * the key of the activity instance that is the flow scope of this flow element instance;
   *     -1 for records of the process instance itself.
   */
  flowScopeKey: number;

  /**
   * the BPMN type of the current process element.
   */
  bpmnElementType: BpmnElementType;

  /**
   * the key of the process instance that created this instance, or -1 if it was not created
   *     by another process instance.
   */
  parentProcessInstanceKey: number;

  /**
   * the key of the element instance that created this instance, or -1 if it was not created
   *     by another process instance.
   */
  parentElementInstanceKey: number;

  /**
   * the BPMN event type of the current process element.
   */
  bpmnEventType: BpmnEventType;
}
