declare namespace javax {
    namespace swing {
        abstract class InputVerifier {
            public constructor()
            public abstract verify(arg0: javax.swing.JComponent): boolean
            public shouldYieldFocus(arg0: javax.swing.JComponent): boolean
            public static class: java.lang.Class<any>
        }
        interface InputVerifier$$Lambda {
            (arg0: javax.swing.JComponent): boolean
        }
    }
}