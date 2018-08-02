declare namespace javax {
    namespace jws {
        namespace soap {
            interface SOAPMessageHandler extends java.lang.annotation.Annotation {
                name(): string
                className(): string
                initParams(): javax.jws.soap.InitParam[]
                roles(): java.lang.String[]
                headers(): java.lang.String[]
            }
        }
    }
}