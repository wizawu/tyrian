declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        namespace sei {
abstract class ResponseBuilder {
    protected wrappedParts: java.util.Map<javax.xml.namespace.QName, com.sun.xml.internal.ws.client.sei.ResponseBuilder$WrappedPartBuilder>
    protected wrapperName: javax.xml.namespace.QName
    public static NONE: com.sun.xml.internal.ws.client.sei.ResponseBuilder
    public constructor()
    public readResponse(arg0: com.sun.xml.internal.ws.api.message.Message, arg1: java.lang.Object[]): java.lang.Object
    protected readWrappedResponse(arg0: com.sun.xml.internal.ws.api.message.Message, arg1: java.lang.Object[]): java.lang.Object
    public static getVMUninitializedValue(arg0: java.lang.reflect.Type | java.lang.reflect.Type$$Lambda): java.lang.Object
    public static getWSDLPartName(arg0: com.sun.xml.internal.ws.api.message.Attachment): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}