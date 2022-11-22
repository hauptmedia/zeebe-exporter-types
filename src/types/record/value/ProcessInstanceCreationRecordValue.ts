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
import { ProcessInstanceRelated } from './ProcessInstanceRelated';

export interface ProcessInstanceCreationRecordValue
  extends RecordValueWithVariables,
    ProcessInstanceRelated {
  /**
   * the BPMN process id to create a process from
   */
  bpmnProcessId: string;

  /**
   * the version of the BPMN process to create a process from
   */
  version: number;

  /**
   * the unique key of the BPMN process definition to create a process from
   */
  processDefinitionKey: number;

  /** Returns a list of start instructions (if available), or an empty list. */
  startInstructions: ProcessInstanceCreationStartInstructionValue[];
}

export interface ProcessInstanceCreationStartInstructionValue {
  elementId: string;
}
