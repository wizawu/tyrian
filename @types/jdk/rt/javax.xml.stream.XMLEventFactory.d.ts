declare namespace javax {
    namespace xml {
        namespace stream {
abstract class XMLEventFactory {
    protected constructor()
    public static newInstance(): javax.xml.stream.XMLEventFactory
    public static newFactory(): javax.xml.stream.XMLEventFactory
    public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLEventFactory
    public static newFactory(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.stream.XMLEventFactory
    public setLocation(arg0: javax.xml.stream.Location): void
    public createAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): javax.xml.stream.events.Attribute
    public createAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.stream.events.Attribute
    public createAttribute(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string): javax.xml.stream.events.Attribute
    public createNamespace(arg0: java.lang.String | string): javax.xml.stream.events.Namespace
    public createNamespace(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.stream.events.Namespace
    public createStartElement(arg0: javax.xml.namespace.QName, arg1: java.util.Iterator, arg2: java.util.Iterator): javax.xml.stream.events.StartElement
    public createStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.stream.events.StartElement
    public createStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Iterator, arg4: java.util.Iterator): javax.xml.stream.events.StartElement
    public createStartElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Iterator, arg4: java.util.Iterator, arg5: javax.xml.namespace.NamespaceContext): javax.xml.stream.events.StartElement
    public createEndElement(arg0: javax.xml.namespace.QName, arg1: java.util.Iterator): javax.xml.stream.events.EndElement
    public createEndElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): javax.xml.stream.events.EndElement
    public createEndElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Iterator): javax.xml.stream.events.EndElement
    public createCharacters(arg0: java.lang.String | string): javax.xml.stream.events.Characters
    public createCData(arg0: java.lang.String | string): javax.xml.stream.events.Characters
    public createSpace(arg0: java.lang.String | string): javax.xml.stream.events.Characters
    public createIgnorableSpace(arg0: java.lang.String | string): javax.xml.stream.events.Characters
    public createStartDocument(): javax.xml.stream.events.StartDocument
    public createStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean): javax.xml.stream.events.StartDocument
    public createStartDocument(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.stream.events.StartDocument
    public createStartDocument(arg0: java.lang.String | string): javax.xml.stream.events.StartDocument
    public createEndDocument(): javax.xml.stream.events.EndDocument
    public createEntityReference(arg0: java.lang.String | string, arg1: javax.xml.stream.events.EntityDeclaration): javax.xml.stream.events.EntityReference
    public createComment(arg0: java.lang.String | string): javax.xml.stream.events.Comment
    public createProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.xml.stream.events.ProcessingInstruction
    public createDTD(arg0: java.lang.String | string): javax.xml.stream.events.DTD
    public static class: java.lang.Class<any>
}

        }
    }
}