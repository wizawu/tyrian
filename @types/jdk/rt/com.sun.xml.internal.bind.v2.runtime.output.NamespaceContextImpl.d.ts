declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace output {
                                class NamespaceContextImpl implements com.sun.xml.internal.bind.v2.runtime.NamespaceContext2 {
                                    public collectionMode: boolean
                                    public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer)
                                    public setPrefixMapper(arg0: com.sun.xml.internal.bind.marshaller.NamespacePrefixMapper | com.sun.xml.internal.bind.marshaller.NamespacePrefixMapper$$Lambda): void
                                    public getPrefixMapper(): com.sun.xml.internal.bind.marshaller.NamespacePrefixMapper
                                    public reset(): void
                                    public declareNsUri(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): int
                                    public force(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                                    public put(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                                    public getCurrent(): com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl$Element
                                    public getPrefixIndex(arg0: java.lang.String | string): int
                                    public getPrefix(arg0: int): string
                                    public getNamespaceURI(arg0: int): string
                                    public getNamespaceURI(arg0: java.lang.String | string): string
                                    public getPrefix(arg0: java.lang.String | string): string
                                    public getPrefixes(arg0: java.lang.String | string): java.util.Iterator<java.lang.String>
                                    public declareNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): string
                                    public count(): int
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}