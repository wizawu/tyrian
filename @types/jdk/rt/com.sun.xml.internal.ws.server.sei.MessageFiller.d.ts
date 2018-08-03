declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        namespace sei {
                            abstract class MessageFiller {
                                protected readonly methodPos: int
                                protected constructor(arg0: int)
                                public abstract fillIn(arg0: java.lang.Object[], arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.message.Message): void
                                public static class: java.lang.Class<any>
                            }
                            interface MessageFiller$$Lambda {
                                (arg0: java.lang.Object[], arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.message.Message): void
                            }
                        }
                    }
                }
            }
        }
    }
}