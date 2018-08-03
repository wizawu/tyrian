declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace model {
                            class ParameterBinding {
                                public static readonly BODY: com.sun.xml.internal.ws.api.model.ParameterBinding
                                public static readonly HEADER: com.sun.xml.internal.ws.api.model.ParameterBinding
                                public static readonly UNBOUND: com.sun.xml.internal.ws.api.model.ParameterBinding
                                public readonly kind: com.sun.xml.internal.ws.api.model.ParameterBinding$Kind
                                public static createAttachment(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.model.ParameterBinding
                                public toString(): string
                                public getMimeType(): string
                                public isBody(): boolean
                                public isHeader(): boolean
                                public isUnbound(): boolean
                                public isAttachment(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}