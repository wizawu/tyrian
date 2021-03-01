declare namespace javax {
  namespace print {

    abstract class ServiceUIFactory {

      public static readonly JCOMPONENT_UI: java.lang.String
      public static readonly PANEL_UI: java.lang.String
      public static readonly DIALOG_UI: java.lang.String
      public static readonly JDIALOG_UI: java.lang.String
      public static readonly ABOUT_UIROLE: int
      public static readonly ADMIN_UIROLE: int
      public static readonly MAIN_UIROLE: int
      public static readonly RESERVED_UIROLE: int
      public constructor()
      public abstract getUI(arg0: int, arg1: java.lang.String): java.lang.Object
      public abstract getUIClassNamesForRole(arg0: int): java.lang.String[]
    }

  }
}
