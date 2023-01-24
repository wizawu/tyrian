declare namespace javax {
  namespace management {
    namespace remote {
      interface JMXConnectorProvider$$lambda {
        (
          arg0: javax.management.remote.JMXServiceURL,
          arg1: java.util.Map<java.lang.String, unknown>
        ): javax.management.remote.JMXConnector
      }

      interface JMXConnectorProvider {
        newJMXConnector(
          arg0: javax.management.remote.JMXServiceURL,
          arg1: java.util.Map<java.lang.String, unknown>
        ): javax.management.remote.JMXConnector
      }
    }
  }
}
