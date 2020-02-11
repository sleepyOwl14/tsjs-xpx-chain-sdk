export * from './accountRoutesApi';
import { AccountRoutesApi } from './accountRoutesApi';
export * from './blockRoutesApi';
import { BlockRoutesApi } from './blockRoutesApi';
export * from './chainRoutesApi';
import { ChainRoutesApi } from './chainRoutesApi';
export * from './configRoutesApi';
import { ConfigRoutesApi } from './configRoutesApi';
export * from './diagnosticRoutesApi';
import { DiagnosticRoutesApi } from './diagnosticRoutesApi';
export * from './exchangeRoutesApi';
import { ExchangeRoutesApi } from './exchangeRoutesApi';
export * from './lockRoutesApi';
import { LockRoutesApi } from './lockRoutesApi';
export * from './metadataRoutesApi';
import { MetadataRoutesApi } from './metadataRoutesApi';
export * from './mosaicRoutesApi';
import { MosaicRoutesApi } from './mosaicRoutesApi';
export * from './namespaceRoutesApi';
import { NamespaceRoutesApi } from './namespaceRoutesApi';
export * from './networkRoutesApi';
import { NetworkRoutesApi } from './networkRoutesApi';
export * from './nodeRoutesApi';
import { NodeRoutesApi } from './nodeRoutesApi';
export * from './serviceRoutesApi';
import { ServiceRoutesApi } from './serviceRoutesApi';
export * from './transactionRoutesApi';
import { TransactionRoutesApi } from './transactionRoutesApi';
export * from './upgradeRoutesApi';
import { UpgradeRoutesApi } from './upgradeRoutesApi';
import * as fs from 'fs';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;

export const APIS = [AccountRoutesApi, BlockRoutesApi, ChainRoutesApi, ConfigRoutesApi, DiagnosticRoutesApi, ExchangeRoutesApi, LockRoutesApi, MetadataRoutesApi, MosaicRoutesApi, NamespaceRoutesApi, NetworkRoutesApi, NodeRoutesApi, ServiceRoutesApi, TransactionRoutesApi, UpgradeRoutesApi];
