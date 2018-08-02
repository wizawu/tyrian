declare namespace javax {
    namespace xml {
        namespace ws {
            namespace handler {
                interface PortInfo {
                    getServiceName(): javax.xml.namespace.QName
                    getPortName(): javax.xml.namespace.QName
                    getBindingID(): string
                }
            }
        }
    }
}