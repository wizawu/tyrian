declare namespace javax {
  namespace naming {
    namespace spi {

      class NamingManager {
        static readonly helper: com.sun.naming.internal.VersionHelper
        public static readonly CPE: java.lang.String
        constructor()
        public static setObjectFactoryBuilder(arg0: javax.naming.spi.ObjectFactoryBuilder): void
        static getObjectFactoryBuilder(): javax.naming.spi.ObjectFactoryBuilder
        static getObjectFactoryFromReference(arg0: javax.naming.Reference, arg1: java.lang.String): javax.naming.spi.ObjectFactory
        public static getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): java.lang.Object
        static processURLAddrs(arg0: javax.naming.Reference, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): java.lang.Object
        static getContext(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): javax.naming.Context
        static getResolver(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): javax.naming.spi.Resolver
        public static getURLContext(arg0: java.lang.String, arg1: java.util.Hashtable<unknown,unknown>): javax.naming.Context
        public static getInitialContext(arg0: java.util.Hashtable<unknown,unknown>): javax.naming.Context
        public static setInitialContextFactoryBuilder(arg0: javax.naming.spi.InitialContextFactoryBuilder): void
        public static hasInitialContextFactoryBuilder(): boolean
        public static getContinuationContext(arg0: javax.naming.CannotProceedException): javax.naming.Context
        public static getStateToBind(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<unknown,unknown>): java.lang.Object
      }

    }
  }
}
