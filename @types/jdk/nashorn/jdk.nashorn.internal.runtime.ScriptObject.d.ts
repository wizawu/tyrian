declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                abstract class ScriptObject implements jdk.nashorn.internal.runtime.PropertyAccess , java.lang.Cloneable {
                    public static PROTO_PROPERTY_NAME: string
                    public static NO_SUCH_METHOD_NAME: string
                    public static NO_SUCH_PROPERTY_NAME: string
                    public static IS_ARRAY: int
                    public static IS_ARGUMENTS: int
                    public static IS_LENGTH_NOT_WRITABLE: int
                    public static IS_BUILTIN: int
                    public static SPILL_RATE: int
                    protected primitiveSpill: long[]
                    protected objectSpill: java.lang.Object[]
                    public static GETPROTO: java.lang.invoke.MethodHandle
                    public static GET_ARRAY: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static GET_ARGUMENT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_ARGUMENT: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static GET_PROTO: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static GET_PROTO_DEPTH: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_GLOBAL_OBJECT_PROTO: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_PROTO_FROM_LITERAL: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_USER_ACCESSORS: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public static SET_MAP: jdk.nashorn.internal.codegen.CompilerConstants$Call
                    public constructor()
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap)
                    protected constructor(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.PropertyMap)
                    public constructor(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: long[], arg2: java.lang.Object[])
                    protected isGlobal(): boolean
                    public static spillAllocationLength(arg0: int): int
                    public addBoundProperties(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
                    public addBoundProperties(arg0: jdk.nashorn.internal.runtime.ScriptObject, arg1: jdk.nashorn.internal.runtime.Property[]): void
                    protected addBoundProperty(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: jdk.nashorn.internal.runtime.ScriptObject, arg2: jdk.nashorn.internal.runtime.Property, arg3: boolean): jdk.nashorn.internal.runtime.PropertyMap
                    public addBoundProperties(arg0: java.lang.Object, arg1: jdk.nashorn.internal.runtime.AccessorProperty[]): void
                    public propertyIterator(): java.util.Iterator<java.lang.String>
                    public valueIterator(): java.util.Iterator<java.lang.Object>
                    public isAccessorDescriptor(): boolean
                    public isDataDescriptor(): boolean
                    public toPropertyDescriptor(): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public static toPropertyDescriptor(arg0: jdk.nashorn.internal.objects.Global, arg1: java.lang.Object): jdk.nashorn.internal.runtime.PropertyDescriptor
                    public getOwnPropertyDescriptor(arg0: java.lang.String | string): java.lang.Object
                    public getPropertyDescriptor(arg0: java.lang.String | string): java.lang.Object
                    protected invalidateGlobalConstant(arg0: java.lang.String | string): void
                    public defineOwnProperty(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: boolean): boolean
                    public defineOwnProperty(arg0: int, arg1: java.lang.Object): void
                    public addOwnProperty(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.PropertyDescriptor): void
                    public findProperty(arg0: java.lang.String | string, arg1: boolean): jdk.nashorn.internal.runtime.FindProperty
                    protected findProperty(arg0: java.lang.String | string, arg1: boolean, arg2: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.internal.runtime.FindProperty
                    public addOwnProperty(arg0: java.lang.String | string, arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptFunction, arg3: jdk.nashorn.internal.runtime.ScriptFunction): jdk.nashorn.internal.runtime.Property
                    public addOwnProperty(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Object): jdk.nashorn.internal.runtime.Property
                    public addOwnProperty(arg0: jdk.nashorn.internal.runtime.Property): jdk.nashorn.internal.runtime.Property
                    public deleteOwnProperty(arg0: jdk.nashorn.internal.runtime.Property): boolean
                    protected initUserAccessors(arg0: java.lang.String | string, arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptFunction, arg3: jdk.nashorn.internal.runtime.ScriptFunction): void
                    public modifyOwnProperty(arg0: jdk.nashorn.internal.runtime.Property, arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptFunction, arg3: jdk.nashorn.internal.runtime.ScriptFunction): jdk.nashorn.internal.runtime.Property
                    public modifyOwnProperty(arg0: jdk.nashorn.internal.runtime.Property, arg1: int): jdk.nashorn.internal.runtime.Property
                    public setUserAccessors(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.ScriptFunction, arg2: jdk.nashorn.internal.runtime.ScriptFunction): void
                    protected getCallMethodHandle(arg0: jdk.nashorn.internal.runtime.FindProperty, arg1: java.lang.invoke.MethodType, arg2: java.lang.String | string): java.lang.invoke.MethodHandle
                    protected static getCallMethodHandle(arg0: java.lang.Object, arg1: java.lang.invoke.MethodType, arg2: java.lang.String | string): java.lang.invoke.MethodHandle
                    public getWithProperty(arg0: jdk.nashorn.internal.runtime.Property): java.lang.Object
                    public getProperty(arg0: java.lang.String | string): jdk.nashorn.internal.runtime.Property
                    public getArgument(arg0: int): java.lang.Object
                    public setArgument(arg0: int, arg1: java.lang.Object): void
                    protected getContext(): jdk.nashorn.internal.runtime.Context
                    public getMap(): jdk.nashorn.internal.runtime.PropertyMap
                    public setMap(arg0: jdk.nashorn.internal.runtime.PropertyMap): void
                    protected compareAndSetMap(arg0: jdk.nashorn.internal.runtime.PropertyMap, arg1: jdk.nashorn.internal.runtime.PropertyMap): boolean
                    public getProto(): jdk.nashorn.internal.runtime.ScriptObject
                    public getProto(arg0: int): jdk.nashorn.internal.runtime.ScriptObject
                    public setProto(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
                    public setInitialProto(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
                    public static setGlobalObjectProto(arg0: jdk.nashorn.internal.runtime.ScriptObject): void
                    public setPrototypeOf(arg0: java.lang.Object): void
                    public setProtoFromLiteral(arg0: java.lang.Object): void
                    public getOwnKeys(arg0: boolean): java.lang.String[]
                    protected getOwnKeys(arg0: boolean, arg1: java.util.Set<java.lang.String>): java.lang.String[]
                    public hasArrayEntries(): boolean
                    public getClassName(): string
                    public getLength(): java.lang.Object
                    public safeToString(): string
                    public getDefaultValue(arg0: java.lang.Class<any>): java.lang.Object
                    public isInstance(arg0: jdk.nashorn.internal.runtime.ScriptObject): boolean
                    public preventExtensions(): jdk.nashorn.internal.runtime.ScriptObject
                    public static isArray(arg0: java.lang.Object): boolean
                    public isArray(): boolean
                    public setIsArray(): void
                    public isArguments(): boolean
                    public setIsArguments(): void
                    public isLengthNotWritable(): boolean
                    public setIsLengthNotWritable(): void
                    public getArray(arg0: java.lang.Class<any>): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public getArray(): jdk.nashorn.internal.runtime.arrays.ArrayData
                    public setArray(arg0: jdk.nashorn.internal.runtime.arrays.ArrayData): void
                    public isExtensible(): boolean
                    public seal(): jdk.nashorn.internal.runtime.ScriptObject
                    public isSealed(): boolean
                    public freeze(): jdk.nashorn.internal.runtime.ScriptObject
                    public isFrozen(): boolean
                    public isScope(): boolean
                    public setIsBuiltin(): void
                    public isBuiltin(): boolean
                    public clear(arg0: boolean): void
                    public containsKey(arg0: java.lang.Object): boolean
                    public containsValue(arg0: java.lang.Object): boolean
                    public entrySet(): java.util.Set<java.util.Map$Entry<java.lang.Object, java.lang.Object>>
                    public isEmpty(): boolean
                    public keySet(): java.util.Set<java.lang.Object>
                    public put(arg0: java.lang.Object, arg1: java.lang.Object, arg2: boolean): java.lang.Object
                    public putAll(arg0: java.util.Map<any, any>, arg1: boolean): void
                    public remove(arg0: java.lang.Object, arg1: boolean): java.lang.Object
                    public size(): int
                    public values(): java.util.Collection<java.lang.Object>
                    public lookup(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findNewMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findCallMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findCallMethodMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest, arg2: java.lang.String | string): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findGetIndexMethodHandle(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: jdk.internal.dynalink.CallSiteDescriptor): java.lang.invoke.MethodHandle
                    public getProtoSwitchPoints(arg0: java.lang.String | string, arg1: jdk.nashorn.internal.runtime.ScriptObject): java.lang.invoke.SwitchPoint[]
                    protected findSetMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected findSetIndexMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public noSuchMethod(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    public noSuchProperty(arg0: jdk.internal.dynalink.CallSiteDescriptor, arg1: jdk.internal.dynalink.linker.LinkRequest): jdk.internal.dynalink.linker.GuardedInvocation
                    protected invokeNoSuchProperty(arg0: java.lang.String | string, arg1: boolean, arg2: int): java.lang.Object
                    protected static pairArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType): java.lang.invoke.MethodHandle
                    public static pairArguments(arg0: java.lang.invoke.MethodHandle, arg1: java.lang.invoke.MethodType, arg2: java.lang.Boolean | boolean): java.lang.invoke.MethodHandle
                    public setLength(arg0: long): void
                    public getInt(arg0: java.lang.Object, arg1: int): int
                    public getInt(arg0: double, arg1: int): int
                    public getInt(arg0: int, arg1: int): int
                    public getDouble(arg0: java.lang.Object, arg1: int): double
                    public getDouble(arg0: double, arg1: int): double
                    public getDouble(arg0: int, arg1: int): double
                    public get(arg0: java.lang.Object): java.lang.Object
                    public get(arg0: double): java.lang.Object
                    public get(arg0: int): java.lang.Object
                    public setObject(arg0: jdk.nashorn.internal.runtime.FindProperty, arg1: int, arg2: java.lang.String | string, arg3: java.lang.Object): void
                    public set(arg0: java.lang.Object, arg1: int, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: double, arg2: int): void
                    public set(arg0: java.lang.Object, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: double, arg1: int, arg2: int): void
                    public set(arg0: double, arg1: double, arg2: int): void
                    public set(arg0: double, arg1: java.lang.Object, arg2: int): void
                    public set(arg0: int, arg1: int, arg2: int): void
                    public set(arg0: int, arg1: double, arg2: int): void
                    public set(arg0: int, arg1: java.lang.Object, arg2: int): void
                    public has(arg0: java.lang.Object): boolean
                    public has(arg0: double): boolean
                    public has(arg0: int): boolean
                    public hasOwnProperty(arg0: java.lang.Object): boolean
                    public hasOwnProperty(arg0: int): boolean
                    public hasOwnProperty(arg0: double): boolean
                    public delete(arg0: int, arg1: boolean): boolean
                    public delete(arg0: double, arg1: boolean): boolean
                    public delete(arg0: java.lang.Object, arg1: boolean): boolean
                    public copy(): jdk.nashorn.internal.runtime.ScriptObject
                    protected clone(): jdk.nashorn.internal.runtime.ScriptObject
                    protected newUserAccessors(arg0: java.lang.String | string, arg1: int, arg2: jdk.nashorn.internal.runtime.ScriptFunction, arg3: jdk.nashorn.internal.runtime.ScriptFunction): jdk.nashorn.internal.runtime.UserAccessorProperty
                    protected useDualFields(): boolean
                    public static getCount(): long
                    protected clone(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}