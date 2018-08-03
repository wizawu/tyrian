declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace packaging {
                            namespace mime {
                                namespace internet {
                                    class InternetHeaders {
                                        public constructor()
                                        public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                                        public load(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                                        public getHeader(arg0: java.lang.String | string): java.lang.String[]
                                        public getHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                        public setHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public addHeader(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                        public removeHeader(arg0: java.lang.String | string): void
                                        public getAllHeaders(): com.sun.xml.internal.messaging.saaj.util.FinalArrayList
                                        public addHeaderLine(arg0: java.lang.String | string): void
                                        public getAllHeaderLines(): java.util.List
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}