declare namespace java {
  namespace lang {

    class Package extends java.lang.NamedPackage implements java.lang.reflect.AnnotatedElement {

      public getName(): java.lang.String
      public getSpecificationTitle(): java.lang.String
      public getSpecificationVersion(): java.lang.String
      public getSpecificationVendor(): java.lang.String
      public getImplementationTitle(): java.lang.String
      public getImplementationVersion(): java.lang.String
      public getImplementationVendor(): java.lang.String
      public isSealed(): boolean
      public isSealed(arg0: java.net.URL): boolean
      public isCompatibleWith(arg0: java.lang.String): boolean
      public static getPackage(arg0: java.lang.String): java.lang.Package
      public static getPackages(): java.lang.Package[]
      public hashCode(): int
      public toString(): java.lang.String
      public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
      public isAnnotationPresent(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
      public getAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
      public getAnnotations(): java.lang.annotation.Annotation[]
      public getDeclaredAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
      public getDeclaredAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
      public getDeclaredAnnotations(): java.lang.annotation.Annotation[]
      constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String, arg5: java.lang.String, arg6: java.lang.String, arg7: java.net.URL, arg8: java.lang.ClassLoader)
      constructor(arg0: java.lang.String, arg1: java.lang.Module)
    }

  }
}
