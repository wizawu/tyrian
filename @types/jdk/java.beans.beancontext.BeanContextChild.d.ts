declare namespace java {
  namespace beans {
    namespace beancontext {

      interface BeanContextChild {
        setBeanContext(arg0: java.beans.beancontext.BeanContext): void
        getBeanContext(): java.beans.beancontext.BeanContext
        addPropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
        removePropertyChangeListener(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
        addVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda): void
        removeVetoableChangeListener(arg0: java.lang.String | string, arg1: java.beans.VetoableChangeListener | java.beans.VetoableChangeListener$$lambda): void
      }

    }
  }
}
