declare namespace java {
  namespace lang {
    namespace reflect {
      class Constructor<T> extends java.lang.reflect.Executable {
        getGenericInfo(): sun.reflect.generics.repository.ConstructorRepository
        getRoot(): java.lang.reflect.Constructor<T>
        constructor(
          arg0: java.lang.Class<T>,
          arg1: java.lang.Class<unknown>[],
          arg2: java.lang.Class<unknown>[],
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: java.lang.String | string,
          arg6: number[] | java.lang.Byte[],
          arg7: number[] | java.lang.Byte[]
        )
        copy(): java.lang.reflect.Constructor<T>
        public setAccessible(arg0: boolean | java.lang.Boolean): void
        checkCanSetAccessible(arg0: java.lang.Class<unknown>): void
        hasGenericInformation(): boolean
        getAnnotationBytes(): number[]
        public getDeclaringClass(): java.lang.Class<T>
        public getName(): java.lang.String
        public getModifiers(): number
        public getTypeParameters(): java.lang.reflect.TypeVariable<java.lang.reflect.Constructor<T>>[]
        getSharedParameterTypes(): java.lang.Class<unknown>[]
        getSharedExceptionTypes(): java.lang.Class<unknown>[]
        public getParameterTypes(): java.lang.Class<unknown>[]
        public getParameterCount(): number
        public getGenericParameterTypes(): java.lang.reflect.Type[]
        public getExceptionTypes(): java.lang.Class<unknown>[]
        public getGenericExceptionTypes(): java.lang.reflect.Type[]
        public equals(arg0: java.lang.Object | any): boolean
        public hashCode(): number
        public toString(): java.lang.String
        specificToStringHeader(arg0: java.lang.StringBuilder): void
        toShortString(): java.lang.String
        public toGenericString(): java.lang.String
        specificToGenericStringHeader(arg0: java.lang.StringBuilder): void
        public newInstance(...vargs: (java.lang.Object | any)[]): T
        public isVarArgs(): boolean
        public isSynthetic(): boolean
        getConstructorAccessor(): jdk.internal.reflect.ConstructorAccessor
        setConstructorAccessor(arg0: jdk.internal.reflect.ConstructorAccessor): void
        getSlot(): number
        getSignature(): java.lang.String
        getRawAnnotations(): number[]
        getRawParameterAnnotations(): number[]
        public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
        public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
        public getParameterAnnotations(): java.lang.annotation.Annotation[][]
        handleParameterNumberMismatch(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        public getAnnotatedReturnType(): java.lang.reflect.AnnotatedType
        public getAnnotatedReceiverType(): java.lang.reflect.AnnotatedType
        getRoot(): java.lang.reflect.AccessibleObject
      }
    }
  }
}
