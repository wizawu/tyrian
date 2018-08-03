declare namespace javax {
    namespace xml {
        namespace validation {
            abstract class SchemaFactoryLoader {
                protected constructor()
                public abstract newFactory(arg0: java.lang.String | string): javax.xml.validation.SchemaFactory
                public static class: java.lang.Class<any>
            }
            interface SchemaFactoryLoader$$Lambda {
                (arg0: java.lang.String | string): javax.xml.validation.SchemaFactory
            }
        }
    }
}