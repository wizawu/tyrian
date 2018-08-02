declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace streaming {
abstract class XMLStreamWriterFactory {
    public constructor()
    public doCreate(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.stream.XMLStreamWriter
    public doCreate(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): javax.xml.stream.XMLStreamWriter
    public doRecycle(arg0: javax.xml.stream.XMLStreamWriter): void
    public static recycle(arg0: javax.xml.stream.XMLStreamWriter): void
    public static get(): com.sun.xml.internal.ws.api.streaming.XMLStreamWriterFactory
    public static set(arg0: com.sun.xml.internal.ws.api.streaming.XMLStreamWriterFactory): void
    public static create(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.stream.XMLStreamWriter
    public static create(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): javax.xml.stream.XMLStreamWriter
    public static createXMLStreamWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): javax.xml.stream.XMLStreamWriter
    public static createXMLStreamWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string): javax.xml.stream.XMLStreamWriter
    public static createXMLStreamWriter(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string, arg2: boolean): javax.xml.stream.XMLStreamWriter
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}