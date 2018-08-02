declare namespace org {
    namespace xml {
        namespace sax {
            namespace helpers {
                class LocatorImpl implements org.xml.sax.Locator {
                    public constructor()
                    public constructor(arg0: org.xml.sax.Locator)
                    public getPublicId(): string
                    public getSystemId(): string
                    public getLineNumber(): int
                    public getColumnNumber(): int
                    public setPublicId(arg0: java.lang.String | string): void
                    public setSystemId(arg0: java.lang.String | string): void
                    public setLineNumber(arg0: int): void
                    public setColumnNumber(arg0: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}