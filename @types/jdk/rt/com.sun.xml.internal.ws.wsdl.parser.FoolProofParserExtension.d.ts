declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace wsdl {
                        namespace parser {
class FoolProofParserExtension extends com.sun.xml.internal.ws.wsdl.parser.DelegatingParserExtension {
    public constructor(arg0: com.sun.xml.internal.ws.api.wsdl.parser.WSDLParserExtension)
    public serviceElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLService, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPort, arg1: javax.xml.stream.XMLStreamReader): boolean
    public definitionsElements(arg0: javax.xml.stream.XMLStreamReader): boolean
    public bindingElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundPortType, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLPortType, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public bindingOperationElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public messageElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLMessage, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationInputElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLInput, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationOutputElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLOutput, arg1: javax.xml.stream.XMLStreamReader): boolean
    public portTypeOperationFaultElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLFault, arg1: javax.xml.stream.XMLStreamReader): boolean
    public bindingOperationInputElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public bindingOperationOutputElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundOperation, arg1: javax.xml.stream.XMLStreamReader): boolean
    public bindingOperationFaultElements(arg0: com.sun.xml.internal.ws.api.model.wsdl.editable.EditableWSDLBoundFault, arg1: javax.xml.stream.XMLStreamReader): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}