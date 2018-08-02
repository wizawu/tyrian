declare namespace javax {
    namespace swing {
        namespace plaf {
            namespace basic {
                abstract class BasicLookAndFeel extends javax.swing.LookAndFeel implements java.io.Serializable {
                    public constructor()
                    public getDefaults(): javax.swing.UIDefaults
                    public initialize(): void
                    public uninitialize(): void
                    protected initClassDefaults(arg0: javax.swing.UIDefaults): void
                    protected initSystemColorDefaults(arg0: javax.swing.UIDefaults): void
                    protected loadSystemColors(arg0: javax.swing.UIDefaults, arg1: java.lang.String[], arg2: boolean): void
                    protected initComponentDefaults(arg0: javax.swing.UIDefaults): void
                    protected getAudioActionMap(): javax.swing.ActionMap
                    protected createAudioAction(arg0: java.lang.Object): javax.swing.Action
                    protected playSound(arg0: javax.swing.Action): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}