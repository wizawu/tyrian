declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
                        class XMLEventAllocatorImpl implements javax.xml.stream.util.XMLEventAllocator {
                            public constructor()
                            public allocate(arg0: javax.xml.stream.XMLStreamReader): javax.xml.stream.events.XMLEvent
                            public allocate(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.stream.util.XMLEventConsumer | javax.xml.stream.util.XMLEventConsumer$$Lambda): void
                            public newInstance(): javax.xml.stream.util.XMLEventAllocator
                            protected getNextEvent(arg0: javax.xml.stream.XMLStreamReader): javax.xml.stream.events.XMLEvent
                            protected fillAttributes(arg0: com.sun.xml.internal.stream.events.StartElementEvent, arg1: javax.xml.stream.XMLStreamReader): void
                            protected fillNamespaceAttributes(arg0: com.sun.xml.internal.stream.events.StartElementEvent, arg1: javax.xml.stream.XMLStreamReader): void
                            protected fillNamespaceAttributes(arg0: com.sun.xml.internal.stream.events.EndElementEvent, arg1: javax.xml.stream.XMLStreamReader): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}