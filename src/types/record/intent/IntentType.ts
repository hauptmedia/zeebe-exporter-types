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
import {DecisionEvaluationIntent} from "./DecisionEvaluationIntent";
import {DecisionIntent} from "./DecisionIntent";
import {DecisionRequirementsIntent} from "./DecisionRequirementsIntent";
import {DeploymentDistributionIntent} from "./DeploymentDistributionIntent";
import {DeploymentIntent} from "./DeploymentIntent";
import {ErrorIntent} from "./ErrorIntent";
import {EscalationIntent} from "./EscalationIntent";
import {IncidentIntent} from "./IncidentIntent";
import {JobBatchIntent} from "./JobBatchIntent";
import {JobIntent} from "./JobIntent";
import {MessageIntent} from "./MessageIntent";
import {MessageStartEventSubscriptionIntent} from "./MessageStartEventSubscriptionIntent";
import {ProcessEventIntent} from "./ProcessEventIntent";
import {ProcessInstanceCreationIntent} from "./ProcessInstanceCreationIntent";
import {ProcessInstanceIntent} from "./ProcessInstanceIntent";
import {ProcessInstanceModificationIntent} from "./ProcessInstanceModificationIntent";
import {ProcessInstanceResultIntent} from "./ProcessInstanceResultIntent";
import {ProcessIntent} from "./ProcessIntent";
import {ProcessMessageSubscriptionIntent} from "./ProcessMessageSubscriptionIntent";
import {TimerIntent} from "./TimerIntent";
import {VariableDocumentIntent} from "./VariableDocumentIntent";
import {VariableIntent} from "./VariableIntent";

export type IntentType = DecisionEvaluationIntent
    | DecisionIntent
    | DecisionRequirementsIntent
    | DeploymentDistributionIntent
    | DeploymentIntent
    | ErrorIntent
    | EscalationIntent
    | IncidentIntent
    | JobBatchIntent
    | JobIntent
    | MessageIntent
    | MessageStartEventSubscriptionIntent
    | ProcessEventIntent
    | ProcessInstanceCreationIntent
    | ProcessInstanceIntent
    | ProcessInstanceModificationIntent
    | ProcessInstanceResultIntent
    | ProcessIntent
    | ProcessMessageSubscriptionIntent
    | TimerIntent
    | VariableDocumentIntent
    | VariableIntent;