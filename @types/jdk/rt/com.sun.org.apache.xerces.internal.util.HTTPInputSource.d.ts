declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class HTTPInputSource extends com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource {
                                protected fFollowRedirects: boolean
                                protected fHTTPRequestProperties: java.util.Map<java.lang.String, java.lang.String>
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
                                public constructor(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier)
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.io.InputStream | java.io.InputStream$$Lambda, arg4: java.lang.String | string)
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.io.Reader, arg4: java.lang.String | string)
                                public getFollowHTTPRedirects(): boolean
                                public setFollowHTTPRedirects(arg0: boolean): void
                                public getHTTPRequestProperty(arg0: java.lang.String | string): string
                                public getHTTPRequestProperties(): java.util.Iterator<java.util.Map$Entry<java.lang.String, java.lang.String>>
                                public setHTTPRequestProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}