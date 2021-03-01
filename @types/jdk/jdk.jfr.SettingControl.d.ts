declare namespace jdk {
  namespace jfr {

    abstract class SettingControl extends jdk.jfr.internal.Control {

      protected constructor()
      public abstract combine(arg0: java.util.Set<java.lang.String>): java.lang.String
      public abstract setValue(arg0: java.lang.String): void
      public abstract getValue(): java.lang.String
    }

  }
}
