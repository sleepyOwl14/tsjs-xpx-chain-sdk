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

import { AccountPropertiesModificationDTO } from './accountPropertiesModificationDTO';
import { AccountPropertyTypeEnum } from './accountPropertyTypeEnum';

export class AccountPropertiesTransactionBodyDTO {
    'propertyType': AccountPropertyTypeEnum;
    'modifications': Array<AccountPropertiesModificationDTO>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "propertyType",
            "baseName": "propertyType",
            "type": "AccountPropertyTypeEnum"
        },
        {
            "name": "modifications",
            "baseName": "modifications",
            "type": "Array<AccountPropertiesModificationDTO>"
        }    ];

    static getAttributeTypeMap() {
        return AccountPropertiesTransactionBodyDTO.attributeTypeMap;
    }
}

