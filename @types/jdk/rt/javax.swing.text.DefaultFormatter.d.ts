declare namespace javax {
    namespace swing {
        namespace text {
            class DefaultFormatter extends javax.swing.JFormattedTextField$AbstractFormatter implements java.lang.Cloneable , java.io.Serializable {
                public constructor()
                public install(arg0: javax.swing.JFormattedTextField): void
                public setCommitsOnValidEdit(arg0: boolean): void
                public getCommitsOnValidEdit(): boolean
                public setOverwriteMode(arg0: boolean): void
                public getOverwriteMode(): boolean
                public setAllowsInvalid(arg0: boolean): void
                public getAllowsInvalid(): boolean
                public setValueClass(arg0: java.lang.Class<any>): void
                public getValueClass(): java.lang.Class<any>
                public stringToValue(arg0: java.lang.String | string): java.lang.Object
                public valueToString(arg0: java.lang.Object): string
                protected getDocumentFilter(): javax.swing.text.DocumentFilter
                protected getNavigationFilter(): javax.swing.text.NavigationFilter
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}