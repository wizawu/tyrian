declare namespace com {
    namespace sun {
        namespace beans {
            namespace finder {
                class PropertyEditorFinder extends com.sun.beans.finder.InstanceFinder<java.beans.PropertyEditor> {
                    public constructor()
                    public register(arg0: java.lang.Class<any>, arg1: java.lang.Class<any>): void
                    public find(arg0: java.lang.Class<any>): java.beans.PropertyEditor
                    protected instantiate(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.String | string): java.beans.PropertyEditor
                    protected instantiate(arg0: java.lang.Class, arg1: java.lang.String | string, arg2: java.lang.String | string): java.lang.Object
                    public find(arg0: java.lang.Class): java.lang.Object
                    public setPackages(arg0: java.lang.String[]): void
                    public getPackages(): java.lang.String[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}