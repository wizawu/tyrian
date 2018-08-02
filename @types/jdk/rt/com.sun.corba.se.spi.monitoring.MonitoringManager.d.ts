declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace monitoring {
                        interface MonitoringManager extends java.io.Closeable {
                            getRootMonitoredObject(): com.sun.corba.se.spi.monitoring.MonitoredObject
                            clearState(): void
                        }
                    }
                }
            }
        }
    }
}