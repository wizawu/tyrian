declare namespace java {
    namespace lang {
        class Class<T> implements java.io.Serializable , java.lang.reflect.GenericDeclaration , java.lang.reflect.Type , java.lang.reflect.AnnotatedElement {
            public toString(): string
            public toGenericString(): string
            public static forName(arg0: java.lang.String | string): java.lang.Class<any>
            public static forName(arg0: java.lang.String | string, arg1: boolean, arg2: java.lang.ClassLoader): java.lang.Class<any>
            public newInstance(): T
            public isInstance(arg0: java.lang.Object): boolean
            public isAssignableFrom(arg0: java.lang.Class<any>): boolean
            public isInterface(): boolean
            public isArray(): boolean
            public isPrimitive(): boolean
            public isAnnotation(): boolean
            public isSynthetic(): boolean
            public getName(): string
            public getClassLoader(): java.lang.ClassLoader
            public getTypeParameters(): java.lang.reflect.TypeVariable<java.lang.Class<T>>[]
            public getSuperclass(): java.lang.Class<T>
            public getGenericSuperclass(): java.lang.reflect.Type
            public getPackage(): java.lang.Package
            public getInterfaces(): java.lang.Class<any>[]
            public getGenericInterfaces(): java.lang.reflect.Type[]
            public getComponentType(): java.lang.Class<any>
            public getModifiers(): int
            public getSigners(): java.lang.Object[]
            public getEnclosingMethod(): java.lang.reflect.Method
            public getEnclosingConstructor(): java.lang.reflect.Constructor<any>
            public getDeclaringClass(): java.lang.Class<any>
            public getEnclosingClass(): java.lang.Class<any>
            public getSimpleName(): string
            public getTypeName(): string
            public getCanonicalName(): string
            public isAnonymousClass(): boolean
            public isLocalClass(): boolean
            public isMemberClass(): boolean
            public getClasses(): java.lang.Class<any>[]
            public getFields(): java.lang.reflect.Field[]
            public getMethods(): java.lang.reflect.Method[]
            public getConstructors(): java.lang.reflect.Constructor<any>[]
            public getField(arg0: java.lang.String | string): java.lang.reflect.Field
            public getMethod(arg0: java.lang.String | string, ...arg1: java.lang.Class<any>[]): java.lang.reflect.Method
            public getConstructor(...arg0: java.lang.Class<any>[]): java.lang.reflect.Constructor<T>
            public getDeclaredClasses(): java.lang.Class<any>[]
            public getDeclaredFields(): java.lang.reflect.Field[]
            public getDeclaredMethods(): java.lang.reflect.Method[]
            public getDeclaredConstructors(): java.lang.reflect.Constructor<any>[]
            public getDeclaredField(arg0: java.lang.String | string): java.lang.reflect.Field
            public getDeclaredMethod(arg0: java.lang.String | string, ...arg1: java.lang.Class<any>[]): java.lang.reflect.Method
            public getDeclaredConstructor(...arg0: java.lang.Class<any>[]): java.lang.reflect.Constructor<T>
            public getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
            public getResource(arg0: java.lang.String | string): java.net.URL
            public getProtectionDomain(): java.security.ProtectionDomain
            public desiredAssertionStatus(): boolean
            public isEnum(): boolean
            public getEnumConstants(): T[]
            public cast(arg0: java.lang.Object): T
            public asSubclass<U>(arg0: java.lang.Class<U>): java.lang.Class<U>
            public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
            public isAnnotationPresent<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
            public getAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
            public getAnnotations<A extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
            public getDeclaredAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
            public getDeclaredAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
            public getDeclaredAnnotations<A extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
            public getAnnotatedSuperclass<A extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType
            public getAnnotatedInterfaces<A extends java.lang.annotation.Annotation>(): java.lang.reflect.AnnotatedType[]
            public static class: java.lang.Class<any>
        }
    }
}