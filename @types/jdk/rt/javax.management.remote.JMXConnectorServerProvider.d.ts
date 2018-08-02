declare namespace javax {
    namespace management {
        namespace remote {
            interface JMXConnectorServerProvider {
                newJMXConnectorServer(arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>, arg2: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer
            }
            interface JMXConnectorServerProvider$$Lambda {
                (arg0: javax.management.remote.JMXServiceURL, arg1: java.util.Map<java.lang.String, any>, arg2: javax.management.MBeanServer): javax.management.remote.JMXConnectorServer
            }
        }
    }
}