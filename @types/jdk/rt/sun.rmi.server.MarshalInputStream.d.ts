declare namespace sun {
    namespace rmi {
        namespace server {
            class MarshalInputStream extends java.io.ObjectInputStream {
                protected static permittedSunClasses: java.util.Map<java.lang.String, java.lang.Class<any>>
                public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                public getDoneCallback(arg0: java.lang.Object): java.lang.Runnable
                public setDoneCallback(arg0: java.lang.Object, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public done(): void
                public close(): void
                protected resolveClass(arg0: java.io.ObjectStreamClass): java.lang.Class<any>
                protected resolveProxyClass(arg0: java.lang.String[]): java.lang.Class<any>
                protected readLocation(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}