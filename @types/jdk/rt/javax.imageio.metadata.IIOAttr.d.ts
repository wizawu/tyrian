declare namespace javax {
    namespace imageio {
        namespace metadata {
            class IIOAttr extends javax.imageio.metadata.IIOMetadataNode implements org.w3c.dom.Attr {
                public constructor(arg0: org.w3c.dom.Element, arg1: java.lang.String | string, arg2: java.lang.String | string)
                public getName(): string
                public getNodeName(): string
                public getNodeType(): short
                public getSpecified(): boolean
                public getValue(): string
                public getNodeValue(): string
                public setValue(arg0: java.lang.String | string): void
                public setNodeValue(arg0: java.lang.String | string): void
                public getOwnerElement(): org.w3c.dom.Element
                public setOwnerElement(arg0: org.w3c.dom.Element): void
                public isId(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}