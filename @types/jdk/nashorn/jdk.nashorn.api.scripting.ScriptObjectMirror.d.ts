declare namespace jdk {
    namespace nashorn {
        namespace api {
            namespace scripting {
class ScriptObjectMirror extends jdk.nashorn.api.scripting.AbstractJSObject implements javax.script.Bindings {
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public call(arg0: java.lang.Object, ...arg1: java.lang.Object[]): java.lang.Object
    public newObject(...arg0: java.lang.Object[]): java.lang.Object
    public eval(arg0: java.lang.String | string): java.lang.Object
    public callMember(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): java.lang.Object
    public getMember(arg0: java.lang.String | string): java.lang.Object
    public getSlot(arg0: int): java.lang.Object
    public hasMember(arg0: java.lang.String | string): boolean
    public hasSlot(arg0: int): boolean
    public removeMember(arg0: java.lang.String | string): void
    public setMember(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public setSlot(arg0: int, arg1: java.lang.Object): void
    public setIndexedPropertiesToExternalArrayData(arg0: java.nio.ByteBuffer): void
    public isInstance(arg0: java.lang.Object): boolean
    public getClassName(): string
    public isFunction(): boolean
    public isStrictFunction(): boolean
    public isArray(): boolean
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
    public delete(arg0: java.lang.Object): boolean
    public size(): int
    public values(): java.util.Collection<java.lang.Object>
    public getProto(): java.lang.Object
    public setProto(arg0: java.lang.Object): void
    public getOwnPropertyDescriptor(arg0: java.lang.String | string): java.lang.Object
    public getOwnKeys(arg0: boolean): java.lang.String[]
    public preventExtensions(): jdk.nashorn.api.scripting.ScriptObjectMirror
    public isExtensible(): boolean
    public seal(): jdk.nashorn.api.scripting.ScriptObjectMirror
    public isSealed(): boolean
    public freeze(): jdk.nashorn.api.scripting.ScriptObjectMirror
    public isFrozen(): boolean
    public static isUndefined(arg0: java.lang.Object): boolean
    public to<T>(arg0: java.lang.Class<T>): T
    public static wrap<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static wrapAsJSONCompatible<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static unwrap<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static wrapArray<T>(arg0: java.lang.Object[], arg1: java.lang.Object): java.lang.Object[]
    public static unwrapArray<T>(arg0: java.lang.Object[], arg1: java.lang.Object): java.lang.Object[]
    public static identical<T>(arg0: java.lang.Object, arg1: java.lang.Object): boolean
    public toNumber<T>(): double
    public getDefaultValue<T>(arg0: java.lang.Class<any>): java.lang.Object
    public put<T>(arg0: java.lang.Object, arg1: java.lang.Object): java.lang.Object
    public static class: java.lang.Class<any>
}

            }
        }
    }
}