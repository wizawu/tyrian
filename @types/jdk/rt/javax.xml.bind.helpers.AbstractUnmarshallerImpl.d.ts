declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
abstract class AbstractUnmarshallerImpl implements javax.xml.bind.Unmarshaller {
    protected validating: boolean
    public constructor()
    protected getXMLReader(): org.xml.sax.XMLReader
    public unmarshal(arg0: javax.xml.transform.Source): java.lang.Object
    protected unmarshal(arg0: org.xml.sax.XMLReader, arg1: org.xml.sax.InputSource): java.lang.Object
    public unmarshal(arg0: org.xml.sax.InputSource): java.lang.Object
    public unmarshal(arg0: java.net.URL): java.lang.Object
    public unmarshal(arg0: java.io.File): java.lang.Object
    public unmarshal(arg0: java.io.InputStream): java.lang.Object
    public unmarshal(arg0: java.io.Reader): java.lang.Object
    public isValidating(): boolean
    public setEventHandler(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
    public setValidating(arg0: boolean): void
    public getEventHandler(): javax.xml.bind.ValidationEventHandler
    protected createUnmarshalException(arg0: org.xml.sax.SAXException): javax.xml.bind.UnmarshalException
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public unmarshal(arg0: javax.xml.stream.XMLEventReader): java.lang.Object
    public unmarshal(arg0: javax.xml.stream.XMLStreamReader): java.lang.Object
    public unmarshal<T>(arg0: org.w3c.dom.Node, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
    public unmarshal<T>(arg0: javax.xml.transform.Source, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
    public unmarshal<T>(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
    public unmarshal<T>(arg0: javax.xml.stream.XMLEventReader, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
    public setSchema<T>(arg0: javax.xml.validation.Schema): void
    public getSchema<T>(): javax.xml.validation.Schema
    public setAdapter<T>(arg0: javax.xml.bind.annotation.adapters.XmlAdapter): void
    public setAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>, arg1: A): void
    public getAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>): A
    public setAttachmentUnmarshaller<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: javax.xml.bind.attachment.AttachmentUnmarshaller): void
    public getAttachmentUnmarshaller<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(): javax.xml.bind.attachment.AttachmentUnmarshaller
    public setListener<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: javax.xml.bind.Unmarshaller$Listener): void
    public getListener<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(): javax.xml.bind.Unmarshaller$Listener
    public static class: java.lang.Class<any>
}

            }
        }
    }
}