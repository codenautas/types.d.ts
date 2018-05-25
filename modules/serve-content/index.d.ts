declare module 'serve-content' {

import * as express from "express-serve-static-core";
import * as m from "mime";

function serveContent(root: string, options?: serveContent.serveContentOptions): express.Handler;

namespace serveContent {
    var mime: typeof m;
    interface serveContentOptions {
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
    function serveContent(root: string, options?: serveContentOptions): express.Handler;
}

export = serveContent;

}