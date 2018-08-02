declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace xml {
                            class XMLStreamReaderToXMLStreamWriter {
                                protected in: javax.xml.stream.XMLStreamReader
                                protected out: javax.xml.stream.XMLStreamWriter
                                public constructor()
                                public bridge(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.stream.XMLStreamWriter): void
                                protected handlePI(): void
                                protected handleCharacters(): void
                                protected handleEndElement(): void
                                protected handleStartElement(): void
                                protected handleAttribute(arg0: int): void
                                protected handleDTD(): void
                                protected handleComment(): void
                                protected handleEntityReference(): void
                                protected handleSpace(): void
                                protected handleCDATA(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}