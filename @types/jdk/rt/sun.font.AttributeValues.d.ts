declare namespace sun {
    namespace font {
        class AttributeValues implements java.lang.Cloneable {
            public static readonly MASK_ALL: int
            public constructor()
            public getFamily(): string
            public setFamily(arg0: java.lang.String | string): void
            public getWeight(): float
            public setWeight(arg0: float): void
            public getWidth(): float
            public setWidth(arg0: float): void
            public getPosture(): float
            public setPosture(arg0: float): void
            public getSize(): float
            public setSize(arg0: float): void
            public getTransform(): java.awt.geom.AffineTransform
            public setTransform(arg0: java.awt.geom.AffineTransform): void
            public setTransform(arg0: java.awt.font.TransformAttribute): void
            public getSuperscript(): int
            public setSuperscript(arg0: int): void
            public getFont(): java.awt.Font
            public setFont(arg0: java.awt.Font): void
            public getCharReplacement(): java.awt.font.GraphicAttribute
            public setCharReplacement(arg0: java.awt.font.GraphicAttribute): void
            public getForeground(): java.awt.Paint
            public setForeground(arg0: java.awt.Paint): void
            public getBackground(): java.awt.Paint
            public setBackground(arg0: java.awt.Paint): void
            public getUnderline(): int
            public setUnderline(arg0: int): void
            public getStrikethrough(): boolean
            public setStrikethrough(arg0: boolean): void
            public getRunDirection(): int
            public setRunDirection(arg0: int): void
            public getBidiEmbedding(): int
            public setBidiEmbedding(arg0: int): void
            public getJustification(): float
            public setJustification(arg0: float): void
            public getInputMethodHighlight(): java.lang.Object
            public setInputMethodHighlight(arg0: java.text.Annotation): void
            public setInputMethodHighlight(arg0: java.awt.im.InputMethodHighlight): void
            public getInputMethodUnderline(): int
            public setInputMethodUnderline(arg0: int): void
            public getSwapColors(): boolean
            public setSwapColors(arg0: boolean): void
            public getNumericShaping(): java.awt.font.NumericShaper
            public setNumericShaping(arg0: java.awt.font.NumericShaper): void
            public getKerning(): int
            public setKerning(arg0: int): void
            public getTracking(): float
            public setTracking(arg0: float): void
            public getLigatures(): int
            public setLigatures(arg0: int): void
            public getBaselineTransform(): java.awt.geom.AffineTransform
            public getCharTransform(): java.awt.geom.AffineTransform
            public static getMask(arg0: sun.font.EAttribute): int
            public static getMask(...arg0: sun.font.EAttribute[]): int
            public unsetDefault(): void
            public defineAll(arg0: int): void
            public allDefined(arg0: int): boolean
            public anyDefined(arg0: int): boolean
            public anyNonDefault(arg0: int): boolean
            public isDefined(arg0: sun.font.EAttribute): boolean
            public isNonDefault(arg0: sun.font.EAttribute): boolean
            public setDefault(arg0: sun.font.EAttribute): void
            public unset(arg0: sun.font.EAttribute): void
            public set(arg0: sun.font.EAttribute, arg1: sun.font.AttributeValues): void
            public set(arg0: sun.font.EAttribute, arg1: java.lang.Object): void
            public get(arg0: sun.font.EAttribute): java.lang.Object
            public merge(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>): sun.font.AttributeValues
            public merge(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>, arg1: int): sun.font.AttributeValues
            public merge(arg0: sun.font.AttributeValues): sun.font.AttributeValues
            public merge(arg0: sun.font.AttributeValues, arg1: int): sun.font.AttributeValues
            public static fromMap(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>): sun.font.AttributeValues
            public static fromMap(arg0: java.util.Map<java.text.AttributedCharacterIterator$Attribute, any>, arg1: int): sun.font.AttributeValues
            public toMap(arg0: java.util.Map<java.awt.font.TextAttribute, java.lang.Object>): java.util.Map<java.awt.font.TextAttribute, java.lang.Object>
            public static is16Hashtable(arg0: java.util.Hashtable<java.lang.Object, java.lang.Object>): boolean
            public static fromSerializableHashtable(arg0: java.util.Hashtable<java.lang.Object, java.lang.Object>): sun.font.AttributeValues
            public toSerializableHashtable(): java.util.Hashtable<java.lang.Object, java.lang.Object>
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public equals(arg0: sun.font.AttributeValues): boolean
            public clone(): sun.font.AttributeValues
            public toString(): string
            public static getJustification(arg0: java.util.Map<any, any>): float
            public static getNumericShaping(arg0: java.util.Map<any, any>): java.awt.font.NumericShaper
            public applyIMHighlight(): sun.font.AttributeValues
            public static getBaselineTransform(arg0: java.util.Map<any, any>): java.awt.geom.AffineTransform
            public static getCharTransform(arg0: java.util.Map<any, any>): java.awt.geom.AffineTransform
            public updateDerivedTransforms(): void
            public static extractXRotation(arg0: java.awt.geom.AffineTransform, arg1: boolean): java.awt.geom.AffineTransform
            public static extractYRotation(arg0: java.awt.geom.AffineTransform, arg1: boolean): java.awt.geom.AffineTransform
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
    }
}