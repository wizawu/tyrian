declare namespace javax {
    namespace xml {
        namespace bind {
            namespace helpers {
                class ValidationEventLocatorImpl implements javax.xml.bind.ValidationEventLocator {
                    public constructor()
                    public constructor(arg0: org.xml.sax.Locator)
                    public constructor(arg0: org.xml.sax.SAXParseException)
                    public constructor(arg0: org.w3c.dom.Node)
                    public constructor(arg0: java.lang.Object)
                    public getURL(): java.net.URL
                    public setURL(arg0: java.net.URL): void
                    public getOffset(): int
                    public setOffset(arg0: int): void
                    public getLineNumber(): int
                    public setLineNumber(arg0: int): void
                    public getColumnNumber(): int
                    public setColumnNumber(arg0: int): void
                    public getObject(): java.lang.Object
                    public setObject(arg0: java.lang.Object): void
                    public getNode(): org.w3c.dom.Node
                    public setNode(arg0: org.w3c.dom.Node): void
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}