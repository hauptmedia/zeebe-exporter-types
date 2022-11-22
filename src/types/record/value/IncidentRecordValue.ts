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
import { ErrorType } from './ErrorType';

export interface IncidentRecordValue extends ProcessInstanceRelated {
  /**
   * the type of error this incident is caused by. Can be <code>UNKNOWN</code> if the
   *     incident record is part of a {@link IncidentIntent#RESOLVE} command.
   */
  errorType: ErrorType;

  /**
   * the description of the error this incident is caused by. Can be empty if the incident
   *     record is part of a {@link IncidentIntent#RESOLVE} command.
   */
  errorMessage: string;

  /**
   * the BPMN process id this incident belongs to. Can be empty if the incident record is
   *     part of a {@link IncidentIntent#RESOLVE} command.
   */
  bpmnProcessId: string;

  /**
   * the key of the process this incident belongs to. Can be <code>-1</code> if the incident
   *     record is part of a {@link IncidentIntent#RESOLVE} command.
   */
  processDefinitionKey: number;

  /**
   * the id of the element this incident belongs to. Can be empty if incident record is part
   *     of a {@link IncidentIntent#RESOLVE} command.
   */
  elementId: string;

  /**
   * the key of the element instance this incident belongs to. Can be <code>-1</code> if the
   *     incident record is part of a {@link IncidentIntent#RESOLVE} command.
   */
  elementInstanceKey: number;

  /**
   * the key of the job this incident belongs to. Can be <code>-1</code> if the incident
   *     belongs to no job or the incident record is part of a {@link IncidentIntent#RESOLVE}
   *     command.
   */
  jobKey: number;

  /**
   * the key of the variable scope on which the variables need to be updated. Can be <code>
   *     -1</code> if the incident record is part of a {@link IncidentIntent#RESOLVE} command.
   */
  variableScopeKey: number;
}
