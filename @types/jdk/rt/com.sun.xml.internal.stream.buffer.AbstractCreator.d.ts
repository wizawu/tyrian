declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        class AbstractCreator extends com.sun.xml.internal.stream.buffer.AbstractCreatorProcessor {
                            protected _buffer: com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer
                            public constructor()
                            public setXMLStreamBuffer(arg0: com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer): void
                            public getXMLStreamBuffer(): com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer
                            protected createBuffer(): void
                            protected increaseTreeCount(): void
                            protected setBuffer(arg0: com.sun.xml.internal.stream.buffer.MutableXMLStreamBuffer): void
                            protected setHasInternedStrings(arg0: boolean): void
                            protected storeStructure(arg0: int): void
                            protected resizeStructure(): void
                            protected storeStructureString(arg0: java.lang.String | string): void
                            protected resizeStructureStrings(): void
                            protected storeContentString(arg0: java.lang.String | string): void
                            protected storeContentCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): void
                            protected resizeContentCharacters(): void
                            protected storeContentCharactersCopy(arg0: char[], arg1: int, arg2: int): void
                            protected peekAtContentObject(): java.lang.Object
                            protected storeContentObject(arg0: java.lang.Object): void
                            protected resizeContentObjects(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}