declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace monitoring {
class MonitoredObjectImpl implements com.sun.corba.se.spi.monitoring.MonitoredObject {
    public getChild(arg0: java.lang.String | string): com.sun.corba.se.spi.monitoring.MonitoredObject
    public getChildren(): java.util.Collection
    public addChild(arg0: com.sun.corba.se.spi.monitoring.MonitoredObject): void
    public removeChild(arg0: java.lang.String | string): void
    public getParent(): com.sun.corba.se.spi.monitoring.MonitoredObject
    public setParent(arg0: com.sun.corba.se.spi.monitoring.MonitoredObject): void
    public getAttribute(arg0: java.lang.String | string): com.sun.corba.se.spi.monitoring.MonitoredAttribute
    public getAttributes(): java.util.Collection
    public addAttribute(arg0: com.sun.corba.se.spi.monitoring.MonitoredAttribute): void
    public removeAttribute(arg0: java.lang.String | string): void
    public clearState(): void
    public getName(): string
    public getDescription(): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}