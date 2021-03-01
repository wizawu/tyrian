declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace nimbus {

        abstract class State<T extends javax.swing.JComponent> {

          static readonly standardStates: java.util.Map<java.lang.String,javax.swing.plaf.nimbus.State$StandardState>
          static readonly Enabled: javax.swing.plaf.nimbus.State<javax.swing.JComponent>
          static readonly MouseOver: javax.swing.plaf.nimbus.State<javax.swing.JComponent>
          static readonly Pressed: javax.swing.plaf.nimbus.State<javax.swing.JComponent>
          static readonly Disabled: javax.swing.plaf.nimbus.State<javax.swing.JComponent>
          static readonly Focused: javax.swing.plaf.nimbus.State<javax.swing.JComponent>
          static readonly Selected: javax.swing.plaf.nimbus.State<javax.swing.JComponent>
          static readonly Default: javax.swing.plaf.nimbus.State<javax.swing.JComponent>
          protected constructor(arg0: java.lang.String)
          public toString(): java.lang.String
          isInState(arg0: T, arg1: int): boolean
          protected abstract isInState(arg0: T): boolean
          getName(): java.lang.String
          static isStandardStateName(arg0: java.lang.String): boolean
          static getStandardState(arg0: java.lang.String): javax.swing.plaf.nimbus.State$StandardState
        }

      }
    }
  }
}
