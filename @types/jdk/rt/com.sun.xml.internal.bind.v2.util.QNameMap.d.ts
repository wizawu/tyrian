declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace util {
                            class QNameMap<V> {
                                public constructor()
                                public put(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: V): void
                                public put(arg0: javax.xml.namespace.QName, arg1: V): void
                                public put(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: V): void
                                public get(arg0: java.lang.String | string, arg1: java.lang.String | string): V
                                public get(arg0: javax.xml.namespace.QName): V
                                public size(): int
                                public putAll(arg0: com.sun.xml.internal.bind.v2.util.QNameMap<V>): com.sun.xml.internal.bind.v2.util.QNameMap<V>
                                public getOne(): com.sun.xml.internal.bind.v2.util.QNameMap$Entry<V>
                                public keySet(): java.util.Collection<javax.xml.namespace.QName>
                                public containsKey(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                                public isEmpty(): boolean
                                public entrySet(): java.util.Set<com.sun.xml.internal.bind.v2.util.QNameMap$Entry<V>>
                                public toString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}