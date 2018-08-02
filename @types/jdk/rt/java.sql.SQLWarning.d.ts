declare namespace java {
    namespace sql {
class SQLWarning extends java.sql.SQLException {
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string)
    public constructor()
    public constructor(arg0: java.lang.Throwable)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Throwable)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.lang.Throwable)
    public getNextWarning(): java.sql.SQLWarning
    public setNextWarning(arg0: java.sql.SQLWarning): void
    public static class: java.lang.Class<any>
}

    }
}