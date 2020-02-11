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


export class BalanceTransferReceiptDTOAllOf {
    /**
    * The public key of the sender.
    */
    'sender': string;
    /**
    * The public key of the recipient.
    */
    'recipient': string;
    'mosaicId': Array<number>;
    'amount': Array<number>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "sender",
            "baseName": "sender",
            "type": "string"
        },
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string"
        },
        {
            "name": "mosaicId",
            "baseName": "mosaicId",
            "type": "Array<number>"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "Array<number>"
        }    ];

    static getAttributeTypeMap() {
        return BalanceTransferReceiptDTOAllOf.attributeTypeMap;
    }
}

