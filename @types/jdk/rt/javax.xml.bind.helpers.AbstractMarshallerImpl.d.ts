declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
                abstract class AbstractMarshallerImpl implements javax.xml.bind.Marshaller {
                    public constructor()
                    public marshal(arg0: java.lang.Object, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public marshal(arg0: java.lang.Object, arg1: java.io.File): void
                    public marshal(arg0: java.lang.Object, arg1: java.io.Writer | java.io.Writer$$Lambda): void
                    public marshal(arg0: java.lang.Object, arg1: org.xml.sax.ContentHandler): void
                    public marshal(arg0: java.lang.Object, arg1: org.w3c.dom.Node): void
                    public getNode(arg0: java.lang.Object): org.w3c.dom.Node
                    protected getEncoding(): string
                    protected setEncoding(arg0: java.lang.String | string): void
                    protected getSchemaLocation(): string
                    protected setSchemaLocation(arg0: java.lang.String | string): void
                    protected getNoNSSchemaLocation(): string
                    protected setNoNSSchemaLocation(arg0: java.lang.String | string): void
                    protected isFormattedOutput(): boolean
                    protected setFormattedOutput(arg0: boolean): void
                    protected isFragment(): boolean
                    protected setFragment(arg0: boolean): void
                    protected getJavaEncoding(arg0: java.lang.String | string): string
                    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                    public getEventHandler(): javax.xml.bind.ValidationEventHandler
                    public setEventHandler(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
                    public marshal(arg0: java.lang.Object, arg1: javax.xml.stream.XMLEventWriter): void
                    public marshal(arg0: java.lang.Object, arg1: javax.xml.stream.XMLStreamWriter): void
                    public setSchema(arg0: javax.xml.validation.Schema): void
                    public getSchema(): javax.xml.validation.Schema
                    public setAdapter(arg0: javax.xml.bind.annotation.adapters.XmlAdapter): void
                    public setAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>, arg1: A): void
                    public getAdapter<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: java.lang.Class<A>): A
                    public setAttachmentMarshaller<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: javax.xml.bind.attachment.AttachmentMarshaller): void
                    public getAttachmentMarshaller<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(): javax.xml.bind.attachment.AttachmentMarshaller
                    public setListener<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(arg0: javax.xml.bind.Marshaller$Listener): void
                    public getListener<A extends javax.xml.bind.annotation.adapters.XmlAdapter>(): javax.xml.bind.Marshaller$Listener
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}