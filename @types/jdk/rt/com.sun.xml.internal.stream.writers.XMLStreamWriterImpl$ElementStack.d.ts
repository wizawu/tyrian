declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace writers {
class XMLStreamWriterImpl$ElementStack {
    protected fElements: com.sun.xml.internal.stream.writers.XMLStreamWriterImpl$ElementState[]
    protected fDepth: short
    public constructor(arg0: com.sun.xml.internal.stream.writers.XMLStreamWriterImpl)
    public push(arg0: com.sun.xml.internal.stream.writers.XMLStreamWriterImpl$ElementState): com.sun.xml.internal.stream.writers.XMLStreamWriterImpl$ElementState
    public push(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: boolean): com.sun.xml.internal.stream.writers.XMLStreamWriterImpl$ElementState
    public pop(): com.sun.xml.internal.stream.writers.XMLStreamWriterImpl$ElementState
    public clear(): void
    public peek(): com.sun.xml.internal.stream.writers.XMLStreamWriterImpl$ElementState
    public empty(): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}