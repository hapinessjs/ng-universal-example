// These are important and needed before anything else
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
// * NOTE :: leave this until @hapiness/core will be migrated to rxjs v6
import 'rxjs-compat';

import { enableProdMode } from '@angular/core';
import {
    HapiConfig, Hapiness, HapinessModule, HttpServerExt, HttpServerService, OnError,
    OnStart
} from '@hapiness/core';
import { NgUniversalModule } from '@hapiness/ng-universal';
import { Config } from '@hapiness/config';
import { LoggerExt, LoggerModule, LoggerService } from '@hapiness/logger';
import { join } from 'path';

import * as bunyan from 'bunyan';
import { LoggerOptions } from 'bunyan';

const BROWSER_FOLDER = join(process.cwd(), 'dist', 'browser');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main.bundle');

// Create our Hapiness application
@HapinessModule({
    version: '1.0.0',
    imports: [
        NgUniversalModule.setConfig({
            bootstrap: AppServerModuleNgFactory,
            lazyModuleMap: LAZY_MODULE_MAP,
            staticContent: {
                indexFile: 'index.html',
                rootPath: BROWSER_FOLDER
            }
        }),
        LoggerModule
    ],
    providers: [
        HttpServerService
    ]
})
class HapinessApplication implements OnStart, OnError {
    /**
     * Class constructor
     *
     * @param {HttpServerService} _httpServer DI for HttpServerService to provide .instance() method to give original Hapi.js server
     * @param {LoggerService} _logger DI for LoggerService to provide logger object
     */
    constructor(private _httpServer: HttpServerService, private _logger: LoggerService) {
    }

    /**
     * OnStart process
     */
    onStart(): void {
        this._logger.info(`Node server listening on ${this._httpServer.instance().info.uri}`);
    }

    /**
     * OnError process
     */
    onError(error: Error): void {
        this._logger.error(error);
    }
}

// Boostrap Hapiness application
Hapiness.bootstrap(HapinessApplication, [
    HttpServerExt.setConfig(Config.get('server') as HapiConfig),
    LoggerExt.setConfig({ logger: bunyan.createLogger(Config.get('logger') as LoggerOptions) })
]);
