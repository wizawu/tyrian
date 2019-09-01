declare namespace java {
    namespace lang {
        namespace invoke {
            class MemberName implements java.lang.reflect.Member , java.lang.Cloneable {
                public getDeclaringClass(): java.lang.Class<any>
                public getClassLoader(): java.lang.ClassLoader
                public getName(): string
                public getMethodOrFieldType(): java.lang.invoke.MethodType
                public getMethodType(): java.lang.invoke.MethodType
                public getInvocationType(): java.lang.invoke.MethodType
                public getParameterTypes(): java.lang.Class<any>[]
                public getReturnType(): java.lang.Class<any>
                public getFieldType(): java.lang.Class<any>
                public getType(): java.lang.Object
                public getSignature(): string
                public getModifiers(): int
                public getReferenceKind(): byte
                public isMethodHandleInvoke(): boolean
                public static isMethodHandleInvokeName(arg0: java.lang.String | string): boolean
                public isStatic(): boolean
                public isPublic(): boolean
                public isPrivate(): boolean
                public isProtected(): boolean
                public isFinal(): boolean
                public canBeStaticallyBound(): boolean
                public isVolatile(): boolean
                public isAbstract(): boolean
                public isNative(): boolean
                public isBridge(): boolean
                public isVarargs(): boolean
                public isSynthetic(): boolean
                public isInvocable(): boolean
                public isFieldOrMethod(): boolean
                public isMethod(): boolean
                public isConstructor(): boolean
                public isField(): boolean
                public isType(): boolean
                public isPackage(): boolean
                public isCallerSensitive(): boolean
                public isAccessibleFrom(arg0: java.lang.Class<any>): boolean
                public constructor(arg0: java.lang.reflect.Method)
                public constructor(arg0: java.lang.reflect.Method, arg1: boolean)
                public asSpecial(): java.lang.invoke.MemberName
                public asConstructor(): java.lang.invoke.MemberName
                public asNormalOriginal(): java.lang.invoke.MemberName
                public constructor(arg0: java.lang.reflect.Constructor<any>)
                public constructor(arg0: java.lang.reflect.Field)
                public constructor(arg0: java.lang.reflect.Field, arg1: boolean)
                public isGetter(): boolean
                public isSetter(): boolean
                public asSetter(): java.lang.invoke.MemberName
                public constructor(arg0: java.lang.Class<any>)
                protected clone(): java.lang.invoke.MemberName
                public getDefinition(): java.lang.invoke.MemberName
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public equals(arg0: java.lang.invoke.MemberName): boolean
                public constructor(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.Class<any>, arg3: byte)
                public constructor(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.invoke.MethodType, arg3: byte)
                public constructor(arg0: byte, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.Object)
                public hasReceiverTypeDispatch(): boolean
                public isResolved(): boolean
                public toString(): string
                public makeAccessException(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.IllegalAccessException
                public makeAccessException(): java.lang.ReflectiveOperationException
                protected clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}