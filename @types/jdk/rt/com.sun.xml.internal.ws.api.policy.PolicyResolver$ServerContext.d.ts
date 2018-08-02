declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace policy {
class PolicyResolver$ServerContext {
    public constructor(arg0: com.sun.xml.internal.ws.policy.PolicyMap, arg1: com.sun.xml.internal.ws.api.server.Container, arg2: java.lang.Class, ...arg3: com.sun.xml.internal.ws.policy.PolicyMapMutator[])
    public constructor(arg0: com.sun.xml.internal.ws.policy.PolicyMap, arg1: com.sun.xml.internal.ws.api.server.Container, arg2: java.lang.Class, arg3: boolean, ...arg4: com.sun.xml.internal.ws.policy.PolicyMapMutator[])
    public getPolicyMap(): com.sun.xml.internal.ws.policy.PolicyMap
    public getEndpointClass(): java.lang.Class
    public getContainer(): com.sun.xml.internal.ws.api.server.Container
    public hasWsdl(): boolean
    public getMutators(): java.util.Collection<com.sun.xml.internal.ws.policy.PolicyMapMutator>
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}