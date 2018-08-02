declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace monitoring {
interface MonitoredObject {
    getName(): string
    getDescription(): string
    addChild(arg0: com.sun.corba.se.spi.monitoring.MonitoredObject): void
    removeChild(arg0: java.lang.String | string): void
    getChild(arg0: java.lang.String | string): com.sun.corba.se.spi.monitoring.MonitoredObject
    getChildren(): java.util.Collection
    setParent(arg0: com.sun.corba.se.spi.monitoring.MonitoredObject): void
    getParent(): com.sun.corba.se.spi.monitoring.MonitoredObject
    addAttribute(arg0: com.sun.corba.se.spi.monitoring.MonitoredAttribute): void
    removeAttribute(arg0: java.lang.String | string): void
    getAttribute(arg0: java.lang.String | string): com.sun.corba.se.spi.monitoring.MonitoredAttribute
    getAttributes(): java.util.Collection
    clearState(): void
}

                    }
                }
            }
        }
    }
}