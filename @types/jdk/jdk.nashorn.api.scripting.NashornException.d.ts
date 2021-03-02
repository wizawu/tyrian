declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {

        abstract class NashornException extends java.lang.RuntimeException {
          static readonly $assertionsDisabled: boolean
          protected constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
          protected constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer)
          protected constructor(arg0: java.lang.String | string, arg1: java.lang.Throwable)
          public getFileName(): java.lang.String
          public setFileName(arg0: java.lang.String | string): void
          public getLineNumber(): number
          public setLineNumber(arg0: number | java.lang.Integer): void
          public getColumnNumber(): number
          public setColumnNumber(arg0: number | java.lang.Integer): void
          public static getScriptFrames(arg0: java.lang.Throwable): java.lang.StackTraceElement[]
          public static getScriptStackString(arg0: java.lang.Throwable): java.lang.String
          protected getThrown(): java.lang.Object
          initEcmaError(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.api.scripting.NashornException
          public getEcmaError(): java.lang.Object
          public setEcmaError(arg0: java.lang.Object | any): void
        }

      }
    }
  }
}
