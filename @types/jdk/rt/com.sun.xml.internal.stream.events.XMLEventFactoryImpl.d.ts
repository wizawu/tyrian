declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace events {
                        class XMLEventFactoryImpl extends javax.xml.stream.XMLEventFactory {
                            public constructor()
                            public createAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.stream.events.Attribute
                            public createAttribute(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.stream.events.Attribute
                            public createAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): javax.xml.stream.events.Attribute
                            public createCData(arg0: java.lang.String | string): javax.xml.stream.events.Characters
                            public createCharacters(arg0: java.lang.String | string): javax.xml.stream.events.Characters
                            public createComment(arg0: java.lang.String | string): javax.xml.stream.events.Comment
                            public createDTD(arg0: java.lang.String | string): javax.xml.stream.events.DTD
                            public createEndDocument(): javax.xml.stream.events.EndDocument
                            public createEndElement(arg0: javax.xml.namespace.QName, arg1: java.util.Iterator): javax.xml.stream.events.EndElement
                            public createEndElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.stream.events.EndElement
                            public createEndElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Iterator): javax.xml.stream.events.EndElement
                            public createEntityReference(arg0: java.lang.String | string, arg1: javax.xml.stream.events.EntityDeclaration): javax.xml.stream.events.EntityReference
                            public createIgnorableSpace(arg0: java.lang.String | string): javax.xml.stream.events.Characters
                            public createNamespace(arg0: java.lang.String | string): javax.xml.stream.events.Namespace
                            public createNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.stream.events.Namespace
                            public createProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.stream.events.ProcessingInstruction
                            public createSpace(arg0: java.lang.String | string): javax.xml.stream.events.Characters
                            public createStartDocument(): javax.xml.stream.events.StartDocument
                            public createStartDocument(arg0: java.lang.String | string): javax.xml.stream.events.StartDocument
                            public createStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.stream.events.StartDocument
                            public createStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): javax.xml.stream.events.StartDocument
                            public createStartElement(arg0: javax.xml.namespace.QName, arg1: java.util.Iterator, arg2: java.util.Iterator): javax.xml.stream.events.StartElement
                            public createStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.stream.events.StartElement
                            public createStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Iterator, arg4: java.util.Iterator): javax.xml.stream.events.StartElement
                            public createStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Iterator, arg4: java.util.Iterator, arg5: javax.xml.namespace.NamespaceContext): javax.xml.stream.events.StartElement
                            public setLocation(arg0: javax.xml.stream.Location): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}