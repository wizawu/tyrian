declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace sax {
                        class SAXDocumentSerializer extends com.sun.xml.internal.fastinfoset.Encoder implements com.sun.xml.internal.org.jvnet.fastinfoset.sax.FastInfosetWriter {
                            protected _elementHasNamespaces: boolean
                            protected _charactersAsCDATA: boolean
                            protected constructor(arg0: boolean)
                            public constructor()
                            public reset(): void
                            public startDocument(): void
                            public endDocument(): void
                            public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                            public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public characters(arg0: char[], arg1: int, arg2: int): void
                            public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
                            public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                            public setDocumentLocator(arg0: org.xml.sax.Locator): void
                            public skippedEntity(arg0: java.lang.String | string): void
                            public comment(arg0: char[], arg1: int, arg2: int): void
                            public startCDATA(): void
                            public endCDATA(): void
                            public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            public endDTD(): void
                            public startEntity(arg0: java.lang.String | string): void
                            public endEntity(arg0: java.lang.String | string): void
                            public octets(arg0: java.lang.String | string, arg1: int, arg2: byte[], arg3: int, arg4: int): void
                            public object(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Object): void
                            public bytes(arg0: byte[], arg1: int, arg2: int): void
                            public shorts(arg0: short[], arg1: int, arg2: int): void
                            public ints(arg0: int[], arg1: int, arg2: int): void
                            public longs(arg0: long[], arg1: int, arg2: int): void
                            public booleans(arg0: boolean[], arg1: int, arg2: int): void
                            public floats(arg0: float[], arg1: int, arg2: int): void
                            public doubles(arg0: double[], arg1: int, arg2: int): void
                            public uuids(arg0: long[], arg1: int, arg2: int): void
                            public numericCharacters(arg0: char[], arg1: int, arg2: int): void
                            public dateTimeCharacters(arg0: char[], arg1: int, arg2: int): void
                            public alphabetCharacters(arg0: java.lang.String | string, arg1: char[], arg2: int, arg3: int): void
                            public characters(arg0: char[], arg1: int, arg2: int, arg3: boolean): void
                            protected countAttributes(arg0: org.xml.sax.Attributes): int
                            protected encodeAttributes(arg0: org.xml.sax.Attributes): void
                            protected encodeElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                            protected encodeAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}