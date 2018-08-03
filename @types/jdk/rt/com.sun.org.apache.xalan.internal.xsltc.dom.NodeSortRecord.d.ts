declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace dom {
                                abstract class NodeSortRecord {
                                    public static readonly COMPARE_STRING: int
                                    public static readonly COMPARE_NUMERIC: int
                                    public static readonly COMPARE_ASCENDING: int
                                    public static readonly COMPARE_DESCENDING: int
                                    protected _collator: java.text.Collator
                                    protected _collators: java.text.Collator[]
                                    protected _locale: java.util.Locale
                                    protected _collatorFactory: com.sun.org.apache.xalan.internal.xsltc.CollatorFactory
                                    protected _settings: com.sun.org.apache.xalan.internal.xsltc.dom.SortSettings
                                    public constructor(arg0: int)
                                    public constructor()
                                    public initialize(arg0: int, arg1: int, arg2: com.sun.org.apache.xalan.internal.xsltc.DOM, arg3: com.sun.org.apache.xalan.internal.xsltc.dom.SortSettings): void
                                    public getNode(): int
                                    public compareDocOrder(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.NodeSortRecord | com.sun.org.apache.xalan.internal.xsltc.dom.NodeSortRecord$$Lambda): int
                                    public compareTo(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.NodeSortRecord | com.sun.org.apache.xalan.internal.xsltc.dom.NodeSortRecord$$Lambda): int
                                    public getCollator(): java.text.Collator[]
                                    public abstract extractValueFromDOM(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: int, arg2: int, arg3: com.sun.org.apache.xalan.internal.xsltc.runtime.AbstractTranslet | com.sun.org.apache.xalan.internal.xsltc.runtime.AbstractTranslet$$Lambda, arg4: int): string
                                    public static class: java.lang.Class<any>
                                }
                                interface NodeSortRecord$$Lambda {
                                    (arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: int, arg2: int, arg3: com.sun.org.apache.xalan.internal.xsltc.runtime.AbstractTranslet | com.sun.org.apache.xalan.internal.xsltc.runtime.AbstractTranslet$$Lambda, arg4: int): string
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}