declare namespace com {
    namespace oracle {
        namespace webservices {
            namespace internal {
                namespace api {
                    namespace message {
abstract class BasePropertySet implements com.oracle.webservices.internal.api.message.PropertySet {
    protected constructor()
    protected getPropertyMap(): com.oracle.webservices.internal.api.message.BasePropertySet$PropertyMap
    protected static parse(arg0: java.lang.Class): com.oracle.webservices.internal.api.message.BasePropertySet$PropertyMap
    public containsKey(arg0: java.lang.Object): boolean
    public get(arg0: java.lang.Object): java.lang.Object
    public put(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
    public supports(arg0: java.lang.Object): boolean
    public remove(arg0: java.lang.Object): java.lang.Object
    public createMapView(): java.util.Map<java.lang.String, java.lang.Object>
    public asMap(): java.util.Map<java.lang.String, java.lang.Object>
    protected createView(): java.util.Map<java.lang.String, java.lang.Object>
    protected mapAllowsAdditionalProperties(): boolean
    protected createEntrySet(arg0: java.util.Set<java.util.Map$Entry<java.lang.String, java.lang.Object>>): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}