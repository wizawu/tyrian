declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace soap {
                            namespace impl {
                                abstract class EnvelopeImpl extends com.sun.xml.internal.messaging.saaj.soap.impl.ElementImpl implements com.sun.xml.internal.messaging.saaj.soap.Envelope {
                                    protected header: com.sun.xml.internal.messaging.saaj.soap.impl.HeaderImpl
                                    protected body: com.sun.xml.internal.messaging.saaj.soap.impl.BodyImpl
                                    protected constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: javax.xml.soap.Name)
                                    protected constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: javax.xml.namespace.QName)
                                    protected constructor(arg0: com.sun.xml.internal.messaging.saaj.soap.SOAPDocumentImpl, arg1: com.sun.xml.internal.messaging.saaj.soap.name.NameImpl, arg2: boolean, arg3: boolean)
                                    protected getHeaderName(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    protected getBodyName(arg0: java.lang.String | string): com.sun.xml.internal.messaging.saaj.soap.name.NameImpl
                                    public addHeader(): javax.xml.soap.SOAPHeader
                                    public addHeader(arg0: java.lang.String | string): javax.xml.soap.SOAPHeader
                                    protected lookForHeader(): void
                                    public getHeader(): javax.xml.soap.SOAPHeader
                                    protected lookForBody(): void
                                    public addBody(): javax.xml.soap.SOAPBody
                                    public addBody(arg0: java.lang.String | string): javax.xml.soap.SOAPBody
                                    protected addElement(arg0: javax.xml.soap.Name): javax.xml.soap.SOAPElement
                                    protected addElement(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
                                    public getBody(): javax.xml.soap.SOAPBody
                                    public getContent(): javax.xml.transform.Source
                                    public createName(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.soap.Name
                                    public createName(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.soap.Name
                                    public createName(arg0: java.lang.String | string): javax.xml.soap.Name
                                    public setOmitXmlDecl(arg0: java.lang.String | string): void
                                    public setXmlDecl(arg0: java.lang.String | string): void
                                    public setCharsetEncoding(arg0: java.lang.String | string): void
                                    public output(arg0: java.io.OutputStream): void
                                    public output(arg0: java.io.OutputStream, arg1: boolean): void
                                    public setElementQName(arg0: javax.xml.namespace.QName): javax.xml.soap.SOAPElement
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