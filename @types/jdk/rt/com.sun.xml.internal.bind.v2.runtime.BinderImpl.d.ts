declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class BinderImpl<XmlNode> extends javax.xml.bind.Binder<XmlNode> {
                                public marshal(arg0: java.lang.Object, arg1: XmlNode): void
                                public updateJAXB(arg0: XmlNode): java.lang.Object
                                public unmarshal(arg0: XmlNode): java.lang.Object
                                public unmarshal<T>(arg0: XmlNode, arg1: java.lang.Class<T>): javax.xml.bind.JAXBElement<T>
                                public setSchema<T>(arg0: javax.xml.validation.Schema): void
                                public getSchema<T>(): javax.xml.validation.Schema
                                public getXMLNode<T>(arg0: java.lang.Object): XmlNode
                                public getJAXBNode<T>(arg0: XmlNode): java.lang.Object
                                public updateXML<T>(arg0: java.lang.Object): XmlNode
                                public updateXML<T>(arg0: java.lang.Object, arg1: XmlNode): XmlNode
                                public setEventHandler<T>(arg0: javax.xml.bind.ValidationEventHandler | javax.xml.bind.ValidationEventHandler$$Lambda): void
                                public getEventHandler<T>(): javax.xml.bind.ValidationEventHandler
                                public getProperty<T>(arg0: java.lang.String | string): java.lang.Object
                                public setProperty<T>(arg0: java.lang.String | string, arg1: java.lang.Object): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}