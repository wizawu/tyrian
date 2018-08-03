declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            abstract class XMLStringFactory {
                                public constructor()
                                public abstract newstr(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.utils.XMLString
                                public abstract newstr(arg0: com.sun.org.apache.xml.internal.utils.FastStringBuffer, arg1: int, arg2: int): com.sun.org.apache.xml.internal.utils.XMLString
                                public abstract newstr(arg0: char[], arg1: int, arg2: int): com.sun.org.apache.xml.internal.utils.XMLString
                                public abstract emptystr(): com.sun.org.apache.xml.internal.utils.XMLString
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}