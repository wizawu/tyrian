declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace output {
                                class NamespaceContextImpl$Element {
                                    public context: com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl
                                    public isRootElement(): boolean
                                    public push(): com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl$Element
                                    public pop(): com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl$Element
                                    public setTagName(arg0: int, arg1: java.lang.String | string, arg2: java.lang.Object): void
                                    public setTagName(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: java.lang.Object): void
                                    public startElement(arg0: com.sun.xml.internal.bind.v2.runtime.output.XmlOutput, arg1: java.lang.Object): void
                                    public endElement(arg0: com.sun.xml.internal.bind.v2.runtime.output.XmlOutput): void
                                    public count(): int
                                    public getPrefix(arg0: int): string
                                    public getNsUri(arg0: int): string
                                    public getBase(): int
                                    public getOuterPeer(): java.lang.Object
                                    public getInnerPeer(): java.lang.Object
                                    public getParent(): com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl$Element
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