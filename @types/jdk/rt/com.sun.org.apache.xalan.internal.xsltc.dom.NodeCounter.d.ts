declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace dom {
                                abstract class NodeCounter {
                                    public static readonly END: int
                                    protected _node: int
                                    protected _nodeType: int
                                    protected _value: double
                                    public readonly _document: com.sun.org.apache.xalan.internal.xsltc.DOM
                                    public readonly _iterator: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public readonly _translet: com.sun.org.apache.xalan.internal.xsltc.Translet
                                    protected _format: string
                                    protected _lang: string
                                    protected _letterValue: string
                                    protected _groupSep: string
                                    protected _groupSize: int
                                    protected _hasFrom: boolean
                                    protected constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.Translet, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM, arg2: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator)
                                    protected constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.Translet, arg1: com.sun.org.apache.xalan.internal.xsltc.DOM, arg2: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg3: boolean)
                                    public abstract setStartNode(arg0: int): com.sun.org.apache.xalan.internal.xsltc.dom.NodeCounter
                                    public setValue(arg0: double): com.sun.org.apache.xalan.internal.xsltc.dom.NodeCounter
                                    protected setFormatting(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
                                    public setDefaultFormatting(): com.sun.org.apache.xalan.internal.xsltc.dom.NodeCounter
                                    public abstract getCounter(): string
                                    public getCounter(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): string
                                    public matchesCount(arg0: int): boolean
                                    public matchesFrom(arg0: int): boolean
                                    protected formatNumbers(arg0: int): string
                                    protected formatNumbers(arg0: int[]): string
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