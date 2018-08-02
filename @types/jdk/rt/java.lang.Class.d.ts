declare namespace java {
    namespace lang {
class Class<T> implements java.io.Serializable , java.lang.reflect.GenericDeclaration , java.lang.reflect.Type {
    public static forName(arg0: java.lang.String | string): java.lang.Class<any>
    public static forName(arg0: java.lang.String | string, arg1: boolean, arg2: java.lang.ClassLoader): java.lang.Class<any>
    public getClasses(): java.lang.Class<any>[]
    public getClassLoader(): java.lang.ClassLoader
    public getComponentType(): java.lang.Class<any>
    public getConstructor(...arg0: java.lang.Class<any>[]): java.lang.reflect.Constructor<T>
    public getConstructors(): java.lang.reflect.Constructor<any>[]
    public getDeclaredClasses(): java.lang.Class<any>[]
    public getDeclaredConstructor(...arg0: java.lang.Class<any>[]): java.lang.reflect.Constructor<T>
    public getDeclaredConstructors(): java.lang.reflect.Constructor<any>[]
    public getDeclaredField(arg0: java.lang.String | string): java.lang.reflect.Field
    public getDeclaredFields(): java.lang.reflect.Field[]
    public getDeclaredMethod(arg0: java.lang.String | string, ...arg1: java.lang.Class<any>[]): java.lang.reflect.Method
    public getDeclaredMethods(): java.lang.reflect.Method[]
    public getDeclaringClass(): java.lang.Class<any>
    public getField(arg0: java.lang.String | string): java.lang.reflect.Field
    public getFields(): java.lang.reflect.Field[]
    public getInterfaces(): java.lang.Class<any>[]
    public getMethod(arg0: java.lang.String | string, ...arg1: java.lang.Class<any>[]): java.lang.reflect.Method
    public getMethods(): java.lang.reflect.Method[]
    public getModifiers(): int
    public getName(): string
    public getProtectionDomain(): java.security.ProtectionDomain
    public getResource(arg0: java.lang.String | string): java.net.URL
    public getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
    public getSigners(): java.lang.Object[]
    public getSuperclass(): java.lang.Class<T>
    public isArray(): boolean
    public isAssignableFrom(arg0: java.lang.Class<any>): boolean
    public isInstance(arg0: java.lang.Object): boolean
    public isInterface(): boolean
    public isPrimitive(): boolean
    public newInstance(): T
    public toString(): string
    public toGenericString(): string
    public getPackage(): java.lang.Package
    public desiredAssertionStatus(): boolean
    public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
    public getAnnotations<A extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
    public getDeclaredAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
    public getAnnotatedInterfaces<A extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType[]
    public getAnnotatedSuperclass<A extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType
    public getTypeName<A extends java.lang.annotation.Annotation>(): string
    public getDeclaredAnnotations<A extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
    public getDeclaredAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
    public getAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
    public isAnnotation<A extends java.lang.annotation.Annotation>(): boolean
    public isAnnotationPresent<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
    public asSubclass<U>(arg0: java.lang.Class<U>): java.lang.Class<U>
    public cast<U>(arg0: java.lang.Object): T
    public isEnum<U>(): boolean
    public getEnumConstants<U>(): T[]
    public isSynthetic<U>(): boolean
    public getTypeParameters<U>(): java.lang.reflect.TypeVariable<java.lang.Class<T>>[]
    public getGenericInterfaces<U>(): java.lang.reflect.Type[]
    public getGenericSuperclass<U>(): java.lang.reflect.Type
    public getEnclosingConstructor<U>(): java.lang.reflect.Constructor<any>
    public getEnclosingMethod<U>(): java.lang.reflect.Method
    public getEnclosingClass<U>(): java.lang.Class<any>
    public getSimpleName<U>(): string
    public getCanonicalName<U>(): string
    public isAnonymousClass<U>(): boolean
    public isLocalClass<U>(): boolean
    public isMemberClass<U>(): boolean
    public static class: java.lang.Class<any>
}

class Class$$Lambda<T> implements java.io.Serializable , java.lang.reflect.GenericDeclaration , java.lang.reflect.Type {
    public static (arg0: java.lang.String | string): java.lang.Class<any>
}

    }
}