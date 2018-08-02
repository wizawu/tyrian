declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    class XMLEventReaderImpl implements javax.xml.stream.XMLEventReader {
                        protected fXMLReader: javax.xml.stream.XMLStreamReader
                        protected fXMLEventAllocator: javax.xml.stream.util.XMLEventAllocator
                        public constructor(arg0: javax.xml.stream.XMLStreamReader)
                        public hasNext(): boolean
                        public nextEvent(): javax.xml.stream.events.XMLEvent
                        public remove(): void
                        public close(): void
                        public getElementText(): string
                        public getProperty(arg0: java.lang.String | string): java.lang.Object
                        public nextTag(): javax.xml.stream.events.XMLEvent
                        public next(): java.lang.Object
                        public peek(): javax.xml.stream.events.XMLEvent
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}