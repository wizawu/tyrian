declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orb {
                        interface ParserAction {
                            getPropertyName(): string
                            isPrefix(): boolean
                            getFieldName(): string
                            apply(arg0: java.util.Properties): java.lang.Object
                        }
                    }
                }
            }
        }
    }
}