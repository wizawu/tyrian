declare namespace javax {
    namespace xml {
        namespace ws {
            interface Binding {
                getHandlerChain(): java.util.List<javax.xml.ws.handler.Handler>
                setHandlerChain(arg0: java.util.List<javax.xml.ws.handler.Handler>): void
                getBindingID(): string
            }
        }
    }
}