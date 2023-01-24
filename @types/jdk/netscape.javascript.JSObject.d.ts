declare namespace netscape {
  namespace javascript {
    abstract class JSObject {
      protected constructor()
      public abstract call(arg0: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.lang.Object
      public abstract eval(arg0: java.lang.String | string): java.lang.Object
      public abstract getMember(arg0: java.lang.String | string): java.lang.Object
      public abstract setMember(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      public abstract removeMember(arg0: java.lang.String | string): void
      public abstract getSlot(arg0: number | java.lang.Integer): java.lang.Object
      public abstract setSlot(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
      public static getWindow(arg0: java.applet.Applet): netscape.javascript.JSObject
    }
  }
}
