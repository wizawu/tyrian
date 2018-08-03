declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace developer {
                        class SchemaValidationFeature extends javax.xml.ws.WebServiceFeature {
                            public static readonly ID: string
                            public constructor()
                            public constructor(arg0: java.lang.Class<com.sun.xml.internal.ws.developer.ValidationErrorHandler>)
                            public constructor(arg0: boolean, arg1: boolean)
                            public constructor(arg0: boolean, arg1: boolean, arg2: java.lang.Class<com.sun.xml.internal.ws.developer.ValidationErrorHandler>)
                            public getID(): string
                            public getErrorHandler(): java.lang.Class<com.sun.xml.internal.ws.developer.ValidationErrorHandler>
                            public isInbound(): boolean
                            public isOutbound(): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}