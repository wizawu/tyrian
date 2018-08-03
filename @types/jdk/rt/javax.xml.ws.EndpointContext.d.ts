declare namespace javax {
    namespace xml {
        namespace ws {
            abstract class EndpointContext {
                public constructor()
                public abstract getEndpoints(): java.util.Set<javax.xml.ws.Endpoint>
                public static class: java.lang.Class<any>
            }
            interface EndpointContext$$Lambda {
                (): java.util.Set<javax.xml.ws.Endpoint>
            }
        }
    }
}