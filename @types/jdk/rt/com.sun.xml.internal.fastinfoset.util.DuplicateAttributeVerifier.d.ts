declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace util {
                        class DuplicateAttributeVerifier {
                            public static MAP_SIZE: int
                            public _currentIteration: int
                            public _poolHead: com.sun.xml.internal.fastinfoset.util.DuplicateAttributeVerifier$Entry
                            public _poolCurrent: com.sun.xml.internal.fastinfoset.util.DuplicateAttributeVerifier$Entry
                            public constructor()
                            public clear(): void
                            public reset(): void
                            public checkForDuplicateAttribute(arg0: int, arg1: int): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}