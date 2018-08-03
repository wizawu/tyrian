declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        abstract class Expression implements java.io.Serializable , com.sun.org.apache.xpath.internal.ExpressionNode , com.sun.org.apache.xpath.internal.XPathVisitable {
                            public constructor()
                            public canTraverseOutsideSubtree(): boolean
                            public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): com.sun.org.apache.xpath.internal.objects.XObject
                            public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int, arg2: com.sun.org.apache.xml.internal.dtm.DTM, arg3: int): com.sun.org.apache.xpath.internal.objects.XObject
                            public abstract execute(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xpath.internal.objects.XObject
                            public execute(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: boolean): com.sun.org.apache.xpath.internal.objects.XObject
                            public num(arg0: com.sun.org.apache.xpath.internal.XPathContext): double
                            public bool(arg0: com.sun.org.apache.xpath.internal.XPathContext): boolean
                            public xstr(arg0: com.sun.org.apache.xpath.internal.XPathContext): com.sun.org.apache.xml.internal.utils.XMLString
                            public isNodesetExpr(): boolean
                            public asNode(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
                            public asIterator(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMIterator
                            public asIteratorRaw(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: int): com.sun.org.apache.xml.internal.dtm.DTMIterator
                            public executeCharsToContentHandler(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: org.xml.sax.ContentHandler): void
                            public isStableNumber(): boolean
                            public abstract fixupVariables(arg0: java.util.Vector, arg1: int): void
                            public abstract deepEquals(arg0: com.sun.org.apache.xpath.internal.Expression): boolean
                            protected isSameClass(arg0: com.sun.org.apache.xpath.internal.Expression): boolean
                            public warn(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: java.lang.String | string, arg2: java.lang.Object[]): void
                            public assertion(arg0: boolean, arg1: java.lang.String | string): void
                            public error(arg0: com.sun.org.apache.xpath.internal.XPathContext, arg1: java.lang.String | string, arg2: java.lang.Object[]): void
                            public getExpressionOwner(): com.sun.org.apache.xpath.internal.ExpressionNode
                            public exprSetParent(arg0: com.sun.org.apache.xpath.internal.ExpressionNode): void
                            public exprGetParent(): com.sun.org.apache.xpath.internal.ExpressionNode
                            public exprAddChild(arg0: com.sun.org.apache.xpath.internal.ExpressionNode, arg1: int): void
                            public exprGetChild(arg0: int): com.sun.org.apache.xpath.internal.ExpressionNode
                            public exprGetNumChildren(): int
                            public getPublicId(): string
                            public getSystemId(): string
                            public getLineNumber(): int
                            public getColumnNumber(): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}