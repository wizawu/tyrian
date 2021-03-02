declare namespace java {
  namespace lang {
    namespace reflect {

      class Constructor<T> extends java.lang.reflect.Executable {
        getGenericInfo(): sun.reflect.generics.repository.ConstructorRepository
        getRoot(): java.lang.reflect.Constructor<T>
        constructor(arg0: java.lang.Class<T>, arg1: java.lang.Class<unknown>[], arg2: java.lang.Class<unknown>[], arg3: int, arg4: int, arg5: java.lang.String, arg6: byte[], arg7: byte[])
        copy(): java.lang.reflect.Constructor<T>
        public setAccessible(arg0: boolean): void
        checkCanSetAccessible(arg0: java.lang.Class<unknown>): void
        hasGenericInformation(): boolean
        getAnnotationBytes(): byte[]
        public getDeclaringClass(): java.lang.Class<T>
        public getName(): java.lang.String
        public getModifiers(): int
        public getTypeParameters(): java.lang.reflect.TypeVariable<java.lang.reflect.Constructor<T>>[]
        getSharedParameterTypes(): java.lang.Class<unknown>[]
        getSharedExceptionTypes(): java.lang.Class<unknown>[]
        public getParameterTypes(): java.lang.Class<unknown>[]
        public getParameterCount(): int
        public getGenericParameterTypes(): java.lang.reflect.Type[]
        public getExceptionTypes(): java.lang.Class<unknown>[]
        public getGenericExceptionTypes(): java.lang.reflect.Type[]
        public equals(arg0: java.lang.Object): boolean
        public hashCode(): int
        public toString(): java.lang.String
        specificToStringHeader(arg0: java.lang.StringBuilder): void
        toShortString(): java.lang.String
        public toGenericString(): java.lang.String
        specificToGenericStringHeader(arg0: java.lang.StringBuilder): void
        public newInstance(...arg0: java.lang.Object[]): T
        public isVarArgs(): boolean
        public isSynthetic(): boolean
        getConstructorAccessor(): jdk.internal.reflect.ConstructorAccessor
        setConstructorAccessor(arg0: jdk.internal.reflect.ConstructorAccessor): void
        getSlot(): int
        getSignature(): java.lang.String
        getRawAnnotations(): byte[]
        getRawParameterAnnotations(): byte[]
        public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
        public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
        public getParameterAnnotations(): java.lang.annotation.Annotation[][]
        handleParameterNumberMismatch(arg0: int, arg1: int): boolean
        public getAnnotatedReturnType(): java.lang.reflect.AnnotatedType
        public getAnnotatedReceiverType(): java.lang.reflect.AnnotatedType
        getRoot(): java.lang.reflect.AccessibleObject
      }

    }
  }
}
