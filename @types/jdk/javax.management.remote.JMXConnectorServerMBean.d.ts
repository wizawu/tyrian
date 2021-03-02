declare namespace javax {
  namespace management {
    namespace remote {

      interface JMXConnectorServerMBean {
        start(): void
        stop(): void
        isActive(): boolean
        setMBeanServerForwarder(arg0: javax.management.remote.MBeanServerForwarder): void
        getConnectionIds(): java.lang.String[]
        getAddress(): javax.management.remote.JMXServiceURL
        getAttributes(): java.util.Map<java.lang.String,unknown>
        toJMXConnector(arg0: java.util.Map<java.lang.String,unknown>): javax.management.remote.JMXConnector
      }

    }
  }
}
