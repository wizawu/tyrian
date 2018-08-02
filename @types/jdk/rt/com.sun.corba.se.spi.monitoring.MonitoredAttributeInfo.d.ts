declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace monitoring {
interface MonitoredAttributeInfo {
    isWritable(): boolean
    isStatistic(): boolean
    type(): java.lang.Class
    getDescription(): string
}

                    }
                }
            }
        }
    }
}