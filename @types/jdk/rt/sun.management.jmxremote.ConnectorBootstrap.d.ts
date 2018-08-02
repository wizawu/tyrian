declare namespace sun {
    namespace management {
        namespace jmxremote {
            class ConnectorBootstrap {
                public static unexportRegistry(): void
                public static initialize(): javax.management.remote.JMXConnectorServer
                public static initialize(arg0: java.lang.String | string, arg1: java.util.Properties): javax.management.remote.JMXConnectorServer
                public static startRemoteConnectorServer(arg0: java.lang.String | string, arg1: java.util.Properties): javax.management.remote.JMXConnectorServer
                public static startLocalConnectorServer(): javax.management.remote.JMXConnectorServer
                public static class: java.lang.Class<any>
            }
        }
    }
}