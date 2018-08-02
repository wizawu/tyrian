declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace events {
class StAXEventReader implements javax.xml.stream.XMLEventReader {
    protected _streamReader: javax.xml.stream.XMLStreamReader
    protected _eventAllocator: javax.xml.stream.util.XMLEventAllocator
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
    public setAllocator(arg0: javax.xml.stream.util.XMLEventAllocator): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}