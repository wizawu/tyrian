declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace probe {
                        namespace provider {
interface StatsProviderManagerDelegate {
    register(arg0: com.sun.org.glassfish.external.probe.provider.StatsProviderInfo): void
    unregister(arg0: java.lang.Object): void
    hasListeners(arg0: java.lang.String | string): boolean
}

                        }
                    }
                }
            }
        }
    }
}