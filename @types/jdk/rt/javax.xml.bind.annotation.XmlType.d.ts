declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                interface XmlType extends java.lang.annotation.Annotation {
                    name(): string
                    propOrder(): java.lang.String[]
                    namespace(): string
                    factoryClass(): java.lang.Class
                    factoryMethod(): string
                }
            }
        }
    }
}