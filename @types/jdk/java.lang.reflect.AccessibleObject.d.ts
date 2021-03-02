declare namespace java {
  namespace lang {
    namespace reflect {

      class AccessibleObject implements java.lang.reflect.AnnotatedElement {
        override: boolean
        static readonly reflectionFactory: jdk.internal.reflect.ReflectionFactory
        securityCheckCache: java.lang.Object
        static checkPermission(): void
        public static setAccessible(arg0: java.lang.reflect.AccessibleObject[], arg1: boolean | java.lang.Boolean): void
        public setAccessible(arg0: boolean | java.lang.Boolean): void
        setAccessible0(arg0: boolean | java.lang.Boolean): boolean
        public trySetAccessible(): boolean
        checkCanSetAccessible(arg0: java.lang.Class<unknown>): void
        checkCanSetAccessible(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): void
        toShortString(): java.lang.String
        public isAccessible(): boolean
        public canAccess(arg0: java.lang.Object | any): boolean
        protected constructor()
        public getAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
        public isAnnotationPresent(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
        public getAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
        public getAnnotations(): java.lang.annotation.Annotation[]
        public getDeclaredAnnotation<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T
        public getDeclaredAnnotationsByType<T extends java.lang.annotation.Annotation>(arg0: java.lang.Class<T>): T[]
        public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
        checkAccess(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>, arg2: java.lang.Class<unknown>, arg3: number | java.lang.Integer): void
        verifyAccess(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>, arg2: java.lang.Class<unknown>, arg3: number | java.lang.Integer): boolean
        getRoot(): java.lang.reflect.AccessibleObject
      }

    }
  }
}
