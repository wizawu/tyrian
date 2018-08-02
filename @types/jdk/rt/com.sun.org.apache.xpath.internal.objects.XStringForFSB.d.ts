declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace objects {
class XStringForFSB extends com.sun.org.apache.xpath.internal.objects.XString {
    protected m_strCache: string
    protected m_hash: int
    public constructor(arg0: com.sun.org.apache.xml.internal.utils.FastStringBuffer, arg1: int, arg2: int)
    public fsb(): com.sun.org.apache.xml.internal.utils.FastStringBuffer
    public appendToFsb(arg0: com.sun.org.apache.xml.internal.utils.FastStringBuffer): void
    public hasString(): boolean
    public object(): java.lang.Object
    public str(): string
    public dispatchCharactersEvents(arg0: org.xml.sax.ContentHandler): void
    public dispatchAsComment(arg0: org.xml.sax.ext.LexicalHandler): void
    public length(): int
    public charAt(arg0: int): char
    public getChars(arg0: int, arg1: int, arg2: char[], arg3: int): void
    public equals(arg0: com.sun.org.apache.xml.internal.utils.XMLString): boolean
    public equals(arg0: com.sun.org.apache.xpath.internal.objects.XObject): boolean
    public equals(arg0: java.lang.String | string): boolean
    public equals(arg0: java.lang.Object): boolean
    public equalsIgnoreCase(arg0: java.lang.String | string): boolean
    public compareTo(arg0: com.sun.org.apache.xml.internal.utils.XMLString): int
    public compareToIgnoreCase(arg0: com.sun.org.apache.xml.internal.utils.XMLString): int
    public hashCode(): int
    public startsWith(arg0: com.sun.org.apache.xml.internal.utils.XMLString, arg1: int): boolean
    public startsWith(arg0: com.sun.org.apache.xml.internal.utils.XMLString): boolean
    public indexOf(arg0: int): int
    public indexOf(arg0: int, arg1: int): int
    public substring(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
    public substring(arg0: int, arg1: int): com.sun.org.apache.xml.internal.utils.XMLString
    public concat(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.utils.XMLString
    public trim(): com.sun.org.apache.xml.internal.utils.XMLString
    public fixWhiteSpace(arg0: boolean, arg1: boolean, arg2: boolean): com.sun.org.apache.xml.internal.utils.XMLString
    public toDouble(): double
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}