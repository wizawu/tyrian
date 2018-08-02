declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            interface BoundEndpoint extends com.sun.xml.internal.ws.api.Component {
                                getEndpoint(): com.sun.xml.internal.ws.api.server.WSEndpoint
                                getAddress(): java.net.URI
                                getAddress(arg0: java.lang.String | string): java.net.URI
                            }
                        }
                    }
                }
            }
        }
    }
}