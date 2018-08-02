declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace wsdl {
                            namespace writer {
                                abstract class WSDLGeneratorExtension {
                                    public constructor()
                                    public start(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.SEIModel, arg2: com.sun.xml.internal.ws.api.WSBinding, arg3: com.sun.xml.internal.ws.api.server.Container): void
                                    public end(arg0: com.sun.xml.internal.ws.api.wsdl.writer.WSDLGenExtnContext): void
                                    public start(arg0: com.sun.xml.internal.ws.api.wsdl.writer.WSDLGenExtnContext): void
                                    public addDefinitionsExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter): void
                                    public addServiceExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter): void
                                    public addPortExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter): void
                                    public addPortTypeExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter): void
                                    public addBindingExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter): void
                                    public addOperationExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                    public addBindingOperationExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                    public addInputMessageExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                    public addOutputMessageExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                    public addOperationInputExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                    public addOperationOutputExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                    public addBindingOperationInputExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                    public addBindingOperationOutputExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod): void
                                    public addBindingOperationFaultExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod, arg2: com.sun.xml.internal.ws.api.model.CheckedException): void
                                    public addFaultMessageExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod, arg2: com.sun.xml.internal.ws.api.model.CheckedException): void
                                    public addOperationFaultExtension(arg0: com.sun.xml.internal.txw2.TypedXmlWriter, arg1: com.sun.xml.internal.ws.api.model.JavaMethod, arg2: com.sun.xml.internal.ws.api.model.CheckedException): void
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