declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace output {
                                class UTF8XmlOutput extends com.sun.xml.internal.bind.v2.runtime.output.XmlOutputAbstractImpl {
                                    protected out: java.io.OutputStream
                                    protected octetBuffer: byte[]
                                    protected octetBufferIndex: int
                                    protected closeStartTagPending: boolean
                                    public constructor(arg0: java.io.OutputStream, arg1: com.sun.xml.internal.bind.v2.runtime.output.Encoded[], arg2: com.sun.xml.internal.bind.marshaller.CharacterEscapeHandler | com.sun.xml.internal.bind.marshaller.CharacterEscapeHandler$$Lambda)
                                    public setHeader(arg0: java.lang.String | string): void
                                    public startDocument(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: boolean, arg2: int[], arg3: com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl): void
                                    public endDocument(arg0: boolean): void
                                    protected closeStartTag(): void
                                    public beginStartTag(arg0: int, arg1: java.lang.String | string): void
                                    public beginStartTag(arg0: com.sun.xml.internal.bind.v2.runtime.Name): void
                                    protected writeNsDecls(arg0: int): void
                                    protected writeNsDecl(arg0: int): void
                                    public attribute(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: java.lang.String | string): void
                                    public attribute(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public endStartTag(): void
                                    public endTag(arg0: com.sun.xml.internal.bind.v2.runtime.Name): void
                                    public endTag(arg0: int, arg1: java.lang.String | string): void
                                    public text(arg0: java.lang.String | string, arg1: boolean): void
                                    public text(arg0: com.sun.xml.internal.bind.v2.runtime.output.Pcdata, arg1: boolean): void
                                    public text(arg0: int): void
                                    public text(arg0: byte[], arg1: int): void
                                    public write(arg0: int): void
                                    protected write(arg0: byte[]): void
                                    protected write(arg0: byte[], arg1: int, arg2: int): void
                                    protected flushBuffer(): void
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