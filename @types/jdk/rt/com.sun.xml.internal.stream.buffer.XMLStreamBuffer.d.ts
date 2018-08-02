declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        abstract class XMLStreamBuffer {
                            protected _inscopeNamespaces: java.util.Map<java.lang.String, java.lang.String>
                            protected _hasInternedStrings: boolean
                            protected _structure: com.sun.xml.internal.stream.buffer.FragmentedArray<byte[]>
                            protected _structurePtr: int
                            protected _structureStrings: com.sun.xml.internal.stream.buffer.FragmentedArray<java.lang.String[]>
                            protected _structureStringsPtr: int
                            protected _contentCharactersBuffer: com.sun.xml.internal.stream.buffer.FragmentedArray<char[]>
                            protected _contentCharactersBufferPtr: int
                            protected _contentObjects: com.sun.xml.internal.stream.buffer.FragmentedArray<java.lang.Object[]>
                            protected _contentObjectsPtr: int
                            protected treeCount: int
                            protected systemId: string
                            public constructor()
                            public isCreated(): boolean
                            public isFragment(): boolean
                            public isElementFragment(): boolean
                            public isForest(): boolean
                            public getSystemId(): string
                            public getInscopeNamespaces(): java.util.Map<java.lang.String, java.lang.String>
                            public hasInternedStrings(): boolean
                            public readAsXMLStreamReader(): com.sun.xml.internal.stream.buffer.stax.StreamReaderBufferProcessor
                            public writeToXMLStreamWriter(arg0: javax.xml.stream.XMLStreamWriter, arg1: boolean): void
                            public writeToXMLStreamWriter(arg0: javax.xml.stream.XMLStreamWriter): void
                            public readAsXMLReader(): com.sun.xml.internal.stream.buffer.sax.SAXBufferProcessor
                            public readAsXMLReader(arg0: boolean): com.sun.xml.internal.stream.buffer.sax.SAXBufferProcessor
                            public writeTo(arg0: org.xml.sax.ContentHandler, arg1: boolean): void
                            public writeTo(arg0: org.xml.sax.ContentHandler): void
                            public writeTo(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
                            public writeTo(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
                            public writeTo(arg0: org.w3c.dom.Node): org.w3c.dom.Node
                            public static createNewBufferFromXMLStreamReader(arg0: javax.xml.stream.XMLStreamReader): com.sun.xml.internal.stream.buffer.XMLStreamBuffer
                            public static createNewBufferFromXMLReader(arg0: org.xml.sax.XMLReader, arg1: java.io.InputStream): com.sun.xml.internal.stream.buffer.XMLStreamBuffer
                            public static createNewBufferFromXMLReader(arg0: org.xml.sax.XMLReader, arg1: java.io.InputStream, arg2: java.lang.String | string): com.sun.xml.internal.stream.buffer.XMLStreamBuffer
                            protected getStructure(): com.sun.xml.internal.stream.buffer.FragmentedArray<byte[]>
                            protected getStructurePtr(): int
                            protected getStructureStrings(): com.sun.xml.internal.stream.buffer.FragmentedArray<java.lang.String[]>
                            protected getStructureStringsPtr(): int
                            protected getContentCharactersBuffer(): com.sun.xml.internal.stream.buffer.FragmentedArray<char[]>
                            protected getContentCharactersBufferPtr(): int
                            protected getContentObjects(): com.sun.xml.internal.stream.buffer.FragmentedArray<java.lang.Object[]>
                            protected getContentObjectsPtr(): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}