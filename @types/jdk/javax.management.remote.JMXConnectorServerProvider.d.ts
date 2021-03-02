declare namespace javax {
  namespace management {
    namespace remote {

      interface JMXConnectorServerProvider$$lambda {
        (arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String,unknown>, arg2: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer
      }

      interface JMXConnectorServerProvider {
        newJMXConnectorServer(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String,unknown>, arg2: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer
      }

    }
  }
}
