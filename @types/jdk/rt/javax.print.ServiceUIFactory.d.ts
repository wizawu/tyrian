declare namespace javax {
    namespace print {
        abstract class ServiceUIFactory {
            public static JCOMPONENT_UI: string
            public static PANEL_UI: string
            public static DIALOG_UI: string
            public static JDIALOG_UI: string
            public static ABOUT_UIROLE: int
            public static ADMIN_UIROLE: int
            public static MAIN_UIROLE: int
            public static RESERVED_UIROLE: int
            public constructor()
            public getUI(arg0: int, arg1: java.lang.String | string): java.lang.Object
            public getUIClassNamesForRole(arg0: int): java.lang.String[]
            public static class: java.lang.Class<any>
        }
    }
}