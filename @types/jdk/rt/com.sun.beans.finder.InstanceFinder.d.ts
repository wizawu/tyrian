declare namespace com {
    namespace sun {
        namespace beans {
            namespace finder {
                class InstanceFinder<T> {
                    public getPackages(): java.lang.String[]
                    public setPackages(...arg0: java.lang.String[]): void
                    public find(arg0: java.lang.Class<any>): T
                    protected instantiate(arg0: java.lang.Class<any>, arg1: java.lang.String | string): T
                    protected instantiate(arg0: java.lang.Class<any>, arg1: java.lang.String | string, arg2: java.lang.String | string): T
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}