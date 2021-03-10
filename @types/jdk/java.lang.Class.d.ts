declare namespace java {
  namespace lang {

    class Class<T> implements java.io.Serializable, java.lang.reflect.GenericDeclaration, java.lang.reflect.Type, java.lang.reflect.AnnotatedElement {
      classValueMap: java.lang.ClassValue$ClassValueMap
      public toString(): java.lang.String
      public toGenericString(): java.lang.String
      public static forName(arg0: java.lang.String | string): java.lang.Class<unknown>
      public static forName(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean, arg2: java.lang.ClassLoader): java.lang.Class<unknown>
      public static forName(arg0: java.lang.Module, arg1: java.lang.String | string): java.lang.Class<unknown>
      public newInstance(): T
      public isInstance(arg0: java.lang.Object | any): boolean
      public isAssignableFrom(arg0: java.lang.Class<unknown>): boolean
      public isInterface(): boolean
      public isArray(): boolean
      public isPrimitive(): boolean
      public isAnnotation(): boolean
      public isSynthetic(): boolean
      public getName(): java.lang.String
      public getClassLoader(): java.lang.ClassLoader
      getClassLoader0(): java.lang.ClassLoader
      public getModule(): java.lang.Module
      public getTypeParameters(): java.lang.reflect.TypeVariable<java.lang.Class<T>>[]
      public getSuperclass(): java.lang.Class<unknown>
      public getGenericSuperclass(): java.lang.reflect.Type
      public getPackage(): java.lang.Package
      public getPackageName(): java.lang.String
      public getInterfaces(): java.lang.Class<unknown>[]
      public getGenericInterfaces(): java.lang.reflect.Type[]
      public getComponentType(): java.lang.Class<unknown>
      public getModifiers(): number
      public getSigners(): java.lang.Object[]
      setSigners(arg0: java.lang.Object[] | any[]): void
      public getEnclosingMethod(): java.lang.reflect.Method
      public getEnclosingConstructor(): java.lang.reflect.Constructor<unknown>
      public getDeclaringClass(): java.lang.Class<unknown>
      public getEnclosingClass(): java.lang.Class<unknown>
      public getSimpleName(): java.lang.String
      public getTypeName(): java.lang.String
      public getCanonicalName(): java.lang.String
      public isAnonymousClass(): boolean
      public isLocalClass(): boolean
      public isMemberClass(): boolean
      public getClasses(): java.lang.Class<unknown>[]
      public getFields(): java.lang.reflect.Field[]
      public getMethods(): java.lang.reflect.Method[]
      public getConstructors(): java.lang.reflect.Constructor<unknown>[]
      public getField(arg0: java.lang.String | string): java.lang.reflect.Field
      public getMethod(arg0: java.lang.String | string, ...vargs: (java.lang.Class<unknown>)[]): java.lang.reflect.Method
      public getConstructor(...vargs: (java.lang.Class<unknown>)[]): java.lang.reflect.Constructor<T>
      public getDeclaredClasses(): java.lang.Class<unknown>[]
      public getDeclaredFields(): java.lang.reflect.Field[]
      public getDeclaredMethods(): java.lang.reflect.Method[]
      public getDeclaredConstructors(): java.lang.reflect.Constructor<unknown>[]
      public getDeclaredField(arg0: java.lang.String | string): java.lang.reflect.Field
      public getDeclaredMethod(arg0: java.lang.String | string, ...vargs: (java.lang.Class<unknown>)[]): java.lang.reflect.Method
      getDeclaredPublicMethods(arg0: java.lang.String | string, ...vargs: (java.lang.Class<unknown>)[]): java.util.List<java.lang.reflect.Method>
      public getDeclaredConstructor(...vargs: (java.lang.Class<unknown>)[]): java.lang.reflect.Constructor<T>
      public getResourceAsStream(arg0: java.lang.String | string): java.io.InputStream
      public getResource(arg0: java.lang.String | string): java.net.URL
      public getProtectionDomain(): java.security.ProtectionDomain
      static getPrimitiveClass(arg0: java.lang.String | string): java.lang.Class<unknown>
      getRawAnnotations(): number[]
      getRawTypeAnnotations(): number[]
      static getExecutableTypeAnnotationBytes(arg0: java.lang.reflect.Executable): number[]
      getConstantPool(): jdk.internal.reflect.ConstantPool
      public desiredAssertionStatus(): boolean
      public isEnum(): boolean
      public getEnumConstants(): T[]
      getEnumConstantsShared(): T[]
      enumConstantDirectory(): java.util.Map<java.lang.String,T>
      public cast(arg0: java.lang.Object | any): T
      public asSubclass<U>(arg0: java.lang.Class<U>): java.lang.Class<U>
      public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
      public isAnnotationPresent(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
      public getAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
      public getAnnotations(): java.lang.annotation.Annotation[]
      public getDeclaredAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
      public getDeclaredAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
      public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
      casAnnotationType(arg0: sun.reflect.annotation.AnnotationType, arg1: sun.reflect.annotation.AnnotationType): boolean
      getAnnotationType(): sun.reflect.annotation.AnnotationType
      getDeclaredAnnotationMap(): java.util.Map<java.lang.Class<java.lang.annotation.Annotation>,java.lang.annotation.Annotation>
      public getAnnotatedSuperclass(): java.lang.reflect.AnnotatedType
      public getAnnotatedInterfaces(): java.lang.reflect.AnnotatedType[]
      public getNestHost(): java.lang.Class<unknown>
      public isNestmateOf(arg0: java.lang.Class<unknown>): boolean
      public getNestMembers(): java.lang.Class<unknown>[]
    }

  }
}
