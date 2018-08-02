declare namespace javax {
    namespace swing {
        namespace colorchooser {
            class ValueFormatter extends javax.swing.JFormattedTextField$AbstractFormatter implements java.awt.event.FocusListener , java.lang.Runnable {
                public stringToValue(arg0: java.lang.String | string): java.lang.Object
                public valueToString(arg0: java.lang.Object): string
                protected getDocumentFilter(): javax.swing.text.DocumentFilter
                public focusGained(arg0: java.awt.event.FocusEvent): void
                public focusLost(arg0: java.awt.event.FocusEvent): void
                public run(): void
                public static class: java.lang.Class<any>
            }
            class ValueFormatter$$Lambda extends javax.swing.JFormattedTextField$AbstractFormatter implements java.awt.event.FocusListener , java.lang.Runnable {
                public (arg0: java.lang.String | string): java.lang.Object
            }
        }
    }
}