declare namespace javax {
  namespace naming {
    namespace spi {

      class NamingManager {
        static readonly helper: com.sun.naming.internal.VersionHelper
        public static readonly CPE: java.lang.String
        constructor()
        public static setObjectFactoryBuilder(arg0: javax.naming.spi.ObjectFactoryBuilder | javax.naming.spi.ObjectFactoryBuilder$$lambda): void
        static getObjectFactoryBuilder(): javax.naming.spi.ObjectFactoryBuilder
        static getObjectFactoryFromReference(arg0: javax.naming.Reference, arg1: java.lang.String | string): javax.naming.spi.ObjectFactory
        public static getObjectInstance(arg0: java.lang.Object | any, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): java.lang.Object
        static processURLAddrs(arg0: javax.naming.Reference, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): java.lang.Object
        static getContext(arg0: java.lang.Object | any, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): javax.naming.Context
        static getResolver(arg0: java.lang.Object | any, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): javax.naming.spi.Resolver
        public static getURLContext(arg0: java.lang.String | string, arg1: java.util.Hashtable<unknown,unknown>): javax.naming.Context
        public static getInitialContext(arg0: java.util.Hashtable<unknown,unknown>): javax.naming.Context
        public static setInitialContextFactoryBuilder(arg0: javax.naming.spi.InitialContextFactoryBuilder | javax.naming.spi.InitialContextFactoryBuilder$$lambda): void
        public static hasInitialContextFactoryBuilder(): boolean
        public static getContinuationContext(arg0: javax.naming.CannotProceedException): javax.naming.Context
        public static getStateToBind(arg0: java.lang.Object | any, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): java.lang.Object
      }

    }
  }
}
