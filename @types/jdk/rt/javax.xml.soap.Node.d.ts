declare namespace javax {
    namespace xml {
        namespace soap {
interface Node extends org.w3c.dom.Node {
    getValue(): string
    setValue(arg0: java.lang.String | string): void
    setParentElement(arg0: javax.xml.soap.SOAPElement): void
    getParentElement(): javax.xml.soap.SOAPElement
    detachNode(): void
    recycleNode(): void
}

        }
    }
}