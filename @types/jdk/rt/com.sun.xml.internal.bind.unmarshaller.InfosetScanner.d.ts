declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace unmarshaller {
interface InfosetScanner<XmlNode> {
    scan(arg0: XmlNode): void
    setContentHandler(arg0: org.xml.sax.ContentHandler): void
    getContentHandler(): org.xml.sax.ContentHandler
    getCurrentElement(): XmlNode
    getLocator(): com.sun.xml.internal.bind.v2.runtime.unmarshaller.LocatorEx
}

                    }
                }
            }
        }
    }
}