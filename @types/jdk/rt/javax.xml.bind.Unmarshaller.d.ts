declare namespace javax {
    namespace xml {
        namespace bind {
interface Unmarshaller {
    unmarshal(arg0: java.io.File): java.lang.Object
    unmarshal(arg0: java.io.InputStream): java.lang.Object
    unmarshal(arg0: java.io.Reader): java.lang.Object
    unmarshal(arg0: java.net.URL): java.lang.Object
    unmarshal(arg0: org.xml.sax.InputSource): java.lang.Object
    unmarshal(arg0: org.w3c.dom.Node): java.lang.Object
    unmarshal<T>(arg0: org.w3c.dom.Node, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
    unmarshal(arg0: javax.xml.transform.Source): java.lang.Object
    unmarshal<T>(arg0: javax.xml.transform.Source, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
    unmarshal(arg0: javax.xml.stream.XMLStreamReader): java.lang.Object
    unmarshal<T>(arg0: javax.xml.stream.XMLStreamReader, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
    unmarshal(arg0: javax.xml.stream.XMLEventReader): java.lang.Object
    unmarshal<T>(arg0: javax.xml.stream.XMLEventReader, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
    getUnmarshallerHandler(): javax.xml.bind.UnmarshallerHandler
    setValidating(arg0: boolean): void
    isValidating(): boolean
    setEventHandler(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
    getEventHandler(): javax.xml.bind.ValidationEventHandler
    setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    getProperty(arg0: java.lang.String | string): java.lang.Object
    setSchema(arg0: javax.xml.validation.Schema): void
    getSchema(): javax.xml.validation.Schema
    setAdapter(arg0: javax.xml.bind.annotation.adapters.XmlAdapter): void
    setAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>, arg1: A): void
    getAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>): A
    setAttachmentUnmarshaller(arg0: javax.xml.bind.attachment.AttachmentUnmarshaller): void
    getAttachmentUnmarshaller(): javax.xml.bind.attachment.AttachmentUnmarshaller
    setListener(arg0: javax.xml.bind.Unmarshaller$Listener): void
    getListener(): javax.xml.bind.Unmarshaller$Listener
}

        }
    }
}