declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace algorithm {
                        abstract class BuiltInEncodingAlgorithm implements com.sun.xml.internal.org.jvnet.fastinfoset.EncodingAlgorithm {
                            protected static readonly SPACE_PATTERN: java.util.regex.Pattern
                            public constructor()
                            public abstract getPrimtiveLengthFromOctetLength(arg0: int): int
                            public abstract getOctetLengthFromPrimitiveLength(arg0: int): int
                            public abstract encodeToBytes(arg0: java.lang.Object, arg1: int, arg2: int, arg3: byte[], arg4: int): void
                            public matchWhiteSpaceDelimnatedWords(arg0: java.nio.CharBuffer, arg1: com.sun.xml.internal.fastinfoset.algorithm.BuiltInEncodingAlgorithm$WordListener | com.sun.xml.internal.fastinfoset.algorithm.BuiltInEncodingAlgorithm$WordListener$$Lambda): void
                            public removeWhitespace(arg0: char[], arg1: int, arg2: int): java.lang.StringBuilder
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}