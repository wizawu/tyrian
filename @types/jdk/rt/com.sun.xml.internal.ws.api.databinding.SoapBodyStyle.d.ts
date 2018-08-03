declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace databinding {
                            class SoapBodyStyle extends java.lang.Enum<com.sun.xml.internal.ws.api.databinding.SoapBodyStyle> {
                                public static readonly DocumentBare: com.sun.xml.internal.ws.api.databinding.SoapBodyStyle
                                public static readonly DocumentWrapper: com.sun.xml.internal.ws.api.databinding.SoapBodyStyle
                                public static readonly RpcLiteral: com.sun.xml.internal.ws.api.databinding.SoapBodyStyle
                                public static readonly RpcEncoded: com.sun.xml.internal.ws.api.databinding.SoapBodyStyle
                                public static readonly Unspecificed: com.sun.xml.internal.ws.api.databinding.SoapBodyStyle
                                public static values(): com.sun.xml.internal.ws.api.databinding.SoapBodyStyle[]
                                public static valueOf(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.databinding.SoapBodyStyle
                                public isDocument(): boolean
                                public isRpc(): boolean
                                public isLiteral(): boolean
                                public isBare(): boolean
                                public isDocumentWrapper(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}