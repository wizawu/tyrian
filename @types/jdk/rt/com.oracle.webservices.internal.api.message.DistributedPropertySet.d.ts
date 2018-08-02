declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace message {
                        interface DistributedPropertySet extends com.oracle.webservices.internal.api.message.PropertySet {
                            getSatellite<T extends com.oracle.webservices.internal.api.message.PropertySet>(arg0: java.lang.Class<T>): T
                            getSatellites(): java.util.Map<java.lang.Class<com.oracle.webservices.internal.api.message.PropertySet>, com.oracle.webservices.internal.api.message.PropertySet>
                            addSatellite(arg0: com.oracle.webservices.internal.api.message.PropertySet): void
                            addSatellite(arg0: java.lang.Class<com.oracle.webservices.internal.api.message.PropertySet>, arg1: com.oracle.webservices.internal.api.message.PropertySet): void
                            removeSatellite(arg0: com.oracle.webservices.internal.api.message.PropertySet): void
                            copySatelliteInto(arg0: com.oracle.webservices.internal.api.message.MessageContext): void
                        }
                    }
                }
            }
        }
    }
}