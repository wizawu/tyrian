declare namespace java {
  namespace util {

    abstract class ResourceBundle {

      protected parent: java.util.ResourceBundle
      static readonly $assertionsDisabled: boolean
      public getBaseBundleName(): java.lang.String
      public constructor()
      public readonly getString(arg0: java.lang.String): java.lang.String
      public readonly getStringArray(arg0: java.lang.String): java.lang.String[]
      public readonly getObject(arg0: java.lang.String): java.lang.Object
      public getLocale(): java.util.Locale
      protected setParent(arg0: java.util.ResourceBundle): void
      public static readonly getBundle(arg0: java.lang.String): java.util.ResourceBundle
      public static readonly getBundle(arg0: java.lang.String, arg1: java.util.ResourceBundle$Control): java.util.ResourceBundle
      public static readonly getBundle(arg0: java.lang.String, arg1: java.util.Locale): java.util.ResourceBundle
      public static getBundle(arg0: java.lang.String, arg1: java.lang.Module): java.util.ResourceBundle
      public static getBundle(arg0: java.lang.String, arg1: java.util.Locale, arg2: java.lang.Module): java.util.ResourceBundle
      public static readonly getBundle(arg0: java.lang.String, arg1: java.util.Locale, arg2: java.util.ResourceBundle$Control): java.util.ResourceBundle
      public static getBundle(arg0: java.lang.String, arg1: java.util.Locale, arg2: java.lang.ClassLoader): java.util.ResourceBundle
      public static getBundle(arg0: java.lang.String, arg1: java.util.Locale, arg2: java.lang.ClassLoader, arg3: java.util.ResourceBundle$Control): java.util.ResourceBundle
      public static readonly clearCache(): void
      public static readonly clearCache(arg0: java.lang.ClassLoader): void
      protected abstract handleGetObject(arg0: java.lang.String): java.lang.Object
      public abstract getKeys(): java.util.Enumeration<java.lang.String>
      public containsKey(arg0: java.lang.String): boolean
      public keySet(): java.util.Set<java.lang.String>
      protected handleKeySet(): java.util.Set<java.lang.String>
    }

  }
}
