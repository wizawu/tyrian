declare namespace javax {
  namespace xml {
    namespace stream {
      abstract class XMLEventFactory {
        static readonly JAXPFACTORYID: java.lang.String
        static readonly DEFAULIMPL: java.lang.String
        protected constructor()
        public static newDefaultFactory(): javax.xml.stream.XMLEventFactory
        public static newInstance(): javax.xml.stream.XMLEventFactory
        public static newFactory(): javax.xml.stream.XMLEventFactory
        public static newInstance(
          arg0: java.lang.String | string,
          arg1: java.lang.ClassLoader
        ): javax.xml.stream.XMLEventFactory
        public static newFactory(
          arg0: java.lang.String | string,
          arg1: java.lang.ClassLoader
        ): javax.xml.stream.XMLEventFactory
        public abstract setLocation(arg0: javax.xml.stream.Location): void
        public abstract createAttribute(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.lang.String | string
        ): javax.xml.stream.events.Attribute
        public abstract createAttribute(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string
        ): javax.xml.stream.events.Attribute
        public abstract createAttribute(
          arg0: javax.xml.namespace.QName,
          arg1: java.lang.String | string
        ): javax.xml.stream.events.Attribute
        public abstract createNamespace(arg0: java.lang.String | string): javax.xml.stream.events.Namespace
        public abstract createNamespace(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string
        ): javax.xml.stream.events.Namespace
        public abstract createStartElement(
          arg0: javax.xml.namespace.QName,
          arg1: java.util.Iterator<javax.xml.stream.events.Attribute>,
          arg2: java.util.Iterator<javax.xml.stream.events.Namespace>
        ): javax.xml.stream.events.StartElement
        public abstract createStartElement(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string
        ): javax.xml.stream.events.StartElement
        public abstract createStartElement(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.util.Iterator<javax.xml.stream.events.Attribute>,
          arg4: java.util.Iterator<javax.xml.stream.events.Namespace>
        ): javax.xml.stream.events.StartElement
        public abstract createStartElement(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.util.Iterator<javax.xml.stream.events.Attribute>,
          arg4: java.util.Iterator<javax.xml.stream.events.Namespace>,
          arg5: javax.xml.namespace.NamespaceContext
        ): javax.xml.stream.events.StartElement
        public abstract createEndElement(
          arg0: javax.xml.namespace.QName,
          arg1: java.util.Iterator<javax.xml.stream.events.Namespace>
        ): javax.xml.stream.events.EndElement
        public abstract createEndElement(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string
        ): javax.xml.stream.events.EndElement
        public abstract createEndElement(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string,
          arg3: java.util.Iterator<javax.xml.stream.events.Namespace>
        ): javax.xml.stream.events.EndElement
        public abstract createCharacters(arg0: java.lang.String | string): javax.xml.stream.events.Characters
        public abstract createCData(arg0: java.lang.String | string): javax.xml.stream.events.Characters
        public abstract createSpace(arg0: java.lang.String | string): javax.xml.stream.events.Characters
        public abstract createIgnorableSpace(arg0: java.lang.String | string): javax.xml.stream.events.Characters
        public abstract createStartDocument(): javax.xml.stream.events.StartDocument
        public abstract createStartDocument(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: boolean | java.lang.Boolean
        ): javax.xml.stream.events.StartDocument
        public abstract createStartDocument(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string
        ): javax.xml.stream.events.StartDocument
        public abstract createStartDocument(arg0: java.lang.String | string): javax.xml.stream.events.StartDocument
        public abstract createEndDocument(): javax.xml.stream.events.EndDocument
        public abstract createEntityReference(
          arg0: java.lang.String | string,
          arg1: javax.xml.stream.events.EntityDeclaration
        ): javax.xml.stream.events.EntityReference
        public abstract createComment(arg0: java.lang.String | string): javax.xml.stream.events.Comment
        public abstract createProcessingInstruction(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string
        ): javax.xml.stream.events.ProcessingInstruction
        public abstract createDTD(arg0: java.lang.String | string): javax.xml.stream.events.DTD
      }
    }
  }
}
