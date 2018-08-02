declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orb {
                        interface ParserData {
                            getPropertyName(): string
                            getOperation(): com.sun.corba.se.spi.orb.Operation
                            getFieldName(): string
                            getDefaultValue(): java.lang.Object
                            getTestValue(): java.lang.Object
                            addToParser(arg0: com.sun.corba.se.spi.orb.PropertyParser): void
                            addToProperties(arg0: java.util.Properties): void
                        }
                    }
                }
            }
        }
    }
}