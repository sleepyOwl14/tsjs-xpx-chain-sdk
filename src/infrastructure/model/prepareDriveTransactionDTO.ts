/**
 * Catapult REST API Reference
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.15
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { OfferTypeEnum } from './offerTypeEnum';
import { PrepareDriveTransactionBodyDTO } from './prepareDriveTransactionBodyDTO';
import { TransactionDTO } from './transactionDTO';

export class PrepareDriveTransactionDTO {
    /**
    * The signature of the entity. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
    */
    'signature': string;
    /**
    * The public key of the entity signer formatted as hexadecimal.
    */
    'signer': string;
    /**
    * The entity version. The higher byte represents the network identifier: * 0x68 (MAIN_NET) - Public main network. * 0x98 (TEST_NET) - Public test network. * 0x60 (MIJIN) - Private network. * 0x90 (MIJIN_TEST) - Private test network. 
    */
    'version': number;
    'type': OfferTypeEnum;
    'maxFee': Array<number>;
    'deadline': Array<number>;
    'mosaicId': Array<number>;
    'mosaicAmount': Array<number>;
    'cost': Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "signature",
            "baseName": "signature",
            "type": "string"
        },
        {
            "name": "signer",
            "baseName": "signer",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "OfferTypeEnum"
        },
        {
            "name": "maxFee",
            "baseName": "max_fee",
            "type": "Array<number>"
        },
        {
            "name": "deadline",
            "baseName": "deadline",
            "type": "Array<number>"
        },
        {
            "name": "mosaicId",
            "baseName": "mosaicId",
            "type": "Array<number>"
        },
        {
            "name": "mosaicAmount",
            "baseName": "mosaicAmount",
            "type": "Array<number>"
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return PrepareDriveTransactionDTO.attributeTypeMap;
    }
}

