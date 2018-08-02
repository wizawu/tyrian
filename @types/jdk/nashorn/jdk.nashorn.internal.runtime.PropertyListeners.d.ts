declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class PropertyListeners {
                    public static getListenersAdded(): long
                    public static getListenersRemoved(): long
                    public static getListenerCount(arg0: jdk.nashorn.internal.runtime.ScriptObject): int
                    public getListenerCount(): int
                    public static addListener(arg0: jdk.nashorn.internal.runtime.PropertyListeners, arg1: java.lang.String | string, arg2: jdk.nashorn.internal.runtime.PropertyMap): jdk.nashorn.internal.runtime.PropertyListeners
                    public propertyAdded(arg0: jdk.nashorn.internal.runtime.Property): void
                    public propertyDeleted(arg0: jdk.nashorn.internal.runtime.Property): void
                    public propertyModified(arg0: jdk.nashorn.internal.runtime.Property, arg1: jdk.nashorn.internal.runtime.Property): void
                    public protoChanged(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}