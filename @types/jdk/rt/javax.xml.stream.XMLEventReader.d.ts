declare namespace javax {
    namespace xml {
        namespace stream {
interface XMLEventReader extends java.util.Iterator {
    nextEvent(): javax.xml.stream.events.XMLEvent
    hasNext(): boolean
    peek(): javax.xml.stream.events.XMLEvent
    getElementText(): string
    nextTag(): javax.xml.stream.events.XMLEvent
    getProperty(arg0: java.lang.String | string): java.lang.Object
    close(): void
}

        }
    }
}