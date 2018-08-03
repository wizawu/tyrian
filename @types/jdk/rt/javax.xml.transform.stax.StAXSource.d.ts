declare namespace javax {
    namespace xml {
        namespace transform {
            namespace stax {
                class StAXSource implements javax.xml.transform.Source {
                    public static readonly FEATURE: string
                    public constructor(arg0: javax.xml.stream.XMLEventReader)
                    public constructor(arg0: javax.xml.stream.XMLStreamReader)
                    public getXMLEventReader(): javax.xml.stream.XMLEventReader
                    public getXMLStreamReader(): javax.xml.stream.XMLStreamReader
                    public setSystemId(arg0: java.lang.String | string): void
                    public getSystemId(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}