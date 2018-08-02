declare namespace java {
    namespace sql {
        class SQLClientInfoException extends java.sql.SQLException {
            public constructor()
            public constructor(arg0: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>)
            public constructor(arg0: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>, arg1: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>)
            public constructor(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>, arg2: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>, arg3: java.lang.Throwable)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.util.Map<java.lang.String, java.sql.ClientInfoStatus>, arg4: java.lang.Throwable)
            public getFailedProperties(): java.util.Map<java.lang.String, java.sql.ClientInfoStatus>
            public static class: java.lang.Class<any>
        }
    }
}