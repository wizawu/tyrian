declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace util {
                        class CharArrayIntMap extends com.sun.xml.internal.fastinfoset.util.KeyIntMap {
                            protected _totalCharacterCount: int
                            public constructor(arg0: int, arg1: float)
                            public constructor(arg0: int)
                            public constructor()
                            public clear(): void
                            public setReadOnlyMap(arg0: com.sun.xml.internal.fastinfoset.util.KeyIntMap, arg1: boolean): void
                            public setReadOnlyMap(arg0: com.sun.xml.internal.fastinfoset.util.CharArrayIntMap, arg1: boolean): void
                            public get(arg0: char[], arg1: int, arg2: int): int
                            public obtainIndex(arg0: char[], arg1: int, arg2: int, arg3: boolean): int
                            public getTotalCharacterCount(): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}