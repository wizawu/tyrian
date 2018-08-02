declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace parser {
class WSDLParserExtensionFacade extends com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension {
    public start(arg0: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtensionContext): void
    public serviceElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService, arg1: javax.xml.stream.XMLStreamReader): boolean
    public serviceAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService, arg1: javax.xml.stream.XMLStreamReader): void
    public portElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationInput(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationOutput(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationFault(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort, arg1: javax.xml.stream.XMLStreamReader): void
    public definitionsElements(arg0: javax.xml.stream.XMLStreamReader): boolean
    public bindingElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType, arg1: javax.xml.stream.XMLStreamReader): boolean
    public bindingAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType, arg1: javax.xml.stream.XMLStreamReader): void
    public portTypeElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType, arg1: javax.xml.stream.XMLStreamReader): void
    public portTypeOperationElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation, arg1: javax.xml.stream.XMLStreamReader): void
    public bindingOperationElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public bindingOperationAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): void
    public messageElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage, arg1: javax.xml.stream.XMLStreamReader): boolean
    public messageAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage, arg1: javax.xml.stream.XMLStreamReader): void
    public portTypeOperationInputElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLInput, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationInputAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLInput, arg1: javax.xml.stream.XMLStreamReader): void
    public portTypeOperationOutputElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOutput, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationOutputAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOutput, arg1: javax.xml.stream.XMLStreamReader): void
    public portTypeOperationFaultElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationFaultAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault, arg1: javax.xml.stream.XMLStreamReader): void
    public bindingOperationInputElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public bindingOperationInputAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): void
    public bindingOperationOutputElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public bindingOperationOutputAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): void
    public bindingOperationFaultElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundFault, arg1: javax.xml.stream.XMLStreamReader): boolean
    public bindingOperationFaultAttributes(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundFault, arg1: javax.xml.stream.XMLStreamReader): void
    public finished(arg0: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtensionContext): void
    public postFinished(arg0: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtensionContext): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}