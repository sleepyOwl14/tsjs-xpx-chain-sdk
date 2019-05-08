"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright 2018 NEM
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
const js_xpx_catapult_library_1 = require("js-xpx-catapult-library");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const Address_1 = require("../model/account/Address");
const PublicAccount_1 = require("../model/account/PublicAccount");
const MosaicId_1 = require("../model/mosaic/MosaicId");
const AddressAlias_1 = require("../model/namespace/AddressAlias");
const AliasType_1 = require("../model/namespace/AliasType");
const EmptyAlias_1 = require("../model/namespace/EmptyAlias");
const MosaicAlias_1 = require("../model/namespace/MosaicAlias");
const NamespaceId_1 = require("../model/namespace/NamespaceId");
const NamespaceInfo_1 = require("../model/namespace/NamespaceInfo");
const NamespaceName_1 = require("../model/namespace/NamespaceName");
const UInt64_1 = require("../model/UInt64");
const Http_1 = require("./Http");
const NetworkHttp_1 = require("./NetworkHttp");
/**
 * Namespace http repository.
 *
 * @since 1.0
 */
class NamespaceHttp extends Http_1.Http {
    /**
     * Constructor
     * @param url
     * @param networkHttp
     */
    constructor(url, networkHttp, authentications, defaultHeaders) {
        networkHttp = networkHttp == null ? new NetworkHttp_1.NetworkHttp(url) : networkHttp;
        super(url, networkHttp, authentications, defaultHeaders);
        this.namespaceRoutesApi = new js_xpx_catapult_library_1.NamespaceRoutesApi(this.apiClient);
    }
    /**
     * Gets the NamespaceInfo for a given namespaceId
     * @param namespaceId - Namespace id
     * @returns Observable<NamespaceInfo>
     */
    getNamespace(namespaceId) {
        return this.getNetworkTypeObservable().pipe(operators_1.mergeMap((networkType) => rxjs_1.from(this.namespaceRoutesApi.getNamespace(namespaceId.toHex())).pipe(operators_1.map((namespaceInfoDTO) => {
            return new NamespaceInfo_1.NamespaceInfo(namespaceInfoDTO.meta.active, namespaceInfoDTO.meta.index, namespaceInfoDTO.meta.id, namespaceInfoDTO.namespace.type, namespaceInfoDTO.namespace.depth, this.extractLevels(namespaceInfoDTO.namespace), new NamespaceId_1.NamespaceId(namespaceInfoDTO.namespace.parentId), PublicAccount_1.PublicAccount.createFromPublicKey(namespaceInfoDTO.namespace.owner, networkType), new UInt64_1.UInt64(namespaceInfoDTO.namespace.startHeight), new UInt64_1.UInt64(namespaceInfoDTO.namespace.endHeight), this.extractAlias(namespaceInfoDTO.namespace));
        }))));
    }
    /**
     * Gets array of NamespaceInfo for an account
     * @param address - Address
     * @param queryParams - (Optional) Query params
     * @returns Observable<NamespaceInfo[]>
     */
    getNamespacesFromAccount(address, queryParams) {
        return this.getNetworkTypeObservable().pipe(operators_1.mergeMap((networkType) => rxjs_1.from(this.namespaceRoutesApi.getNamespacesFromAccount(address.plain(), queryParams != null ? queryParams : {})).pipe(operators_1.map((namespaceInfosDTO) => {
            return namespaceInfosDTO.map((namespaceInfoDTO) => {
                return new NamespaceInfo_1.NamespaceInfo(namespaceInfoDTO.meta.active, namespaceInfoDTO.meta.index, namespaceInfoDTO.meta.id, namespaceInfoDTO.namespace.type, namespaceInfoDTO.namespace.depth, this.extractLevels(namespaceInfoDTO.namespace), new NamespaceId_1.NamespaceId(namespaceInfoDTO.namespace.parentId), PublicAccount_1.PublicAccount.createFromPublicKey(namespaceInfoDTO.namespace.owner, networkType), new UInt64_1.UInt64(namespaceInfoDTO.namespace.startHeight), new UInt64_1.UInt64(namespaceInfoDTO.namespace.endHeight), this.extractAlias(namespaceInfoDTO.namespace));
            });
        }))));
    }
    /**
     * Gets array of NamespaceInfo for different account
     * @param addresses - Array of Address
     * @param queryParams - (Optional) Query params
     * @returns Observable<NamespaceInfo[]>
     */
    getNamespacesFromAccounts(addresses, queryParams) {
        const publicKeysBody = {
            addresses: addresses.map((address) => address.plain()),
        };
        return this.getNetworkTypeObservable().pipe(operators_1.mergeMap((networkType) => rxjs_1.from(this.namespaceRoutesApi.getNamespacesFromAccounts(publicKeysBody, queryParams != null ? queryParams : {})).pipe(operators_1.map((namespaceInfosDTO) => {
            return namespaceInfosDTO.map((namespaceInfoDTO) => {
                return new NamespaceInfo_1.NamespaceInfo(namespaceInfoDTO.meta.active, namespaceInfoDTO.meta.index, namespaceInfoDTO.meta.id, namespaceInfoDTO.namespace.type, namespaceInfoDTO.namespace.depth, this.extractLevels(namespaceInfoDTO.namespace), new NamespaceId_1.NamespaceId(namespaceInfoDTO.namespace.parentId), PublicAccount_1.PublicAccount.createFromPublicKey(namespaceInfoDTO.namespace.owner, networkType), new UInt64_1.UInt64(namespaceInfoDTO.namespace.startHeight), new UInt64_1.UInt64(namespaceInfoDTO.namespace.endHeight), this.extractAlias(namespaceInfoDTO.namespace));
            });
        }))));
    }
    /**
     * Gets array of NamespaceName for different namespaceIds
     * @param namespaceIds - Array of namespace ids
     * @returns Observable<NamespaceName[]>
     */
    getNamespacesName(namespaceIds) {
        const namespaceIdsBody = {
            namespaceIds: namespaceIds.map((id) => id.toHex()),
        };
        return rxjs_1.from(this.namespaceRoutesApi.getNamespacesNames(namespaceIdsBody)).pipe(operators_1.map((namespaceNamesDTO) => {
            return namespaceNamesDTO.map((namespaceNameDTO) => {
                return new NamespaceName_1.NamespaceName(new NamespaceId_1.NamespaceId(namespaceNameDTO.namespaceId), namespaceNameDTO.name, namespaceNameDTO.parentId ? new NamespaceId_1.NamespaceId(namespaceNameDTO.parentId) : undefined);
            });
        }));
    }
    /**
     * Gets the MosaicId from a MosaicAlias
     * @param namespaceId - the namespaceId of the namespace
     * @returns Observable<MosaicId | null>
     */
    getLinkedMosaicId(namespaceId) {
        return this.getNetworkTypeObservable().pipe(operators_1.mergeMap((networkType) => rxjs_1.from(this.namespaceRoutesApi.getNamespace(namespaceId.toHex())).pipe(operators_1.map((namespaceInfoDTO) => {
            if (namespaceInfoDTO.namespace === undefined) {
                // forward catapult-rest error
                throw namespaceInfoDTO;
            }
            if (namespaceInfoDTO.namespace.alias.type === AliasType_1.AliasType.None
                || namespaceInfoDTO.namespace.alias.type !== AliasType_1.AliasType.Mosaic) {
                throw new Error('No mosaicId is linked to namespace \'' + namespaceInfoDTO.namespace.name + '\'');
            }
            return new MosaicId_1.MosaicId(namespaceInfoDTO.namespace.alias.mosaicId);
        }))));
    }
    /**
     * Gets the Address from a AddressAlias
     * @param namespaceId - the namespaceId of the namespace
     * @returns Observable<Address>
     */
    getLinkedAddress(namespaceId) {
        return this.getNetworkTypeObservable().pipe(operators_1.mergeMap((networkType) => rxjs_1.from(this.namespaceRoutesApi.getNamespace(namespaceId.toHex())).pipe(operators_1.map((namespaceInfoDTO) => {
            if (namespaceInfoDTO.namespace === undefined) {
                // forward catapult-rest error
                throw namespaceInfoDTO;
            }
            if (namespaceInfoDTO.namespace.alias.type === AliasType_1.AliasType.None
                || namespaceInfoDTO.namespace.alias.type !== AliasType_1.AliasType.Address) {
                throw new Error('No address is linked to namespace \'' + namespaceInfoDTO.namespace.name + '\'');
            }
            const addressDecoded = namespaceInfoDTO.namespace.alias.address;
            const address = js_xpx_catapult_library_1.address.addressToString(js_xpx_catapult_library_1.convert.hexToUint8(addressDecoded));
            return Address_1.Address.createFromRawAddress(address);
        }))));
    }
    extractLevels(namespace) {
        const result = [];
        if (namespace.level0) {
            result.push(new NamespaceId_1.NamespaceId(namespace.level0));
        }
        if (namespace.level1) {
            result.push(new NamespaceId_1.NamespaceId(namespace.level1));
        }
        if (namespace.level2) {
            result.push(new NamespaceId_1.NamespaceId(namespace.level2));
        }
        return result;
    }
    /**
     * Extract the alias from a namespace
     *
     * @internal
     * @access private
     * @param namespace
     */
    extractAlias(namespace) {
        if (namespace.alias && namespace.alias.type === AliasType_1.AliasType.Mosaic) {
            return new MosaicAlias_1.MosaicAlias(namespace.alias.type, namespace.alias.mosaicId);
        }
        else if (namespace.alias && namespace.alias.type === AliasType_1.AliasType.Address) {
            return new AddressAlias_1.AddressAlias(namespace.alias.type, namespace.alias.address);
        }
        return new EmptyAlias_1.EmptyAlias();
    }
}
exports.NamespaceHttp = NamespaceHttp;
//# sourceMappingURL=NamespaceHttp.js.map