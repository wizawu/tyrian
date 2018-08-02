declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace events {
class StAXEventAllocatorBase implements javax.xml.stream.util.XMLEventAllocator {
    public constructor()
    public newInstance(): javax.xml.stream.util.XMLEventAllocator
    public allocate(arg0: javax.xml.stream.XMLStreamReader): javax.xml.stream.events.XMLEvent
    public allocate(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.stream.util.XMLEventConsumer | javax.xml.stream.util.XMLEventConsumer$$Lambda): void
    protected addAttributes(arg0: com.sun.xml.internal.fastinfoset.stax.events.StartElementEvent, arg1: javax.xml.stream.XMLStreamReader): void
    protected addNamespaces(arg0: com.sun.xml.internal.fastinfoset.stax.events.StartElementEvent, arg1: javax.xml.stream.XMLStreamReader): void
    protected addNamespaces(arg0: com.sun.xml.internal.fastinfoset.stax.events.EndElementEvent, arg1: javax.xml.stream.XMLStreamReader): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}