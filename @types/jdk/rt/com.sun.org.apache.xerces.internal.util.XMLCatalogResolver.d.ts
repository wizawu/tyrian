declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class XMLCatalogResolver implements com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver , org.xml.sax.ext.EntityResolver2 , org.w3c.dom.ls.LSResourceResolver {
    public constructor()
    public constructor(arg0: java.lang.String[])
    public constructor(arg0: java.lang.String[], arg1: boolean)
    public getCatalogList(): java.lang.String[]
    public setCatalogList(arg0: java.lang.String[]): void
    public clear(): void
    public getPreferPublic(): boolean
    public setPreferPublic(arg0: boolean): void
    public getUseLiteralSystemId(): boolean
    public setUseLiteralSystemId(arg0: boolean): void
    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
    public resolveEntity(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): org.xml.sax.InputSource
    public getExternalSubset(arg0: java.lang.String | string, arg1: java.lang.String | string): org.xml.sax.InputSource
    public resolveResource(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): org.w3c.dom.ls.LSInput
    public resolveEntity(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier): com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
    public resolveIdentifier(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier): string
    public resolveSystem(arg0: java.lang.String | string): string
    public resolvePublic(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public resolveURI(arg0: java.lang.String | string): string
    public static class: java.lang.Class<any>
}

class XMLCatalogResolver$$Lambda implements com.sun.org.apache.xerces.internal.xni.parser.XMLEntityResolver , org.xml.sax.ext.EntityResolver2 , org.w3c.dom.ls.LSResourceResolver {
    public constructor()
}

                        }
                    }
                }
            }
        }
    }
}