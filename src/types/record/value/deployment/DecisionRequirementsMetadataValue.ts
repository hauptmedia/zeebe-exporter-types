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

export interface DecisionRequirementsMetadataValue {
  /**
   * the ID of the DRG in the DMN
   */
  decisionRequirementsId: string;

  /**
   * the name of the DRG in the DMN
   */
  decisionRequirementsName: string;

  /**
   * the version of the deployed DRG
   */
  decisionRequirementsVersion: number;

  /**
   * the key of the deployed DRG
   */
  decisionRequirementsKey: number;

  /**
   * the namespace of the DRG in the DMN
   */
  namespace: string;

  /**
   * the name of the resource through which this DRG was deployed
   */
  resourceName: string;

  /**
   * @return the checksum of the DMN resource (MD5)
   */
  checksum: string;

  /**
   * {@code true} if the DRG is a duplicate (and has been deployed previously), otherwise
   *     {@code false}
   */
  duplicate(): boolean;
}
