declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    interface ContentVisitor {
                        onStartDocument(): void
                        onEndDocument(): void
                        onEndTag(): void
                        onPcdata(arg0: java.lang.StringBuilder): void
                        onCdata(arg0: java.lang.StringBuilder): void
                        onStartTag(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.xml.internal.txw2.Attribute, arg3: com.sun.xml.internal.txw2.NamespaceDecl): void
                        onComment(arg0: java.lang.StringBuilder): void
                    }
                }
            }
        }
    }
}