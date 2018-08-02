declare namespace java {
    namespace beans {
        class IndexedPropertyDescriptor extends java.beans.PropertyDescriptor {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<any>)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Class<any>, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.reflect.Method, arg2: java.lang.reflect.Method, arg3: java.lang.reflect.Method, arg4: java.lang.reflect.Method)
            public getIndexedReadMethod(): java.lang.reflect.Method
            public setIndexedReadMethod(arg0: java.lang.reflect.Method): void
            public getIndexedWriteMethod(): java.lang.reflect.Method
            public setIndexedWriteMethod(arg0: java.lang.reflect.Method): void
            public getIndexedPropertyType(): java.lang.Class<any>
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
    }
}