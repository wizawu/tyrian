declare namespace org {
    namespace w3c {
        namespace dom {
            interface Attr extends org.w3c.dom.Node {
                getName(): string
                getSpecified(): boolean
                getValue(): string
                setValue(arg0: java.lang.String | string): void
                getOwnerElement(): org.w3c.dom.Element
                getSchemaTypeInfo(): org.w3c.dom.TypeInfo
                isId(): boolean
            }
        }
    }
}