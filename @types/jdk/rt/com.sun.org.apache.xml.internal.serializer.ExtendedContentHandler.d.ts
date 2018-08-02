declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
interface ExtendedContentHandler extends org.xml.sax.ContentHandler {
    NO_BAD_CHARS: int
    HTML_ATTREMPTY: int
    HTML_ATTRURL: int
    addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: boolean): void
    addAttributes(arg0: org.xml.sax.Attributes): void
    addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    characters(arg0: java.lang.String | string): void
    characters(arg0: org.w3c.dom.Node): void
    endElement(arg0: java.lang.String | string): void
    startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    startElement(arg0: java.lang.String | string): void
    namespaceAfterStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): boolean
    entityReference(arg0: java.lang.String | string): void
    getNamespaceMappings(): com.sun.org.apache.xml.internal.serializer.NamespaceMappings
    getPrefix(arg0: java.lang.String | string): string
    getNamespaceURI(arg0: java.lang.String | string, arg1: boolean): string
    getNamespaceURIFromPrefix(arg0: java.lang.String | string): string
    setSourceLocator(arg0: javax.xml.transform.SourceLocator): void
    addUniqueAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): void
    addXSLAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    addAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
}

                        }
                    }
                }
            }
        }
    }
}