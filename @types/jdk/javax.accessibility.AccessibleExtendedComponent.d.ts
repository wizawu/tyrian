declare namespace javax {
  namespace accessibility {
    interface AccessibleExtendedComponent extends javax.accessibility.AccessibleComponent {
      getToolTipText(): java.lang.String
      getTitledBorderText(): java.lang.String
      getAccessibleKeyBinding(): javax.accessibility.AccessibleKeyBinding
    }
  }
}
