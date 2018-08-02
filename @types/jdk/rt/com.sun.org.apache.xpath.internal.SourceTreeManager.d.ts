declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
class SourceTreeManager {
    public constructor()
    public reset(): void
    public setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
    public getURIResolver(): javax.xml.transform.URIResolver
    public findURIFromDoc(arg0: int): string
    public resolveURI(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.xml.transform.SourceLocator): javax.xml.transform.Source
    public removeDocumentFromCache(arg0: int): void
    public putDocumentInCache(arg0: int, arg1: javax.xml.transform.Source): void
    public getNode(arg0: javax.xml.transform.Source): int
    public getSourceTree(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.xml.transform.SourceLocator, arg3: com.sun.org.apache.xpath.internal.XPathContext): int
    public getSourceTree(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.SourceLocator, arg2: com.sun.org.apache.xpath.internal.XPathContext): int
    public parseToNode(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.SourceLocator, arg2: com.sun.org.apache.xpath.internal.XPathContext): int
    public static getXMLReader(arg0: javax.xml.transform.Source, arg1: javax.xml.transform.SourceLocator): org.xml.sax.XMLReader
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}