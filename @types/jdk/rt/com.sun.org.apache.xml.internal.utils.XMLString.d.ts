declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
interface XMLString {
    dispatchCharactersEvents(arg0: org.xml.sax.ContentHandler): void
    dispatchAsComment(arg0: org.xml.sax.ext.LexicalHandler): void
    fixWhiteSpace(arg0: boolean, arg1: boolean, arg2: boolean): com.sun.org.apache.xml.internal.utils.XMLString
    length(): int
    charAt(arg0: int): char
    getChars(arg0: int, arg1: int, arg2: char[], arg3: int): void
    equals(arg0: com.sun.org.apache.xml.internal.utils.XMLString): boolean
    equals(arg0: java.lang.String | string): boolean
    equals(arg0: java.lang.Object): boolean
    equalsIgnoreCase(arg0: java.lang.String | string): boolean
    compareTo(arg0: com.sun.org.apache.xml.internal.utils.XMLString): int
    compareToIgnoreCase(arg0: com.sun.org.apache.xml.internal.utils.XMLString): int
    startsWith(arg0: java.lang.String | string, arg1: int): boolean
    startsWith(arg0: com.sun.org.apache.xml.internal.utils.XMLString, arg1: int): boolean
    startsWith(arg0: java.lang.String | string): boolean
    startsWith(arg0: com.sun.org.apache.xml.internal.utils.XMLString): boolean
    endsWith(arg0: java.lang.String | string): boolean
    hashCode(): int
    indexOf(arg0: int): int
    indexOf(arg0: int, arg1: int): int
    lastIndexOf(arg0: int): int
    lastIndexOf(arg0: int, arg1: int): int
    indexOf(arg0: java.lang.String | string): int
    indexOf(arg0: com.sun.org.apache.xml.internal.utils.XMLString): int
    indexOf(arg0: java.lang.String | string, arg1: int): int
    lastIndexOf(arg0: java.lang.String | string): int
    lastIndexOf(arg0: java.lang.String | string, arg1: int): int
    substring(arg0: int): com.sun.org.apache.xml.internal.utils.XMLString
    substring(arg0: int, arg1: int): com.sun.org.apache.xml.internal.utils.XMLString
    concat(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.utils.XMLString
    toLowerCase(arg0: java.util.Locale): com.sun.org.apache.xml.internal.utils.XMLString
    toLowerCase(): com.sun.org.apache.xml.internal.utils.XMLString
    toUpperCase(arg0: java.util.Locale): com.sun.org.apache.xml.internal.utils.XMLString
    toUpperCase(): com.sun.org.apache.xml.internal.utils.XMLString
    trim(): com.sun.org.apache.xml.internal.utils.XMLString
    toString(): string
    hasString(): boolean
    toDouble(): double
}

                        }
                    }
                }
            }
        }
    }
}