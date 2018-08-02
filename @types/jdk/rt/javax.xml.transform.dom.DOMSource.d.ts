declare namespace javax {
    namespace xml {
        namespace transform {
            namespace dom {
                class DOMSource implements javax.xml.transform.Source {
                    public static FEATURE: string
                    public constructor()
                    public constructor(arg0: org.w3c.dom.Node)
                    public constructor(arg0: org.w3c.dom.Node, arg1: java.lang.String | string)
                    public setNode(arg0: org.w3c.dom.Node): void
                    public getNode(): org.w3c.dom.Node
                    public setSystemId(arg0: java.lang.String | string): void
                    public getSystemId(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}