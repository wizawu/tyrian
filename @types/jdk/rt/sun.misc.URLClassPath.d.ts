declare namespace sun {
    namespace misc {
        class URLClassPath {
            public constructor(arg0: java.net.URL[], arg1: java.net.URLStreamHandlerFactory | java.net.URLStreamHandlerFactory$$Lambda, arg2: java.security.AccessControlContext)
            public constructor(arg0: java.net.URL[])
            public constructor(arg0: java.net.URL[], arg1: java.security.AccessControlContext)
            public closeLoaders(): java.util.List<java.io.IOException>
            public addURL(arg0: java.net.URL): void
            public getURLs(): java.net.URL[]
            public findResource(arg0: java.lang.String | string, arg1: boolean): java.net.URL
            public getResource(arg0: java.lang.String | string, arg1: boolean): sun.misc.Resource
            public findResources(arg0: java.lang.String | string, arg1: boolean): java.util.Enumeration<java.net.URL>
            public getResource(arg0: java.lang.String | string): sun.misc.Resource
            public getResources(arg0: java.lang.String | string, arg1: boolean): java.util.Enumeration<sun.misc.Resource>
            public getResources(arg0: java.lang.String | string): java.util.Enumeration<sun.misc.Resource>
            public static pathToURLs(arg0: java.lang.String | string): java.net.URL[]
            public checkURL(arg0: java.net.URL): java.net.URL
            public static class: java.lang.Class<any>
        }
    }
}