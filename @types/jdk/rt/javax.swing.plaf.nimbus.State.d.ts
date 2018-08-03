declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace nimbus {
                abstract class State<T extends javax.swing.JComponent> {
                    protected constructor(arg0: java.lang.String | string)
                    public toString(): string
                    protected abstract isInState(arg0: T): boolean
                    public static class: java.lang.Class<any>
                }
                interface State$$Lambda<T extends javax.swing.JComponent> {
                    (arg0: T): boolean
                }
            }
        }
    }
}