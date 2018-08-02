declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace algorithm {
                        class DoubleEncodingAlgorithm extends com.sun.xml.internal.fastinfoset.algorithm.IEEE754FloatingPointEncodingAlgorithm {
                            public constructor()
                            public getPrimtiveLengthFromOctetLength(arg0: int): int
                            public getOctetLengthFromPrimitiveLength(arg0: int): int
                            public decodeFromBytes(arg0: byte[], arg1: int, arg2: int): java.lang.Object
                            public decodeFromInputStream(arg0: java.io.InputStream): java.lang.Object
                            public encodeToOutputStream(arg0: java.lang.Object, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public convertFromCharacters(arg0: char[], arg1: int, arg2: int): java.lang.Object
                            public convertToCharacters(arg0: java.lang.Object, arg1: java.lang.StringBuffer): void
                            public decodeFromBytesToDoubleArray(arg0: double[], arg1: int, arg2: byte[], arg3: int, arg4: int): void
                            public decodeFromInputStreamToDoubleArray(arg0: java.io.InputStream): double[]
                            public encodeToOutputStreamFromDoubleArray(arg0: double[], arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public encodeToBytes(arg0: java.lang.Object, arg1: int, arg2: int, arg3: byte[], arg4: int): void
                            public encodeToBytesFromDoubleArray(arg0: double[], arg1: int, arg2: int, arg3: byte[], arg4: int): void
                            public convertToCharactersFromDoubleArray(arg0: double[], arg1: java.lang.StringBuffer): void
                            public generateArrayFromList(arg0: java.util.List): double[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}