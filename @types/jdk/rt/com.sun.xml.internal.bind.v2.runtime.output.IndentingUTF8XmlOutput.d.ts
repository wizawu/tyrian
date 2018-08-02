declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace output {
                                class IndentingUTF8XmlOutput extends com.sun.xml.internal.bind.v2.runtime.output.UTF8XmlOutput {
                                    public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string, arg2: com.sun.xml.internal.bind.v2.runtime.output.Encoded[], arg3: com.sun.xml.internal.bind.marshaller.CharacterEscapeHandler | com.sun.xml.internal.bind.marshaller.CharacterEscapeHandler$$Lambda)
                                    public beginStartTag(arg0: int, arg1: java.lang.String | string): void
                                    public beginStartTag(arg0: com.sun.xml.internal.bind.v2.runtime.Name): void
                                    public endTag(arg0: com.sun.xml.internal.bind.v2.runtime.Name): void
                                    public endTag(arg0: int, arg1: java.lang.String | string): void
                                    public text(arg0: java.lang.String | string, arg1: boolean): void
                                    public text(arg0: com.sun.xml.internal.bind.v2.runtime.output.Pcdata, arg1: boolean): void
                                    public endDocument(arg0: boolean): void
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