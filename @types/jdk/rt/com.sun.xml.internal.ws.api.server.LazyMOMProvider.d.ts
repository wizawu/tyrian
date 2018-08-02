declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
class LazyMOMProvider extends java.lang.Enum<com.sun.xml.internal.ws.api.server.LazyMOMProvider> {
    public static INSTANCE: com.sun.xml.internal.ws.api.server.LazyMOMProvider
    public static values(): com.sun.xml.internal.ws.api.server.LazyMOMProvider[]
    public static valueOf(arg0: java.lang.String | string): com.sun.xml.internal.ws.api.server.LazyMOMProvider
    public initMOMForScope(arg0: com.sun.xml.internal.ws.api.server.LazyMOMProvider$Scope): void
    public registerListener(arg0: com.sun.xml.internal.ws.api.server.LazyMOMProvider$DefaultScopeChangeListener): void
    public getScope(): com.sun.xml.internal.ws.api.server.LazyMOMProvider$Scope
    public registerEndpoint(arg0: com.sun.xml.internal.ws.api.server.LazyMOMProvider$WSEndpointScopeChangeListener): void
    public unregisterEndpoint(arg0: com.sun.xml.internal.ws.api.server.LazyMOMProvider$WSEndpointScopeChangeListener): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}