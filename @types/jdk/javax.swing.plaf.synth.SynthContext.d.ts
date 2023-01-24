declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace synth {
        class SynthContext {
          static getContext(
            arg0: javax.swing.JComponent,
            arg1: javax.swing.plaf.synth.SynthStyle,
            arg2: number | java.lang.Integer
          ): javax.swing.plaf.synth.SynthContext
          static getContext(
            arg0: javax.swing.JComponent,
            arg1: javax.swing.plaf.synth.Region,
            arg2: javax.swing.plaf.synth.SynthStyle,
            arg3: number | java.lang.Integer
          ): javax.swing.plaf.synth.SynthContext
          public constructor(
            arg0: javax.swing.JComponent,
            arg1: javax.swing.plaf.synth.Region,
            arg2: javax.swing.plaf.synth.SynthStyle,
            arg3: number | java.lang.Integer
          )
          public getComponent(): javax.swing.JComponent
          public getRegion(): javax.swing.plaf.synth.Region
          isSubregion(): boolean
          setStyle(arg0: javax.swing.plaf.synth.SynthStyle): void
          public getStyle(): javax.swing.plaf.synth.SynthStyle
          setComponentState(arg0: number | java.lang.Integer): void
          public getComponentState(): number
          getPainter(): javax.swing.plaf.synth.SynthPainter
        }
      }
    }
  }
}
