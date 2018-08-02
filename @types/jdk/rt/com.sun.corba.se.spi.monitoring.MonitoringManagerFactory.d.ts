declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace monitoring {
                        interface MonitoringManagerFactory {
                            createMonitoringManager(arg0: java.lang.String | string, arg1: java.lang.String | string): com.sun.corba.se.spi.monitoring.MonitoringManager
                            remove(arg0: java.lang.String | string): void
                        }
                    }
                }
            }
        }
    }
}