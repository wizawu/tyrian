declare namespace java {
  namespace rmi {

    class Naming {

      public static lookup(arg0: java.lang.String): java.rmi.Remote
      public static bind(arg0: java.lang.String, arg1: java.rmi.Remote): void
      public static unbind(arg0: java.lang.String): void
      public static rebind(arg0: java.lang.String, arg1: java.rmi.Remote): void
      public static list(arg0: java.lang.String): java.lang.String[]
    }

  }
}
