declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace fastinfoset {
                            namespace sax {
                                namespace helpers {
                                    class FastInfosetDefaultHandler extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler , com.sun.xml.internal.org.jvnet.fastinfoset.sax.EncodingAlgorithmContentHandler , com.sun.xml.internal.org.jvnet.fastinfoset.sax.PrimitiveTypeContentHandler {
                                        public constructor()
                                        public comment(arg0: char[], arg1: int, arg2: int): void
                                        public startCDATA(): void
                                        public endCDATA(): void
                                        public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                        public endDTD(): void
                                        public startEntity(arg0: java.lang.String | string): void
                                        public endEntity(arg0: java.lang.String | string): void
                                        public octets(arg0: java.lang.String | string, arg1: int, arg2: byte[], arg3: int, arg4: int): void
                                        public object(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Object): void
                                        public booleans(arg0: boolean[], arg1: int, arg2: int): void
                                        public bytes(arg0: byte[], arg1: int, arg2: int): void
                                        public shorts(arg0: short[], arg1: int, arg2: int): void
                                        public ints(arg0: int[], arg1: int, arg2: int): void
                                        public longs(arg0: long[], arg1: int, arg2: int): void
                                        public floats(arg0: float[], arg1: int, arg2: int): void
                                        public doubles(arg0: double[], arg1: int, arg2: int): void
                                        public uuids(arg0: long[], arg1: int, arg2: int): void
                                        public static class: java.lang.Class<any>
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}