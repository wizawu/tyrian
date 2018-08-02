declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace util {
                        class LocalNameQualifiedNamesMap extends com.sun.xml.internal.fastinfoset.util.KeyIntMap {
                            public constructor(arg0: int, arg1: float)
                            public constructor(arg0: int)
                            public constructor()
                            public clear(): void
                            public setReadOnlyMap(arg0: com.sun.xml.internal.fastinfoset.util.KeyIntMap, arg1: boolean): void
                            public setReadOnlyMap(arg0: com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap, arg1: boolean): void
                            public isQNameFromReadOnlyMap(arg0: com.sun.xml.internal.fastinfoset.QualifiedName): boolean
                            public getNextIndex(): int
                            public getIndex(): int
                            public obtainEntry(arg0: java.lang.String | string): com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap$Entry
                            public obtainDynamicEntry(arg0: java.lang.String | string): com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap$Entry
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}