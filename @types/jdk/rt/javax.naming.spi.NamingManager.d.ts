declare namespace javax {
    namespace naming {
        namespace spi {
class NamingManager {
    public static CPE: string
    public static setObjectFactoryBuilder(arg0: javax.naming.spi.ObjectFactoryBuilder | javax.naming.spi.ObjectFactoryBuilder$$Lambda): void
    public static getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
    public static getURLContext(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>): javax.naming.Context
    public static getInitialContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
    public static setInitialContextFactoryBuilder(arg0: javax.naming.spi.InitialContextFactoryBuilder | javax.naming.spi.InitialContextFactoryBuilder$$Lambda): void
    public static hasInitialContextFactoryBuilder(): boolean
    public static getContinuationContext(arg0: javax.naming.CannotProceedException): javax.naming.Context
    public static getStateToBind(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}