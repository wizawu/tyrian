declare namespace java {
  namespace lang {
    namespace reflect {
      class Method extends java.lang.reflect.Executable {
        getGenericInfo(): sun.reflect.generics.repository.MethodRepository
        constructor(
          arg0: java.lang.Class<unknown>,
          arg1: java.lang.String | string,
          arg2: java.lang.Class<unknown>[],
          arg3: java.lang.Class<unknown>,
          arg4: java.lang.Class<unknown>[],
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: java.lang.String | string,
          arg8: number[] | java.lang.Byte[],
          arg9: number[] | java.lang.Byte[],
          arg10: number[] | java.lang.Byte[]
        )
        copy(): java.lang.reflect.Method
        leafCopy(): java.lang.reflect.Method
        public setAccessible(arg0: boolean | java.lang.Boolean): void
        checkCanSetAccessible(arg0: java.lang.Class<unknown>): void
        getRoot(): java.lang.reflect.Method
        hasGenericInformation(): boolean
        getAnnotationBytes(): number[]
        public getDeclaringClass(): java.lang.Class<unknown>
        public getName(): java.lang.String
        public getModifiers(): number
        public getTypeParameters(): java.lang.reflect.TypeVariable<java.lang.reflect.Method>[]
        public getReturnType(): java.lang.Class<unknown>
        public getGenericReturnType(): java.lang.reflect.Type
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
        public invoke(arg0: java.lang.Object | any, ...vargs: (java.lang.Object | any)[]): java.lang.Object
        public isBridge(): boolean
        public isVarArgs(): boolean
        public isSynthetic(): boolean
        public isDefault(): boolean
        getMethodAccessor(): jdk.internal.reflect.MethodAccessor
        setMethodAccessor(arg0: jdk.internal.reflect.MethodAccessor): void
        public getDefaultValue(): java.lang.Object
        public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
        public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
        public getParameterAnnotations(): java.lang.annotation.Annotation[][]
        public getAnnotatedReturnType(): java.lang.reflect.AnnotatedType
        handleParameterNumberMismatch(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): boolean
        getGenericInfo(): sun.reflect.generics.repository.ConstructorRepository
        getRoot(): java.lang.reflect.AccessibleObject
      }
    }
  }
}
