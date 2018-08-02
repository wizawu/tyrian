declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                class PropertyMap implements java.lang.Iterable<java.lang.Object> , java.io.Serializable {
                    protected constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    public static newMap(arg0: java.util.Collection<jdk.nashorn.internal.runtime.Property>, arg1: java.lang.String | string, arg2: int, arg3: int, arg4: int): jdk.nashorn.internal.runtime.PropertyMap
                    public static newMap(arg0: java.util.Collection<jdk.nashorn.internal.runtime.Property>): jdk.nashorn.internal.runtime.PropertyMap
                    public static newMap(arg0: java.lang.Class<jdk.nashorn.internal.runtime.ScriptObject>): jdk.nashorn.internal.runtime.PropertyMap
                    public static newMap(): jdk.nashorn.internal.runtime.PropertyMap
                    public size(): int
                    public getListenerCount(): int
                    public addListener(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.PropertyMap): void
                    public propertyAdded(arg0: jdk.nashorn.internal.runtime.Property, arg1: boolean): void
                    public propertyDeleted(arg0: jdk.nashorn.internal.runtime.Property, arg1: boolean): void
                    public propertyModified(arg0: jdk.nashorn.internal.runtime.Property, arg1: jdk.nashorn.internal.runtime.Property, arg2: boolean): void
                    public protoChanged(arg0: boolean): void
                    public getSwitchPoint(arg0: java.lang.String | string): java.lang.invoke.SwitchPoint
                    public addPropertyNoHistory(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyMap
                    public addProperty(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyMap
                    public deleteProperty(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyMap
                    public replaceProperty(arg0: jdk.nashorn.internal.runtime.Property, arg1: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.PropertyMap
                    public newUserAccessors(arg0: java.lang.String | string, arg1: int): jdk.nashorn.internal.runtime.UserAccessorProperty
                    public findProperty(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.Property
                    public addAll(arg0: jdk.nashorn.internal.runtime.PropertyMap): jdk.nashorn.internal.runtime.PropertyMap
                    public getProperties(): jdk.nashorn.internal.runtime.Property[]
                    public getClassName(): string
                    public equalsWithoutType(arg0: jdk.nashorn.internal.runtime.PropertyMap): boolean
                    public toString(): string
                    public iterator(): java.util.Iterator<java.lang.Object>
                    public containsArrayKeys(): boolean
                    public changeProto(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.PropertyMap
                    public getSharedProtoMap(): jdk.nashorn.internal.runtime.PropertyMap
                    public static diff(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: jdk.nashorn.internal.runtime.PropertyMap): string
                    public static getCount(): long
                    public static getClonedCount(): long
                    public static getHistoryHit(): long
                    public static getProtoInvalidations(): long
                    public static getProtoHistoryHit(): long
                    public static getSetProtoNewMapCount(): long
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}