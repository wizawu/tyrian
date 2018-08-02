declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace algorithm {
                        class FloatEncodingAlgorithm extends com.sun.xml.internal.fastinfoset.algorithm.IEEE754FloatingPointEncodingAlgorithm {
                            public constructor()
                            public getPrimtiveLengthFromOctetLength(arg0: int): int
                            public getOctetLengthFromPrimitiveLength(arg0: int): int
                            public decodeFromBytes(arg0: byte[], arg1: int, arg2: int): java.lang.Object
                            public decodeFromInputStream(arg0: java.io.InputStream): java.lang.Object
                            public encodeToOutputStream(arg0: java.lang.Object, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public convertFromCharacters(arg0: char[], arg1: int, arg2: int): java.lang.Object
                            public convertToCharacters(arg0: java.lang.Object, arg1: java.lang.StringBuffer): void
                            public decodeFromBytesToFloatArray(arg0: float[], arg1: int, arg2: byte[], arg3: int, arg4: int): void
                            public decodeFromInputStreamToFloatArray(arg0: java.io.InputStream): float[]
                            public encodeToOutputStreamFromFloatArray(arg0: float[], arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public encodeToBytes(arg0: java.lang.Object, arg1: int, arg2: int, arg3: byte[], arg4: int): void
                            public encodeToBytesFromFloatArray(arg0: float[], arg1: int, arg2: int, arg3: byte[], arg4: int): void
                            public convertToCharactersFromFloatArray(arg0: float[], arg1: java.lang.StringBuffer): void
                            public generateArrayFromList(arg0: java.util.List): float[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}