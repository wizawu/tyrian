declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    class StaxXMLInputSource {
                        public constructor(arg0: javax.xml.stream.XMLStreamReader)
                        public constructor(arg0: javax.xml.stream.XMLEventReader)
                        public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource)
                        public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource, arg1: boolean)
                        public getXMLStreamReader(): javax.xml.stream.XMLStreamReader
                        public getXMLEventReader(): javax.xml.stream.XMLEventReader
                        public getXMLInputSource(): com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
                        public hasXMLStreamOrXMLEventReader(): boolean
                        public hasResolver(): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}