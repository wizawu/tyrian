declare namespace javax {
  namespace management {
    namespace remote {

      class JMXConnectorFactory {
        public static readonly DEFAULT_CLASS_LOADER: java.lang.String
        public static readonly PROTOCOL_PROVIDER_PACKAGES: java.lang.String
        public static readonly PROTOCOL_PROVIDER_CLASS_LOADER: java.lang.String
        public static connect(arg0: javax.management.remote.JMXServiceURL): javax.management.remote.JMXConnector
        public static connect(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String,unknown>): javax.management.remote.JMXConnector
        public static newJMXConnector(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String,unknown>): javax.management.remote.JMXConnector
        static getProvider<T>(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String,java.lang.Object>, arg2: java.lang.String, arg3: java.lang.Class<T>, arg4: java.lang.ClassLoader): T
        static isSystemProvider(arg0: java.util.ServiceLoader$Provider<unknown>): boolean
        static getConnectorAsService<P,C>(arg0: java.lang.Class<P>, arg1: java.lang.ClassLoader, arg2: javax.management.remote.JMXServiceURL, arg3: java.util.function$.Predicate<java.util.ServiceLoader$Provider<unknown>>, arg4: javax.management.remote.JMXConnectorFactory$ConnectorFactory<P,C>): C
        static getProvider<T>(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.ClassLoader, arg3: java.lang.String, arg4: java.lang.Class<T>): T
        static resolveClassLoader(arg0: java.util.Map<java.lang.String,unknown>): java.lang.ClassLoader
      }

    }
  }
}
