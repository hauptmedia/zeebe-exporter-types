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
import { ProcessInstanceRelated } from './ProcessInstanceRelated';

export interface ProcessInstanceModificationRecordValue
  extends ProcessInstanceRelated {
  /** A list of terminate instructions (if available), or an empty list. */
  terminateInstructions: ProcessInstanceModificationTerminateInstructionValue[];

  /** A list of activate instructions (if available), or an empty list. */
  activateInstructions: ProcessInstanceModificationActivateInstructionValue[];
}

export interface ProcessInstanceModificationTerminateInstructionValue {
  /** The key of element instance to terminate. */
  elementInstanceKey: number;
}

export interface ProcessInstanceModificationActivateInstructionValue {
  /** The id of the element to create a new element instance at. */
  elementId: string;

  /**
   * The key of the ancestor scope to create the new element instance in, or -1 if no
   * specific ancestor is selected.
   *
   * <p>This key is used for ancestor selection:
   *
   * <p>By default, the new element instance is created within an existing element instance of the
   * flow scope. For example, when activating an element inside an embedded subprocess and the
   * subprocess is already active.
   *
   * <p>If there is more than one element instance of the flow scope active then the engine can't
   * decide which element instance to create the new element instance in. Instead, the element
   * instance must be selected by its element instance key. The new element instance is created
   * within the selected element instance.
   *
   * <p>If the selected element instance is not of the flow scope but from a higher scope (e.g.
   * the process instance key instead of the element instance key of the subprocess) then the
   * engine creates a new element instance of the flow scope first and then creates the new
   * element instance within this scope.
   */
  ancestorScopeKey: number;

  /** Returns a list of variable instructions (if available), or an empty list. */
  variableInstructions: ProcessInstanceModificationVariableInstructionValue[];

  /**
   * All ancestor scope keys of the element that will be activated. The property is set in
   * the event only after the modification is applied.
   */
  ancestorScopeKeys: number[];
}

export interface ProcessInstanceModificationVariableInstructionValue {
  /** The variables of this instruction. Can be empty. */
  variables: Record<string, any>;

  /**
   * The element id of the scope where the variables should be created in, or an empty
   * string if the variables are global for the process instance.
   */
  elementId: string;
}
