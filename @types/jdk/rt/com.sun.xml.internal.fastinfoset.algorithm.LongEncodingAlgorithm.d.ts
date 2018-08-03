declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace algorithm {
                        class LongEncodingAlgorithm extends com.sun.xml.internal.fastinfoset.algorithm.IntegerEncodingAlgorithm {
                            public constructor()
                            public getPrimtiveLengthFromOctetLength(arg0: int): int
                            public getOctetLengthFromPrimitiveLength(arg0: int): int
                            public decodeFromBytes(arg0: byte[], arg1: int, arg2: int): java.lang.Object
                            public decodeFromInputStream(arg0: java.io.InputStream): java.lang.Object
                            public encodeToOutputStream(arg0: java.lang.Object, arg1: java.io.OutputStream): void
                            public convertFromCharacters(arg0: char[], arg1: int, arg2: int): java.lang.Object
                            public convertToCharacters(arg0: java.lang.Object, arg1: java.lang.StringBuffer): void
                            public decodeFromBytesToLongArray(arg0: long[], arg1: int, arg2: byte[], arg3: int, arg4: int): void
                            public decodeFromInputStreamToIntArray(arg0: java.io.InputStream): long[]
                            public encodeToOutputStreamFromLongArray(arg0: long[], arg1: java.io.OutputStream): void
                            public encodeToBytes(arg0: java.lang.Object, arg1: int, arg2: int, arg3: byte[], arg4: int): void
                            public encodeToBytesFromLongArray(arg0: long[], arg1: int, arg2: int, arg3: byte[], arg4: int): void
                            public convertToCharactersFromLongArray(arg0: long[], arg1: java.lang.StringBuffer): void
                            public generateArrayFromList(arg0: java.util.List): long[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}