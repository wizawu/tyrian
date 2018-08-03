declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
                        abstract class DummyEvent implements javax.xml.stream.events.XMLEvent {
                            protected fLocation: javax.xml.stream.Location
                            public constructor()
                            public constructor(arg0: int)
                            public getEventType(): int
                            protected setEventType(arg0: int): void
                            public isStartElement(): boolean
                            public isEndElement(): boolean
                            public isEntityReference(): boolean
                            public isProcessingInstruction(): boolean
                            public isCharacterData(): boolean
                            public isStartDocument(): boolean
                            public isEndDocument(): boolean
                            public getLocation(): javax.xml.stream.Location
                            public asCharacters(): javax.xml.stream.events.Characters
                            public asEndElement(): javax.xml.stream.events.EndElement
                            public asStartElement(): javax.xml.stream.events.StartElement
                            public getSchemaType(): javax.xml.namespace.QName
                            public isAttribute(): boolean
                            public isCharacters(): boolean
                            public isNamespace(): boolean
                            public writeAsEncodedUnicode(arg0: java.io.Writer): void
                            protected abstract writeAsEncodedUnicodeEx(arg0: java.io.Writer): void
                            protected charEncode(arg0: java.io.Writer, arg1: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                        interface DummyEvent$$Lambda implements javax.xml.stream.events.XMLEvent {
                            (arg0: java.io.Writer): void
                        }
                    }
                }
            }
        }
    }
}