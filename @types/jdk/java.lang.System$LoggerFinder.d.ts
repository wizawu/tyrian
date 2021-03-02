declare namespace java {
  namespace lang {

    abstract class System$LoggerFinder {
      static readonly LOGGERFINDER_PERMISSION: java.lang.RuntimePermission
      protected constructor()
      public abstract getLogger(arg0: java.lang.String, arg1: java.lang.Module): java.lang.System$Logger
      public getLocalizedLogger(arg0: java.lang.String, arg1: java.util.ResourceBundle, arg2: java.lang.Module): java.lang.System$Logger
      public static getLoggerFinder(): java.lang.System$LoggerFinder
      static accessProvider(): java.lang.System$LoggerFinder
    }

  }
}
