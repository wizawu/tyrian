declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace events {
                            class StAXFilteredEvent implements javax.xml.stream.XMLEventReader {
                                public constructor()
                                public constructor(arg0: javax.xml.stream.XMLEventReader, arg1: javax.xml.stream.EventFilter | javax.xml.stream.EventFilter$$Lambda)
                                public setEventReader(arg0: javax.xml.stream.XMLEventReader): void
                                public setFilter(arg0: javax.xml.stream.EventFilter | javax.xml.stream.EventFilter$$Lambda): void
                                public next(): java.lang.Object
                                public nextEvent(): javax.xml.stream.events.XMLEvent
                                public getElementText(): string
                                public nextTag(): javax.xml.stream.events.XMLEvent
                                public hasNext(): boolean
                                public remove(): void
                                public peek(): javax.xml.stream.events.XMLEvent
                                public close(): void
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}