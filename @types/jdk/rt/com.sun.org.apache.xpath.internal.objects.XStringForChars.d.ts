declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace objects {
class XStringForChars extends com.sun.org.apache.xpath.internal.objects.XString {
    protected m_strCache: string
    public constructor(arg0: char[], arg1: int, arg2: int)
    public fsb(): com.sun.org.apache.xml.internal.utils.FastStringBuffer
    public appendToFsb(arg0: com.sun.org.apache.xml.internal.utils.FastStringBuffer): void
    public hasString(): boolean
    public str(): string
    public object(): java.lang.Object
    public dispatchCharactersEvents(arg0: org.xml.sax.ContentHandler): void
    public dispatchAsComment(arg0: org.xml.sax.ext.LexicalHandler): void
    public length(): int
    public charAt(arg0: int): char
    public getChars(arg0: int, arg1: int, arg2: char[], arg3: int): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}