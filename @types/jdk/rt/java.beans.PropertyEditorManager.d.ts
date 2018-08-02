declare namespace java {
    namespace beans {
        class PropertyEditorManager {
            public constructor()
            public static registerEditor(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): void
            public static findEditor(arg0: java.lang.Class<any>): java.beans.PropertyEditor
            public static getEditorSearchPath(): java.lang.String[]
            public static setEditorSearchPath(arg0: java.lang.String[]): void
            public static class: java.lang.Class<any>
        }
    }
}