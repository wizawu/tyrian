declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace org {
                    namespace jvnet {
                        namespace fastinfoset {
interface EncodingAlgorithm {
    decodeFromBytes(arg0: byte[], arg1: int, arg2: int): java.lang.Object
    decodeFromInputStream(arg0: java.io.InputStream): java.lang.Object
    encodeToOutputStream(arg0: java.lang.Object, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    convertFromCharacters(arg0: char[], arg1: int, arg2: int): java.lang.Object
    convertToCharacters(arg0: java.lang.Object, arg1: java.lang.StringBuffer): void
}

                        }
                    }
                }
            }
        }
    }
}