declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            abstract class Adapter<TK extends com.sun.xml.internal.ws.api.server.Adapter$Toolkit> implements com.sun.xml.internal.ws.api.config.management.Reconfigurable , com.sun.xml.internal.ws.api.Component {
                                protected endpoint: com.sun.xml.internal.ws.api.server.WSEndpoint<any>
                                protected pool: com.sun.xml.internal.ws.util.Pool<TK>
                                protected constructor(arg0: com.sun.xml.internal.ws.api.server.WSEndpoint)
                                protected getEndpointComponent(): com.sun.xml.internal.ws.api.Component
                                public reconfigure(): void
                                public getSPI<S>(arg0: java.lang.Class<S>): S
                                public getEndpoint<S>(): com.sun.xml.internal.ws.api.server.WSEndpoint<any>
                                protected getPool<S>(): com.sun.xml.internal.ws.util.Pool<TK>
                                protected createToolkit<S>(): TK
                                public static class: java.lang.Class<any>
                            }
                            abstract class Adapter$$Lambda<TK extends com.sun.xml.internal.ws.api.server.Adapter$Toolkit> implements com.sun.xml.internal.ws.api.config.management.Reconfigurable , com.sun.xml.internal.ws.api.Component {
                                protected endpoint: com.sun.xml.internal.ws.api.server.WSEndpoint<any>
                            }
                        }
                    }
                }
            }
        }
    }
}