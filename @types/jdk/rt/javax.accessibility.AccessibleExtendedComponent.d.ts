declare namespace javax {
    namespace accessibility {
interface AccessibleExtendedComponent extends javax.accessibility.AccessibleComponent {
    getToolTipText(): string
    getTitledBorderText(): string
    getAccessibleKeyBinding(): javax.accessibility.AccessibleKeyBinding
}

    }
}