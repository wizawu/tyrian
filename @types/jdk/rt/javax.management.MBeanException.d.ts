declare namespace javax {
    namespace management {
        class MBeanException extends javax.management.JMException {
            public constructor(arg0: java.lang.Exception)
            public constructor(arg0: java.lang.Exception, arg1: java.lang.String | string)
            public getTargetException(): java.lang.Exception
            public getCause(): java.lang.Throwable
            public static class: java.lang.Class<any>
        }
    }
}