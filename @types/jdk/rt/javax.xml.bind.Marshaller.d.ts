declare namespace javax {
    namespace xml {
        namespace bind {
            interface Marshaller {
                JAXB_ENCODING: string
                JAXB_FORMATTED_OUTPUT: string
                JAXB_SCHEMA_LOCATION: string
                JAXB_NO_NAMESPACE_SCHEMA_LOCATION: string
                JAXB_FRAGMENT: string
                marshal(arg0: java.lang.Object, arg1: javax.xml.transform.Result): void
                marshal(arg0: java.lang.Object, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                marshal(arg0: java.lang.Object, arg1: java.io.File): void
                marshal(arg0: java.lang.Object, arg1: java.io.Writer | java.io.Writer$$Lambda): void
                marshal(arg0: java.lang.Object, arg1: org.xml.sax.ContentHandler): void
                marshal(arg0: java.lang.Object, arg1: org.w3c.dom.Node): void
                marshal(arg0: java.lang.Object, arg1: javax.xml.stream.XMLStreamWriter): void
                marshal(arg0: java.lang.Object, arg1: javax.xml.stream.XMLEventWriter): void
                getNode(arg0: java.lang.Object): org.w3c.dom.Node
                setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                getProperty(arg0: java.lang.String | string): java.lang.Object
                setEventHandler(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
                getEventHandler(): javax.xml.bind.ValidationEventHandler
                setAdapter(arg0: javax.xml.bind.annotation.adapters.XmlAdapter): void
                setAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>, arg1: A): void
                getAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>): A
                setAttachmentMarshaller(arg0: javax.xml.bind.attachment.AttachmentMarshaller): void
                getAttachmentMarshaller(): javax.xml.bind.attachment.AttachmentMarshaller
                setSchema(arg0: javax.xml.validation.Schema): void
                getSchema(): javax.xml.validation.Schema
                setListener(arg0: javax.xml.bind.Marshaller$Listener): void
                getListener(): javax.xml.bind.Marshaller$Listener
            }
        }
    }
}