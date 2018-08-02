declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
class SOAPDocumentImpl extends com.sun.org.apache.xerces.internal.dom.DocumentImpl implements com.sun.xml.internal.messaging.saaj.soap.SOAPDocument {
    protected static log: java.util.logging.Logger
    public constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPPartImpl)
    public getSOAPPart(): com.sun.xml.internal.messaging.saaj.soap.SOAPPartImpl
    public getDocument(): com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl
    public getDoctype(): org.w3c.dom.DocumentType
    public getImplementation(): org.w3c.dom.DOMImplementation
    public getDocumentElement(): org.w3c.dom.Element
    protected doGetDocumentElement(): org.w3c.dom.Element
    public createElement(arg0: java.lang.String | string): org.w3c.dom.Element
    public createDocumentFragment(): org.w3c.dom.DocumentFragment
    public createTextNode(arg0: java.lang.String | string): org.w3c.dom.Text
    public createComment(arg0: java.lang.String | string): org.w3c.dom.Comment
    public createCDATASection(arg0: java.lang.String | string): org.w3c.dom.CDATASection
    public createProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.ProcessingInstruction
    public createAttribute(arg0: java.lang.String | string): org.w3c.dom.Attr
    public createEntityReference(arg0: java.lang.String | string): org.w3c.dom.EntityReference
    public getElementsByTagName(arg0: java.lang.String | string): org.w3c.dom.NodeList
    public importNode(arg0: org.w3c.dom.Node, arg1: boolean): org.w3c.dom.Node
    public createElementNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Element
    public createAttributeNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.Attr
    public getElementsByTagNameNS(arg0: java.lang.String | string, arg1: java.lang.String | string): org.w3c.dom.NodeList
    public getElementById(arg0: java.lang.String | string): org.w3c.dom.Element
    public cloneNode(arg0: boolean): org.w3c.dom.Node
    public cloneNode(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: boolean): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}