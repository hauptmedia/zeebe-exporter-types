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

import {RejectionType} from './RejectionType';
import {ZeebeRecordType} from './ZeebeRecordType';

import {ValueTypeEnum} from "./ValueTypeEnum";
import {IntentType} from "./intent/IntentType";

export type ZeebeRecord<ValueType> = {
    /*
     * The position of the record. Positions are locally unique to the partition, and
     * monotonically increasing. Records are then ordered on the partition by their positions, i.e.
     * lower position means the record was published earlier.
     */
    position: number;

    /*
     * The position of the source record. The source record denotes the record which caused
     * the current record. It can be unset (meaning there is no source record), at which point the
     * position returned here will be -1. Anything >= 0 implies a source record.
     */
    sourceRecordPosition: number;

    /**
     * The key of the record.
     *
     * <p>Multiple records can have the same key if they belongs to the same logical entity. Keys are
     * unique for the combination of partition and record type.
     */
    key: number;

    /**
     * the unix timestamp at which the record was published on the partition.
     */
    timestamp: number;

    /**
     * the intent of the record
     */
    intent: IntentType;

    /**
     * the partition ID on which the record was published
     */
    partitionId: number;

    /**
     * the type of the record (event, command or command rejection)
     */
    recordType: ZeebeRecordType;

    /**
     * the type of rejection if recordType is COMMAND_REJECTION or else <code>null</code>.
     */
    rejectionType: RejectionType;

    /**
     * the reason why a command was rejected if recordTypereturns is COMMAND_REJECTION or else <code>null</code>.
     */
    rejectionReason: string;

    /**
     * the version of the broker that wrote this record
     */
    brokerVersion: string;

    /**
     * the type of the record (e.g. job, process, process instance, etc.)
     */
    valueType: ValueTypeEnum;

    /**
     * The record value is essentially the record specific data, e.g. for a process instance
     * creation event, it would contain information relevant to the process instance being created.
     * @type ValueType
     */
    value: ValueType;
};
