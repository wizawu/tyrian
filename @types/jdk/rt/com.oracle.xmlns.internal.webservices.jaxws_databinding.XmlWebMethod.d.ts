declare namespace com {
    namespace oracle {
        namespace xmlns {
            namespace internal {
                namespace webservices {
                    namespace jaxws_databinding {
                        class XmlWebMethod implements javax.jws.WebMethod {
                            protected action: string
                            protected exclude: boolean
                            protected operationName: string
                            public constructor()
                            public getAction(): string
                            public setAction(arg0: java.lang.String | string): void
                            public isExclude(): boolean
                            public setExclude(arg0: java.lang.Boolean | boolean): void
                            public getOperationName(): string
                            public setOperationName(arg0: java.lang.String | string): void
                            public operationName(): string
                            public action(): string
                            public exclude(): boolean
                            public annotationType(): java.lang.Class<java.lang.annotation.Annotation>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}