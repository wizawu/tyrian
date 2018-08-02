declare namespace javax {
    namespace swing {
        namespace text {
            class InternationalFormatter extends javax.swing.text.DefaultFormatter {
                public constructor()
                public constructor(arg0: java.text.Format)
                public setFormat(arg0: java.text.Format): void
                public getFormat(): java.text.Format
                public setMinimum(arg0: java.lang.Comparable | java.lang.Comparable$$Lambda): void
                public getMinimum(): java.lang.Comparable
                public setMaximum(arg0: java.lang.Comparable | java.lang.Comparable$$Lambda): void
                public getMaximum(): java.lang.Comparable
                public install(arg0: javax.swing.JFormattedTextField): void
                public valueToString(arg0: java.lang.Object): string
                public stringToValue(arg0: java.lang.String | string): java.lang.Object
                public getFields(arg0: int): java.text.Format$Field[]
                public clone(): java.lang.Object
                protected getActions(): javax.swing.Action[]
                public static class: java.lang.Class<any>
            }
        }
    }
}