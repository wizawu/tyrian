declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orb {
interface DataCollector {
    isApplet(): boolean
    initialHostIsLocal(): boolean
    setParser(arg0: com.sun.corba.se.spi.orb.PropertyParser): void
    getProperties(): java.util.Properties
}

                    }
                }
            }
        }
    }
}