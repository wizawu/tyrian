declare namespace javax {
    namespace xml {
        namespace bind {
            abstract class JAXBContext {
                public static readonly JAXB_CONTEXT_FACTORY: string
                protected constructor()
                public static newInstance(arg0: java.lang.String | string): javax.xml.bind.JAXBContext
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader): javax.xml.bind.JAXBContext
                public static newInstance(arg0: java.lang.String | string, arg1: java.lang.ClassLoader, arg2: java.util.Map<java.lang.String, any>): javax.xml.bind.JAXBContext
                public static newInstance(...arg0: java.lang.Class[]): javax.xml.bind.JAXBContext
                public static newInstance(arg0: java.lang.Class[], arg1: java.util.Map<java.lang.String, any>): javax.xml.bind.JAXBContext
                public abstract createUnmarshaller(): javax.xml.bind.Unmarshaller
                public abstract createMarshaller(): javax.xml.bind.Marshaller
                public abstract createValidator(): javax.xml.bind.Validator
                public createBinder<T>(arg0: java.lang.Class<T>): javax.xml.bind.Binder<T>
                public createBinder<T>(): javax.xml.bind.Binder<org.w3c.dom.Node>
                public createJAXBIntrospector<T>(): javax.xml.bind.JAXBIntrospector
                public generateSchema<T>(arg0: javax.xml.bind.SchemaOutputResolver | javax.xml.bind.SchemaOutputResolver$$Lambda): void
                public static class: java.lang.Class<any>
            }
        }
    }
}