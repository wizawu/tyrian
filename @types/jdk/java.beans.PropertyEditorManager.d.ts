declare namespace java {
  namespace beans {
    class PropertyEditorManager {
      public constructor()
      public static registerEditor(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): void
      public static findEditor(arg0: java.lang.Class<unknown>): java.beans.PropertyEditor
      public static getEditorSearchPath(): java.lang.String[]
      public static setEditorSearchPath(arg0: java.lang.String[] | string[]): void
    }
  }
}
