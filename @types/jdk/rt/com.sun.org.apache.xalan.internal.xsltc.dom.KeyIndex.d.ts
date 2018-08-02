declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace dom {
                                class KeyIndex extends com.sun.org.apache.xml.internal.dtm.ref.DTMAxisIteratorBase {
                                    public constructor(arg0: int)
                                    public setRestartable(arg0: boolean): void
                                    public add(arg0: java.lang.String | string, arg1: int, arg2: int): void
                                    public merge(arg0: com.sun.org.apache.xalan.internal.xsltc.dom.KeyIndex): void
                                    public lookupId(arg0: java.lang.Object): void
                                    public getDOMNodeById(arg0: java.lang.String | string): com.sun.org.apache.xalan.internal.xsltc.util.IntegerArray
                                    public lookupKey(arg0: java.lang.Object): void
                                    public next(): int
                                    public containsID(arg0: int, arg1: java.lang.Object): int
                                    public containsKey(arg0: int, arg1: java.lang.Object): int
                                    public reset(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getLast(): int
                                    public getPosition(): int
                                    public setMark(): void
                                    public gotoMark(): void
                                    public setStartNode(arg0: int): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public getStartNode(): int
                                    public isReverse(): boolean
                                    public cloneIterator(): com.sun.org.apache.xml.internal.dtm.DTMAxisIterator
                                    public setDom(arg0: com.sun.org.apache.xalan.internal.xsltc.DOM, arg1: int): void
                                    public getKeyIndexIterator(arg0: java.lang.Object, arg1: boolean): com.sun.org.apache.xalan.internal.xsltc.dom.KeyIndex$KeyIndexIterator
                                    public getKeyIndexIterator(arg0: java.lang.String | string, arg1: boolean): com.sun.org.apache.xalan.internal.xsltc.dom.KeyIndex$KeyIndexIterator
                                    public getKeyIndexIterator(arg0: com.sun.org.apache.xml.internal.dtm.DTMAxisIterator, arg1: boolean): com.sun.org.apache.xalan.internal.xsltc.dom.KeyIndex$KeyIndexIterator
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