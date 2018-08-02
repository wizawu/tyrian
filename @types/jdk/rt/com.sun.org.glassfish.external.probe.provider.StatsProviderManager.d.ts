declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace probe {
                        namespace provider {
                            class StatsProviderManager {
                                public static register(arg0: java.lang.String | string, arg1: com.sun.org.glassfish.external.probe.provider.PluginPoint, arg2: java.lang.String | string, arg3: java.lang.Object): boolean
                                public static register(arg0: com.sun.org.glassfish.external.probe.provider.PluginPoint, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.Object, arg4: java.lang.String | string): boolean
                                public static register(arg0: java.lang.String | string, arg1: com.sun.org.glassfish.external.probe.provider.PluginPoint, arg2: java.lang.String | string, arg3: java.lang.Object, arg4: java.lang.String | string): boolean
                                public static register(arg0: java.lang.String | string, arg1: com.sun.org.glassfish.external.probe.provider.PluginPoint, arg2: java.lang.String | string, arg3: java.lang.Object, arg4: java.lang.String | string, arg5: java.lang.String | string): boolean
                                public static unregister(arg0: java.lang.Object): boolean
                                public static hasListeners(arg0: java.lang.String | string): boolean
                                public static setStatsProviderManagerDelegate(arg0: com.sun.org.glassfish.external.probe.provider.StatsProviderManagerDelegate): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}