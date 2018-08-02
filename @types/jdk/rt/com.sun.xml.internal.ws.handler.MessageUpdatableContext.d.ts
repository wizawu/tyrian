declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace handler {
                        abstract class MessageUpdatableContext implements javax.xml.ws.handler.MessageContext {
                            public constructor(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda)
                            public updatePacket(): void
                            public setScope(arg0: java.lang.String | string, arg1: javax.xml.ws.handler.MessageContext$Scope): void
                            public getScope(arg0: java.lang.String | string): javax.xml.ws.handler.MessageContext$Scope
                            public clear(): void
                            public containsKey(arg0: java.lang.Object): boolean
                            public containsValue(arg0: java.lang.Object): boolean
                            public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>
                            public get(arg0: java.lang.Object): java.lang.Object
                            public isEmpty(): boolean
                            public keySet(): java.util.Set<java.lang.String>
                            public put(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                            public putAll(arg0: java.util.Map<java.lang.String, java.lang.Object>): void
                            public remove(arg0: java.lang.Object): java.lang.Object
                            public size(): int
                            public values(): java.util.Collection<java.lang.Object>
                            public put(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}