declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace util {
                        class PrefixArray extends com.sun.xml.internal.fastinfoset.util.ValueArray {
                            public static readonly PREFIX_MAP_SIZE: int
                            public _array: java.lang.String[]
                            public _currentInScope: int[]
                            public _declarationId: int
                            public constructor(arg0: int, arg1: int)
                            public constructor()
                            public countNamespacePool(): int
                            public countPrefixPool(): int
                            public clear(): void
                            public clearCompletely(): void
                            public getArray(): java.lang.String[]
                            public setReadOnlyArray(arg0: com.sun.xml.internal.fastinfoset.util.ValueArray, arg1: boolean): void
                            public setReadOnlyArray(arg0: com.sun.xml.internal.fastinfoset.util.PrefixArray, arg1: boolean): void
                            public getCompleteArray(): java.lang.String[]
                            public get(arg0: int): string
                            public add(arg0: java.lang.String | string): int
                            protected resize(): void
                            public clearDeclarationIds(): void
                            public pushScope(arg0: int, arg1: int): void
                            public pushScopeWithPrefixEntry(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: int): void
                            public popScope(arg0: int): void
                            public popScopeWithPrefixEntry(arg0: int): void
                            public getNamespaceFromPrefix(arg0: java.lang.String | string): string
                            public getPrefixFromNamespace(arg0: java.lang.String | string): string
                            public getPrefixes(): java.util.Iterator
                            public getPrefixesFromNamespace(arg0: java.lang.String | string): java.util.Iterator
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}