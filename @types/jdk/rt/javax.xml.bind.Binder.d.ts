declare namespace javax {
    namespace xml {
        namespace bind {
            abstract class Binder<XmlNode> {
                public constructor()
                public abstract unmarshal(arg0: XmlNode): java.lang.Object
                public abstract unmarshal<T>(arg0: XmlNode, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                public abstract marshal<T>(arg0: java.lang.Object, arg1: XmlNode): void
                public abstract getXMLNode<T>(arg0: java.lang.Object): XmlNode
                public abstract getJAXBNode<T>(arg0: XmlNode): java.lang.Object
                public abstract updateXML<T>(arg0: java.lang.Object): XmlNode
                public abstract updateXML<T>(arg0: java.lang.Object, arg1: XmlNode): XmlNode
                public abstract updateJAXB<T>(arg0: XmlNode): java.lang.Object
                public abstract setSchema<T>(arg0: javax.xml.validation.Schema): void
                public abstract getSchema<T>(): javax.xml.validation.Schema
                public abstract setEventHandler<T>(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
                public abstract getEventHandler<T>(): javax.xml.bind.ValidationEventHandler
                public abstract setProperty<T>(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public abstract getProperty<T>(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}