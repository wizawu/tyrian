declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orb {
abstract class DataCollectorBase implements com.sun.corba.se.spi.orb.DataCollector {
    protected localHostName: string
    protected configurationHostName: string
    public constructor(arg0: java.util.Properties, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public initialHostIsLocal(): boolean
    public setParser(arg0: com.sun.corba.se.spi.orb.PropertyParser): void
    public getProperties(): java.util.Properties
    public isApplet(): boolean
    protected collect(): void
    protected checkPropertyDefaults(): void
    protected findPropertiesFromArgs(arg0: java.lang.String[]): void
    protected findPropertiesFromApplet(arg0: java.applet.Applet): void
    protected findPropertiesFromFile(): void
    protected findPropertiesFromProperties(): void
    protected findPropertiesFromSystem(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}