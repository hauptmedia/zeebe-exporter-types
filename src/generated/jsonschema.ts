import * as DecisionEvaluation from './jsonschema/DecisionEvaluation.json'
import * as Decision from './jsonschema/Decision.json'
import * as DecisionRequirements from './jsonschema/DecisionRequirements.json'
import * as Process from './jsonschema/Process.json'
import * as DeploymentDistribution from './jsonschema/DeploymentDistribution.json'
import * as Deployment from './jsonschema/Deployment.json'
import * as Error from './jsonschema/Error.json'
import * as Escalation from './jsonschema/Escalation.json'
import * as Incident from './jsonschema/Incident.json'
import * as Job from './jsonschema/Job.json'
import * as JobBatch from './jsonschema/JobBatch.json'
import * as Message from './jsonschema/Message.json'
import * as MessageStartEventSubscription from './jsonschema/MessageStartEventSubscription.json'
import * as ProcessEvent from './jsonschema/ProcessEvent.json'
import * as ProcessInstanceCreation from './jsonschema/ProcessInstanceCreation.json'
import * as ProcessInstance from './jsonschema/ProcessInstance.json'
import * as ProcessInstanceModification from './jsonschema/ProcessInstanceModification.json'
import * as ProcessInstanceResult from './jsonschema/ProcessInstanceResult.json'
import * as ProcessMessageSubscription from './jsonschema/ProcessMessageSubscription.json'
import * as Timer from './jsonschema/Timer.json'
import * as VariableDocument from './jsonschema/VariableDocument.json'
import * as Variable from './jsonschema/Variable.json'
import * as MessageSubscription from './jsonschema/MessageSubscription.json'
import * as ZeebeRecord from './jsonschema/ZeebeRecord.json'
export const JsonSchemaRegistry = {
  'DecisionEvaluation': DecisionEvaluation,
  'Decision': Decision,
  'DecisionRequirements': DecisionRequirements,
  'Process': Process,
  'DeploymentDistribution': DeploymentDistribution,
  'Deployment': Deployment,
  'Error': Error,
  'Escalation': Escalation,
  'Incident': Incident,
  'Job': Job,
  'JobBatch': JobBatch,
  'Message': Message,
  'MessageStartEventSubscription': MessageStartEventSubscription,
  'ProcessEvent': ProcessEvent,
  'ProcessInstanceCreation': ProcessInstanceCreation,
  'ProcessInstance': ProcessInstance,
  'ProcessInstanceModification': ProcessInstanceModification,
  'ProcessInstanceResult': ProcessInstanceResult,
  'ProcessMessageSubscription': ProcessMessageSubscription,
  'Timer': Timer,
  'VariableDocument': VariableDocument,
  'Variable': Variable,
  'MessageSubscription': MessageSubscription,
  'ZeebeRecord': ZeebeRecord,
}
export type JsonSchemaRegistryTypes = keyof typeof JsonSchemaRegistry
