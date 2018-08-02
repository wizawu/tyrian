declare namespace javax {
    namespace xml {
        namespace bind {
            abstract class Binder<XmlNode> {
                public constructor()
                public unmarshal(arg0: XmlNode): java.lang.Object
                public unmarshal<T>(arg0: XmlNode, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                public marshal(arg0: java.lang.Object, arg1: XmlNode): void
                public getXMLNode(arg0: java.lang.Object): XmlNode
                public getJAXBNode(arg0: XmlNode): java.lang.Object
                public updateXML(arg0: java.lang.Object): XmlNode
                public updateXML(arg0: java.lang.Object, arg1: XmlNode): XmlNode
                public updateJAXB(arg0: XmlNode): java.lang.Object
                public setSchema(arg0: javax.xml.validation.Schema): void
                public getSchema(): javax.xml.validation.Schema
                public setEventHandler(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
                public getEventHandler(): javax.xml.bind.ValidationEventHandler
                public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public getProperty(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}