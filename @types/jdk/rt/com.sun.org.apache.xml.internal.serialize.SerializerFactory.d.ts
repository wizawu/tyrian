declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            abstract class SerializerFactory {
                                public static FactoriesProperty: string
                                public constructor()
                                public static registerSerializerFactory(arg0: com.sun.org.apache.xml.internal.serialize.SerializerFactory): void
                                public static getSerializerFactory(arg0: java.lang.String | string): com.sun.org.apache.xml.internal.serialize.SerializerFactory
                                protected getSupportedMethod(): string
                                public makeSerializer(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat): com.sun.org.apache.xml.internal.serialize.Serializer
                                public makeSerializer(arg0: java.io.Writer, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat): com.sun.org.apache.xml.internal.serialize.Serializer
                                public makeSerializer(arg0: java.io.OutputStream, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat): com.sun.org.apache.xml.internal.serialize.Serializer
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}