declare namespace netscape {
  namespace javascript {

    abstract class JSObject {

      protected constructor()
      public abstract call(arg0: java.lang.String, ...arg1: java.lang.Object[]): java.lang.Object
      public abstract eval(arg0: java.lang.String): java.lang.Object
      public abstract getMember(arg0: java.lang.String): java.lang.Object
      public abstract setMember(arg0: java.lang.String, arg1: java.lang.Object): void
      public abstract removeMember(arg0: java.lang.String): void
      public abstract getSlot(arg0: int): java.lang.Object
      public abstract setSlot(arg0: int, arg1: java.lang.Object): void
      public static getWindow(arg0: java.applet.Applet): netscape.javascript.JSObject
    }

  }
}
