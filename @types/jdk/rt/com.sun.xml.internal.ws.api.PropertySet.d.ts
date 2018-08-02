declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
abstract class PropertySet extends com.oracle.webservices.internal.api.message.BasePropertySet {
    public constructor()
    protected static parse(arg0: java.lang.Class): com.sun.xml.internal.ws.api.PropertySet$PropertyMap
    public get(arg0: java.lang.Object): java.lang.Object
    public put(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
    public supports(arg0: java.lang.Object): boolean
    public remove(arg0: java.lang.Object): java.lang.Object
    protected createEntrySet(arg0: java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>): void
    protected getPropertyMap(): com.sun.xml.internal.ws.api.PropertySet$PropertyMap
    protected getPropertyMap(): com.oracle.webservices.internal.api.message.BasePropertySet$PropertyMap
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}