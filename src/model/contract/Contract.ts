// Copyright 2019 ProximaX Limited. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file

import { UInt64 } from "../UInt64";
import { ContractDTO } from "../../infrastructure/model/contractDTO";

/**
 * The contract structure stores a supercontract definition as returned from http contractApi.
 * The contract can be created on blockachain using ModifyContractTransaction
 */
export class Contract {
    constructor(
        public readonly multisig: string,
        public readonly multisigAddress: string,
        public readonly start: UInt64,
        public readonly duration: UInt64,
        public readonly hash: string,
        public readonly customers: string[],
        public readonly executors: string[],
        public readonly verifiers: string[]
    ) {

    }

    public static createFromDTO(contractDTO: ContractDTO) {
        return new Contract(
            contractDTO.multisig,
            contractDTO.multisigAddress,
            new UInt64(contractDTO.start),
            new UInt64(contractDTO.duration),
            contractDTO.hash,
            contractDTO.customers,
            contractDTO.executors,
            contractDTO.verifiers
        );
    }
}
