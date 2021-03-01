declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {

        abstract class NashornException extends java.lang.RuntimeException {

          static readonly $assertionsDisabled: boolean
          protected constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: int)
          protected constructor(arg0: java.lang.String, arg1: java.lang.Throwable, arg2: java.lang.String, arg3: int, arg4: int)
          protected constructor(arg0: java.lang.String, arg1: java.lang.Throwable)
          public readonly getFileName(): java.lang.String
          public readonly setFileName(arg0: java.lang.String): void
          public readonly getLineNumber(): int
          public readonly setLineNumber(arg0: int): void
          public readonly getColumnNumber(): int
          public readonly setColumnNumber(arg0: int): void
          public static getScriptFrames(arg0: java.lang.Throwable): java.lang.StackTraceElement[]
          public static getScriptStackString(arg0: java.lang.Throwable): java.lang.String
          protected getThrown(): java.lang.Object
          initEcmaError(arg0: jdk.nashorn.internal.runtime.ScriptObject): jdk.nashorn.api.scripting.NashornException
          public getEcmaError(): java.lang.Object
          public setEcmaError(arg0: java.lang.Object): void
        }

      }
    }
  }
}