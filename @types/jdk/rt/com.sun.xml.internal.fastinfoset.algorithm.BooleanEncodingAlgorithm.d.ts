declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace algorithm {
                        class BooleanEncodingAlgorithm extends com.sun.xml.internal.fastinfoset.algorithm.BuiltInEncodingAlgorithm {
                            public constructor()
                            public getPrimtiveLengthFromOctetLength(arg0: int): int
                            public getOctetLengthFromPrimitiveLength(arg0: int): int
                            public decodeFromBytes(arg0: byte[], arg1: int, arg2: int): java.lang.Object
                            public decodeFromInputStream(arg0: java.io.InputStream): java.lang.Object
                            public encodeToOutputStream(arg0: java.lang.Object, arg1: java.io.OutputStream): void
                            public convertFromCharacters(arg0: char[], arg1: int, arg2: int): java.lang.Object
                            public convertToCharacters(arg0: java.lang.Object, arg1: java.lang.StringBuffer): void
                            public getPrimtiveLengthFromOctetLength(arg0: int, arg1: int): int
                            public decodeFromBytesToBooleanArray(arg0: boolean[], arg1: int, arg2: int, arg3: byte[], arg4: int, arg5: int): void
                            public encodeToBytes(arg0: java.lang.Object, arg1: int, arg2: int, arg3: byte[], arg4: int): void
                            public encodeToBytesFromBooleanArray(arg0: boolean[], arg1: int, arg2: int, arg3: byte[], arg4: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}