declare namespace com {
    namespace oracle {
        namespace xmlns {
            namespace internal {
                namespace webservices {
                    namespace jaxws_databinding {
                        class XmlWebParam implements javax.jws.WebParam {
                            protected header: boolean
                            protected mode: com.oracle.xmlns.internal.webservices.jaxws_databinding.WebParamMode
                            protected name: string
                            protected partName: string
                            protected targetNamespace: string
                            public constructor()
                            public isHeader(): boolean
                            public setHeader(arg0: java.lang.Boolean | boolean): void
                            public getMode(): com.oracle.xmlns.internal.webservices.jaxws_databinding.WebParamMode
                            public setMode(arg0: com.oracle.xmlns.internal.webservices.jaxws_databinding.WebParamMode): void
                            public getName(): string
                            public setName(arg0: java.lang.String | string): void
                            public getPartName(): string
                            public setPartName(arg0: java.lang.String | string): void
                            public getTargetNamespace(): string
                            public setTargetNamespace(arg0: java.lang.String | string): void
                            public name(): string
                            public partName(): string
                            public targetNamespace(): string
                            public mode(): javax.jws.WebParam$Mode
                            public header(): boolean
                            public annotationType(): java.lang.Class<java.lang.annotation.Annotation>
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}