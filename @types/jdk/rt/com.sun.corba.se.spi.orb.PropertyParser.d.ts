declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orb {
                        class PropertyParser {
                            public constructor()
                            public add(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda, arg2: java.lang.String | string): com.sun.corba.se.spi.orb.PropertyParser
                            public addPrefix(arg0: java.lang.String | string, arg1: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda, arg2: java.lang.String | string, arg3: java.lang.Class): com.sun.corba.se.spi.orb.PropertyParser
                            public parse(arg0: java.util.Properties): java.util.Map
                            public iterator(): java.util.Iterator
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}