declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace config {
                            namespace management {
                                namespace policy {
class ManagedServiceAssertion extends com.sun.xml.internal.ws.api.config.management.policy.ManagementAssertion {
    public static MANAGED_SERVICE_QNAME: javax.xml.namespace.QName
    public static getAssertion(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint): com.sun.xml.internal.ws.api.config.management.policy.ManagedServiceAssertion
    public constructor(arg0: com.sun.xml.internal.ws.policy.sourcemodel.AssertionData, arg1: java.util.Collection<com.sun.xml.internal.ws.policy.PolicyAssertion>)
    public isManagementEnabled(): boolean
    public getEndpointDisposeDelay(arg0: long): long
    public getCommunicationServerImplementations(): java.util.Collection<com.sun.xml.internal.ws.api.config.management.policy.ManagedServiceAssertion$ImplementationRecord>
    public getConfiguratorImplementation(): com.sun.xml.internal.ws.api.config.management.policy.ManagedServiceAssertion$ImplementationRecord
    public getConfigSaverImplementation(): com.sun.xml.internal.ws.api.config.management.policy.ManagedServiceAssertion$ImplementationRecord
    public getConfigReaderImplementation(): com.sun.xml.internal.ws.api.config.management.policy.ManagedServiceAssertion$ImplementationRecord
    public static class: java.lang.Class<any>
}

                                }
                            }
                        }
                    }
                }
            }
        }
    }
}