declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    class EventFilterSupport extends javax.xml.stream.util.EventReaderDelegate {
                        public constructor(arg0: javax.xml.stream.XMLEventReader, arg1: javax.xml.stream.EventFilter | javax.xml.stream.EventFilter$$Lambda)
                        public next(): java.lang.Object
                        public hasNext(): boolean
                        public nextEvent(): javax.xml.stream.events.XMLEvent
                        public nextTag(): javax.xml.stream.events.XMLEvent
                        public peek(): javax.xml.stream.events.XMLEvent
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}