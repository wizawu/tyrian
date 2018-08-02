declare namespace javax {
    namespace xml {
        namespace ws {
            namespace soap {
                interface Addressing extends java.lang.annotation.Annotation {
                    enabled(): boolean
                    required(): boolean
                    responses(): javax.xml.ws.soap.AddressingFeature$Responses
                }
            }
        }
    }
}