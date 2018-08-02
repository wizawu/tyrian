declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace objects {
                            class XString extends com.sun.org.apache.xpath.internal.objects.XObject implements com.sun.org.apache.xml.internal.utils.XMLString {
                                public static EMPTYSTRING: com.sun.org.apache.xpath.internal.objects.XString
                                protected constructor(arg0: java.lang.Object)
                                public constructor(arg0: java.lang.String | string)
                                public getType(): int
                                public getTypeString(): string
                                public hasString(): boolean
                                public num(): double
                                public toDouble(): double
                                public bool(): boolean
                                public xstr(): com.sun.org.apache.xml.internal.utils.XMLString
                                public str(): string
                                public rtf(arg0: com.sun.org.apache.xpath.internal.XPathContext): int
                                public dispatchCharactersEvents(arg0: org.xml.sax.ContentHandler): void
                                public dispatchAsComment(arg0: org.xml.sax.ext.LexicalHandler): void
                                public length(): int
                                public charAt(arg0: int): char
                                public getChars(arg0: int, arg1: int, arg2: char[], arg3: int): void
                                public equals(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
                                public equals(arg0: java.lang.String | string): boolean
                                public equals(arg0: com.sun.org.apache.xml.internal.utils.XMLString): boolean
                                public equals(arg0: java.lang.Object): boolean
                                public equalsIgnoreCase(arg0: java.lang.String | string): boolean
                                public compareTo(arg0: com.sun.org.apache.xml.internal.utils.XMLString): int
                                public compareToIgnoreCase(arg0: com.sun.org.apache.xml.internal.utils.XMLString): int
                                public startsWith(arg0: java.lang.String | string, arg1: int): boolean
                                public startsWith(arg0: java.lang.String | string): boolean
                                public startsWith(arg0: com.sun.org.apache.xml.internal.utils.XMLString, arg1: int): boolean
                                public startsWith(arg0: com.sun.org.apache.xml.internal.utils.XMLString): boolean
                                public endsWith(arg0: java.lang.String | string): boolean
                                public hashCode(): int
                                public indexOf(arg0: int): int
                                public indexOf(arg0: int, arg1: int): int
                                public lastIndexOf(arg0: int): int
                                public lastIndexOf(arg0: int, arg1: int): int
                                public indexOf(arg0: java.lang.String | string): int
                                public indexOf(arg0: com.sun.org.apache.xml.internal.utils.XMLString): int
                                public indexOf(arg0: java.lang.String | string, arg1: int): int
                                public lastIndexOf(arg0: java.lang.String | string): int
                                public lastIndexOf(arg0: java.lang.String | string, arg1: int): int
                                public substring(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
                                public substring(arg0: int, arg1: int): com.sun.org.apache.xml.internal.utils.XMLString
                                public concat(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.utils.XMLString
                                public toLowerCase(arg0: java.util.Locale): com.sun.org.apache.xml.internal.utils.XMLString
                                public toLowerCase(): com.sun.org.apache.xml.internal.utils.XMLString
                                public toUpperCase(arg0: java.util.Locale): com.sun.org.apache.xml.internal.utils.XMLString
                                public toUpperCase(): com.sun.org.apache.xml.internal.utils.XMLString
                                public trim(): com.sun.org.apache.xml.internal.utils.XMLString
                                public fixWhiteSpace(arg0: boolean, arg1: boolean, arg2: boolean): com.sun.org.apache.xml.internal.utils.XMLString
                                public callVisitors(arg0: com.sun.org.apache.xpath.internal.ExpressionOwner, arg1: com.sun.org.apache.xpath.internal.XPathVisitor): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}