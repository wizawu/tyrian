declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
class W3CDomHandler implements javax.xml.bind.annotation.DomHandler<org.w3c.dom.Element, javax.xml.transform.dom.DOMResult> {
    public constructor()
    public constructor(arg0: javax.xml.parsers.DocumentBuilder)
    public getBuilder(): javax.xml.parsers.DocumentBuilder
    public setBuilder(arg0: javax.xml.parsers.DocumentBuilder): void
    public createUnmarshaller(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): javax.xml.transform.dom.DOMResult
    public getElement(arg0: javax.xml.transform.dom.DOMResult): org.w3c.dom.Element
    public marshal(arg0: org.w3c.dom.Element, arg1: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): javax.xml.transform.Source
    public marshal(arg0: java.lang.Object, arg1: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): javax.xml.transform.Source
    public getElement(arg0: javax.xml.transform.Result): java.lang.Object
    public createUnmarshaller(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): javax.xml.transform.Result
    public static class: java.lang.Class<any>
}

            }
        }
    }
}