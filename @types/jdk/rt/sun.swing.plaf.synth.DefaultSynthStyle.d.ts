declare namespace sun {
    namespace swing {
        namespace plaf {
            namespace synth {
class DefaultSynthStyle extends javax.swing.plaf.synth.SynthStyle implements java.lang.Cloneable {
    public constructor()
    public constructor(arg0: sun.swing.plaf.synth.DefaultSynthStyle)
    public constructor(arg0: java.awt.Insets, arg1: boolean, arg2: sun.swing.plaf.synth.DefaultSynthStyle$StateInfo[], arg3: java.util.Map)
    public getColor(arg0: javax.swing.plaf.synth.SynthContext, arg1: javax.swing.plaf.synth.ColorType): java.awt.Color
    public getColor(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.plaf.synth.Region, arg2: int, arg3: javax.swing.plaf.synth.ColorType): java.awt.Color
    protected getColorForState(arg0: javax.swing.plaf.synth.SynthContext, arg1: javax.swing.plaf.synth.ColorType): java.awt.Color
    protected getColorForState(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.plaf.synth.Region, arg2: int, arg3: javax.swing.plaf.synth.ColorType): java.awt.Color
    public setFont(arg0: java.awt.Font): void
    public getFont(arg0: javax.swing.plaf.synth.SynthContext): java.awt.Font
    public getFont(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.plaf.synth.Region, arg2: int): java.awt.Font
    protected getFontForState(arg0: javax.swing.JComponent | javax.swing.JComponent$$Lambda, arg1: javax.swing.plaf.synth.Region, arg2: int): java.awt.Font
    protected getFontForState(arg0: javax.swing.plaf.synth.SynthContext): java.awt.Font
    public setGraphicsUtils(arg0: javax.swing.plaf.synth.SynthGraphicsUtils): void
    public getGraphicsUtils(arg0: javax.swing.plaf.synth.SynthContext): javax.swing.plaf.synth.SynthGraphicsUtils
    public setInsets(arg0: java.awt.Insets): void
    public getInsets(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.awt.Insets): java.awt.Insets
    public setPainter(arg0: javax.swing.plaf.synth.SynthPainter): void
    public getPainter(arg0: javax.swing.plaf.synth.SynthContext): javax.swing.plaf.synth.SynthPainter
    public setOpaque(arg0: boolean): void
    public isOpaque(arg0: javax.swing.plaf.synth.SynthContext): boolean
    public setData(arg0: java.util.Map): void
    public getData(): java.util.Map
    public get(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object): java.lang.Object
    public getDefaultValue(arg0: javax.swing.plaf.synth.SynthContext, arg1: java.lang.Object): java.lang.Object
    public clone(): java.lang.Object
    public addTo(arg0: sun.swing.plaf.synth.DefaultSynthStyle): sun.swing.plaf.synth.DefaultSynthStyle
    public setStateInfo(arg0: sun.swing.plaf.synth.DefaultSynthStyle$StateInfo[]): void
    public getStateInfo(): sun.swing.plaf.synth.DefaultSynthStyle$StateInfo[]
    public getStateInfo(arg0: int): sun.swing.plaf.synth.DefaultSynthStyle$StateInfo
    public toString(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}