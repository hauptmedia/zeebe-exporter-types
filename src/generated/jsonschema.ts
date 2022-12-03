import * as DecisionEvaluationRecordValue from './jsonschema/DecisionEvaluationRecordValue.json'
import * as DecisionRecordValue from './jsonschema/DecisionRecordValue.json'
import * as DecisionRequirementsRecordValue from './jsonschema/DecisionRequirementsRecordValue.json'
import * as DeploymentDistributionRecordValue from './jsonschema/DeploymentDistributionRecordValue.json'
import * as DeploymentRecordValue from './jsonschema/DeploymentRecordValue.json'
import * as ErrorRecordValue from './jsonschema/ErrorRecordValue.json'
import * as EscalationRecordValue from './jsonschema/EscalationRecordValue.json'
import * as IncidentRecordValue from './jsonschema/IncidentRecordValue.json'
import * as JobRecordValue from './jsonschema/JobRecordValue.json'
import * as JobBatchRecordValue from './jsonschema/JobBatchRecordValue.json'
import * as MessageRecordValue from './jsonschema/MessageRecordValue.json'
import * as MessageStartEventSubscriptionRecordValue from './jsonschema/MessageStartEventSubscriptionRecordValue.json'
import * as ProcessEventRecordValue from './jsonschema/ProcessEventRecordValue.json'
import * as ProcessInstanceCreationRecordValue from './jsonschema/ProcessInstanceCreationRecordValue.json'
import * as ProcessInstanceRecordValue from './jsonschema/ProcessInstanceRecordValue.json'
import * as ProcessInstanceModificationRecordValue from './jsonschema/ProcessInstanceModificationRecordValue.json'
import * as ProcessInstanceResultRecordValue from './jsonschema/ProcessInstanceResultRecordValue.json'
import * as ProcessMessageSubscriptionRecordValue from './jsonschema/ProcessMessageSubscriptionRecordValue.json'
import * as TimerRecordValue from './jsonschema/TimerRecordValue.json'
import * as VariableDocumentRecordValue from './jsonschema/VariableDocumentRecordValue.json'
import * as VariableRecordValue from './jsonschema/VariableRecordValue.json'
import * as MessageSubscriptionRecordValue from './jsonschema/MessageSubscriptionRecordValue.json'
import * as ZeebeRecord from './jsonschema/ZeebeRecord.json'
export const JsonSchemaRegistry = {
  'DecisionEvaluationRecordValue': DecisionEvaluationRecordValue,
  'DecisionRecordValue': DecisionRecordValue,
  'DecisionRequirementsRecordValue': DecisionRequirementsRecordValue,
  'DeploymentDistributionRecordValue': DeploymentDistributionRecordValue,
  'DeploymentRecordValue': DeploymentRecordValue,
  'ErrorRecordValue': ErrorRecordValue,
  'EscalationRecordValue': EscalationRecordValue,
  'IncidentRecordValue': IncidentRecordValue,
  'JobRecordValue': JobRecordValue,
  'JobBatchRecordValue': JobBatchRecordValue,
  'MessageRecordValue': MessageRecordValue,
  'MessageStartEventSubscriptionRecordValue': MessageStartEventSubscriptionRecordValue,
  'ProcessEventRecordValue': ProcessEventRecordValue,
  'ProcessInstanceCreationRecordValue': ProcessInstanceCreationRecordValue,
  'ProcessInstanceRecordValue': ProcessInstanceRecordValue,
  'ProcessInstanceModificationRecordValue': ProcessInstanceModificationRecordValue,
  'ProcessInstanceResultRecordValue': ProcessInstanceResultRecordValue,
  'ProcessMessageSubscriptionRecordValue': ProcessMessageSubscriptionRecordValue,
  'TimerRecordValue': TimerRecordValue,
  'VariableDocumentRecordValue': VariableDocumentRecordValue,
  'VariableRecordValue': VariableRecordValue,
  'MessageSubscriptionRecordValue': MessageSubscriptionRecordValue,
  'ZeebeRecord': ZeebeRecord,
}
export type JsonSchemaRegistryTypes = keyof typeof JsonSchemaRegistry
