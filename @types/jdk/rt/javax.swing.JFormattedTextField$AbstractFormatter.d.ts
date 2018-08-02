declare namespace javax {
    namespace swing {
abstract class JFormattedTextField$AbstractFormatter implements java.io.Serializable {
    public constructor()
    public install(arg0: javax.swing.JFormattedTextField): void
    public uninstall(): void
    public stringToValue(arg0: java.lang.String | string): java.lang.Object
    public valueToString(arg0: java.lang.Object): string
    protected getFormattedTextField(): javax.swing.JFormattedTextField
    protected invalidEdit(): void
    protected setEditValid(arg0: boolean): void
    protected getActions(): javax.swing.Action[]
    protected getDocumentFilter(): javax.swing.text.DocumentFilter
    protected getNavigationFilter(): javax.swing.text.NavigationFilter
    protected clone(): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}