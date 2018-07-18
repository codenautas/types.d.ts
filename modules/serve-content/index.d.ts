declare module 'serve-content' {

import * as express from "express-serve-static-core";
import * as m from "mime";

function serveContent(root: string, options: serveContent.serveContentOptions): express.Handler;

namespace serveContent {
    var mime: typeof m;
    type serveStaticOptions = {
        cacheControl?: boolean;
        dotfiles?: string;
        etag?: boolean;
        extensions?: string[];
        fallthrough?: boolean;
        immutable?: boolean;
        index?: boolean | string | string[];
        lastModified?: boolean;
        maxAge?: number | string;
        redirect?: boolean;
        setHeaders?: (res: express.Response, path: string, stat: any) => any;
    }
    type serveContentOptions = serveStaticOptions&({
        allowedExts: string[]
    }|{
        allowAllExts: boolean
        excludeExts?: string[]
    })&{
        jade?: object
        styl?: object
        serveStatic?: (root: string, options?:serveContentOptions) => express.Handler
    }
    function serveContent(root: string, options?: serveContentOptions): express.Handler;
}

export = serveContent;

}