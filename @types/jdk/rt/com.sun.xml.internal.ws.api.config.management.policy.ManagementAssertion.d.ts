declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace config {
                            namespace management {
                                namespace policy {
                                    abstract class ManagementAssertion extends com.sun.xml.internal.ws.policy.SimpleAssertion {
                                        protected static MANAGEMENT_ATTRIBUTE_QNAME: javax.xml.namespace.QName
                                        protected static MONITORING_ATTRIBUTE_QNAME: javax.xml.namespace.QName
                                        protected static getAssertion<T extends com.sun.xml.internal.ws.api.config.management.policy.ManagementAssertion>(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.policy.PolicyMap, arg2: javax.xml.namespace.QName, arg3: javax.xml.namespace.QName, arg4: java.lang.Class<T>): T
                                        protected constructor(arg0: javax.xml.namespace.QName, arg1: com.sun.xml.internal.ws.policy.sourcemodel.AssertionData, arg2: java.util.Collection<com.sun.xml.internal.ws.policy.PolicyAssertion>)
                                        public getId(): string
                                        public getStart(): string
                                        public isManagementEnabled(): boolean
                                        public monitoringAttribute(): com.sun.xml.internal.ws.api.config.management.policy.ManagementAssertion$Setting
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