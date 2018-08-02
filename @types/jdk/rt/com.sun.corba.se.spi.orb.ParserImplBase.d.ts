declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orb {
                        abstract class ParserImplBase {
                            protected makeParser(): com.sun.corba.se.spi.orb.PropertyParser
                            protected complete(): void
                            public constructor()
                            public init(arg0: com.sun.corba.se.spi.orb.DataCollector): void
                            protected setFields(arg0: java.util.Map): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}