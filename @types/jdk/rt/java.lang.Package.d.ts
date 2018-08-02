declare namespace java {
    namespace lang {
        class Package implements java.lang.reflect.AnnotatedElement {
            public getName(): string
            public getSpecificationTitle(): string
            public getSpecificationVersion(): string
            public getSpecificationVendor(): string
            public getImplementationTitle(): string
            public getImplementationVersion(): string
            public getImplementationVendor(): string
            public isSealed(): boolean
            public isSealed(arg0: java.net.URL): boolean
            public isCompatibleWith(arg0: java.lang.String | string): boolean
            public static getPackage(arg0: java.lang.String | string): java.lang.Package
            public static getPackages(): java.lang.Package[]
            public hashCode(): int
            public toString(): string
            public getAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
            public isAnnotationPresent<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<java.lang.annotation.Annotation>): boolean
            public getAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
            public getAnnotations<A extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
            public getDeclaredAnnotation<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A
            public getDeclaredAnnotationsByType<A extends java.lang.annotation.Annotation>(arg0: java.lang.Class<A>): A[]
            public getDeclaredAnnotations<A extends java.lang.annotation.Annotation>(): java.lang.annotation.Annotation[]
            public static class: java.lang.Class<any>
        }
    }
}