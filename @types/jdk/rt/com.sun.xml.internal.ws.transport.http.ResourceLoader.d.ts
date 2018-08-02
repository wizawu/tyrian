declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace transport {
                        namespace http {
                            interface ResourceLoader {
                                getResource(arg0: java.lang.String | string): java.net.URL
                                getCatalogFile(): java.net.URL
                                getResourcePaths(arg0: java.lang.String | string): java.util.Set<java.lang.String>
                            }
                        }
                    }
                }
            }
        }
    }
}