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

import { RequestFile } from '../api';
import { CosignatureDTOAllOf } from './cosignatureDTOAllOf';
import { VerifiableEntityDTO } from './verifiableEntityDTO';

export class CosignatureDTO {
    /**
    * The signature of the entity. The signature was generated by the signer and can be used to validate tha the entity data was not modified by a node. 
    */
    'signature': string;
    /**
    * The public key of the transaction signer.
    */
    'signer': string;

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
        }    ];

    static getAttributeTypeMap() {
        return CosignatureDTO.attributeTypeMap;
    }
}
