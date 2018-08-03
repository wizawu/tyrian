declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace sei {
                            abstract class EndpointArgumentsBuilder {
                                public static readonly NONE: com.sun.xml.internal.ws.server.sei.EndpointArgumentsBuilder
                                protected wrapperName: javax.xml.namespace.QName
                                protected wrappedParts: java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.server.sei.EndpointArgumentsBuilder$WrappedPartBuilder>
                                public constructor()
                                public abstract readRequest(arg0: com.sun.xml.internal.ws.api.message.Message, arg1: java.lang.Object[]): void
                                public static getVMUninitializedValue(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.Object
                                protected readWrappedRequest(arg0: com.sun.xml.internal.ws.api.message.Message, arg1: java.lang.Object[]): void
                                public static getWSDLPartName(arg0: com.sun.xml.internal.ws.api.message.Attachment): string
                                public static class: java.lang.Class<any>
                            }
                            interface EndpointArgumentsBuilder$$Lambda {
                                (arg0: com.sun.xml.internal.ws.api.message.Message, arg1: java.lang.Object[]): void
                            }
                        }
                    }
                }
            }
        }
    }
}