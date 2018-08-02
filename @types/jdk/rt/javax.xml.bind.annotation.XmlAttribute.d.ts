declare namespace javax {
    namespace xml {
        namespace bind {
            namespace annotation {
                interface XmlAttribute extends java.lang.annotation.Annotation {
                    name(): string
                    required(): boolean
                    namespace(): string
                }
            }
        }
    }
}