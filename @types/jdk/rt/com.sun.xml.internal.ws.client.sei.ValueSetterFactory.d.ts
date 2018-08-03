declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace client {
                        namespace sei {
                            abstract class ValueSetterFactory {
                                public static readonly SYNC: com.sun.xml.internal.ws.client.sei.ValueSetterFactory
                                public static readonly NONE: com.sun.xml.internal.ws.client.sei.ValueSetterFactory
                                public static readonly SINGLE: com.sun.xml.internal.ws.client.sei.ValueSetterFactory
                                public constructor()
                                public abstract get(arg0: com.sun.xml.internal.ws.model.ParameterImpl): com.sun.xml.internal.ws.client.sei.ValueSetter
                                public static class: java.lang.Class<any>
                            }
                            interface ValueSetterFactory$$Lambda {
                                (arg0: com.sun.xml.internal.ws.model.ParameterImpl): com.sun.xml.internal.ws.client.sei.ValueSetter
                            }
                        }
                    }
                }
            }
        }
    }
}