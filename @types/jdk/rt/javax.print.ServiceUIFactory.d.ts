declare namespace javax {
    namespace print {
        abstract class ServiceUIFactory {
            public static readonly JCOMPONENT_UI: string
            public static readonly PANEL_UI: string
            public static readonly DIALOG_UI: string
            public static readonly JDIALOG_UI: string
            public static readonly ABOUT_UIROLE: int
            public static readonly ADMIN_UIROLE: int
            public static readonly MAIN_UIROLE: int
            public static readonly RESERVED_UIROLE: int
            public constructor()
            public abstract getUI(arg0: int, arg1: java.lang.String | string): java.lang.Object
            public abstract getUIClassNamesForRole(arg0: int): java.lang.String[]
            public static class: java.lang.Class<any>
        }
    }
}