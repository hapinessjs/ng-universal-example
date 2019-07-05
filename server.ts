// This is important and needed before anything else
import 'zone.js/dist/zone-node';

import { Config } from '@hapiness/config';
import { Hapiness, Module } from '@hapiness/core';
import { HttpServer, HttpServerConfig } from '@hapiness/core/httpserver';
import { join } from 'path';

const BROWSER_FOLDER = join(process.cwd(), 'dist', 'browser');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP, NgUniversalModule} = require('./dist/server/main');

// Create our Hapiness application
@Module({
    version: '1.0.0',
    imports: [
        NgUniversalModule.setConfig({
            bootstrap: AppServerModuleNgFactory,
            lazyModuleMap: LAZY_MODULE_MAP,
            staticContent: {
                indexFile: 'index.html',
                rootPath: BROWSER_FOLDER
            }
        })
    ]
})
class HapinessApplication {
    /**
     * OnStart process
     */
    onStart(): void {
        console.log(`SSR application is running`);
    }

    /**
     * OnError process
     */
    onError(error: Error): void {
        console.error(error);
    }
}


// Boostrap Hapiness application
Hapiness.bootstrap(HapinessApplication, [
    HttpServer.setConfig<HttpServerConfig>(Config.get('server'))
]);
