declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace monitoring {
interface MonitoredAttribute {
    getAttributeInfo(): com.sun.corba.se.spi.monitoring.MonitoredAttributeInfo
    setValue(arg0: java.lang.Object): void
    getValue(): java.lang.Object
    getName(): string
    clearState(): void
}

                    }
                }
            }
        }
    }
}