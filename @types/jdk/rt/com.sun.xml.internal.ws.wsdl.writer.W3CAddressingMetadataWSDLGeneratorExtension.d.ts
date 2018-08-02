declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace writer {
class W3CAddressingMetadataWSDLGeneratorExtension extends com.sun.xml.internal.ws.api.wsdl.writer.WSDLGeneratorExtension {
    public constructor()
    public start(arg0: com.sun.xml.internal.ws.api.wsdl.writer.WSDLGenExtnContext): void
    public addOperationInputExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
    public addOperationOutputExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
    public addOperationFaultExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod, arg2: com.sun.xml.internal.ws.api.model.CheckedException): void
    protected static getDefaultInputAction(arg0: com.sun.xml.internal.ws.api.model.JavaMethod): string
    protected static getDefaultOutputAction(arg0: com.sun.xml.internal.ws.api.model.JavaMethod): string
    protected static getDefaultFaultAction(arg0: com.sun.xml.internal.ws.api.model.JavaMethod, arg1: com.sun.xml.internal.ws.api.model.CheckedException): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}