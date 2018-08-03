declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace output {
                                abstract class XmlOutputAbstractImpl implements com.sun.xml.internal.bind.v2.runtime.output.XmlOutput {
                                    protected nsUriIndex2prefixIndex: int[]
                                    protected nsContext: com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl
                                    protected serializer: com.sun.xml.internal.bind.v2.runtime.XMLSerializer
                                    public constructor()
                                    public startDocument(arg0: com.sun.xml.internal.bind.v2.runtime.XMLSerializer, arg1: boolean, arg2: int[], arg3: com.sun.xml.internal.bind.v2.runtime.output.NamespaceContextImpl): void
                                    public endDocument(arg0: boolean): void
                                    public beginStartTag(arg0: com.sun.xml.internal.bind.v2.runtime.Name): void
                                    public abstract beginStartTag(arg0: int, arg1: java.lang.String | string): void
                                    public attribute(arg0: com.sun.xml.internal.bind.v2.runtime.Name, arg1: java.lang.String | string): void
                                    public abstract attribute(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                    public abstract endStartTag(): void
                                    public endTag(arg0: com.sun.xml.internal.bind.v2.runtime.Name): void
                                    public abstract endTag(arg0: int, arg1: java.lang.String | string): void
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