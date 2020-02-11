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

import { MetadataModificationTypeEnum } from './metadataModificationTypeEnum';

export class MetadataModificationDTO {
    'modificationType': MetadataModificationTypeEnum;
    /**
    * The key of metadata modification.
    */
    'key': string;
    /**
    * The value of metadata modification.
    */
    'value': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "modificationType",
            "baseName": "modificationType",
            "type": "MetadataModificationTypeEnum"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return MetadataModificationDTO.attributeTypeMap;
    }
}

